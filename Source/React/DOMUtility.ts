// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
import * as React from 'react';

export class DOMUtility {

    static getReferenceCallbackFor(component: any) {
        return function (parent: HTMLElement | null) {
            if (!component.visible) {
                return;
            }

            const reactElement = document.querySelector(`#${component.reactUniqueIdentifier}`);

            if (reactElement) {
                DOMUtility.consolidateVisualTrees(reactElement, component.element, component.uniqueIdentifier, component.uniqueIdentifier);
            }
        };
    }


    static consolidateVisualTrees(reactParent: Element, aureliaParent: Element, reactUniqueIdentifier: string, aureliaUniqueIdentifier: string) {
        if (reactParent.childElementCount > 0 && DOMUtility.hasNonReactChildren(reactParent)) {
            this.moveElements(reactParent, aureliaParent, reactUniqueIdentifier, false);
        } else {
            this.moveElements(aureliaParent, reactParent, aureliaUniqueIdentifier, true);
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

    static moveElements(source: Element, destination: Element, skipId: string, visibleInDestination: boolean) {
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
