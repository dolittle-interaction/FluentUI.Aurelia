// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import * as React from 'react';
import { ComponentProperty } from './ComponentProperty';

export class DOMUtility {

    static getReferenceCallbackFor(component: any, reactUniqueIdentifier?: string) {
        return function (parent: HTMLElement | null) {
            if (!parent) {
                return;
            }

            if (!reactUniqueIdentifier) {
                reactUniqueIdentifier = component.reactUniqueIdentifier;
            }

            const reactElement = document.querySelector(`#${reactUniqueIdentifier}`);

            if (reactElement) {
                DOMUtility.consolidateVisualTrees(component, reactElement, reactUniqueIdentifier || component.uniqueIdentifier);
            }
        };
    }

    static consolidateVisualTrees(component: any, reactParent: Element, reactUniqueIdentifier: string) {
        const aureliaParent = component?.getSourceElementToConsolidateFrom() || component.aureliaParent;
        if (reactParent.childElementCount > 0 && DOMUtility.hasNonReactChildren(reactParent)) {
            component.onReadyToConsolidateBack(() => {
                this.moveElements(reactParent, aureliaParent, reactUniqueIdentifier);
            });
        } else {
            this.moveElements(aureliaParent, reactParent, component.uniqueIdentifier);
        }
    }

    static hasNonReactChildren(source: Element) {
        let hasChildren = true;

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < source.childNodes.length; i++) {
            const child = source.childNodes[i];
            if (DOMUtility.isReactNode(child)) {
                hasChildren = false;
                break;
            }
        }

        return hasChildren;
    }

    static isReactNode(node: any) {
        return Object.keys(node).filter(_ => _.indexOf('__reactInternal') === 0).length > 0;
    }

    static moveElements(source: Element, destination: Element, skipId: string) {
        const childrenToMove: ChildNode[] = [];

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < source.childNodes.length; i++) {
            const child = source.childNodes[i];
            if ((child as any).id === skipId) {
                continue;
            }
            childrenToMove.push(child);
        }

        childrenToMove.forEach(child => {
            source.removeChild(child);
            destination.appendChild(child);
        });
    }
}
