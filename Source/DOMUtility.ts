// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { UIElement } from './UIElement';
import { ReactStateWrapperComponent } from './React/ReactStateWrapperComponent';

export class DOMUtility {

    static consolidateVisualTrees(reactParent: Element, aureliaParent: Element, reactUniqueIdentifier: string, aureliaUniqueIdentifier: string) {
        if (reactParent.childElementCount > 0) {
            this.moveElements(reactParent, aureliaParent, reactUniqueIdentifier);
        } else {
            this.moveElements(aureliaParent, reactParent, aureliaUniqueIdentifier);
        }
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

    static createElementWithChildren(uiElement: UIElement, componentType: any, state: any) {
        return React.createElement(ReactStateWrapperComponent, {
            _uiElement: uiElement,
            _componentType: componentType,
            _state: state
        });
    }

    static createElementWithContent(uiElement: UIElement, componentType: any, state: any, reactUniqueIdentifier: string) {
        return React.createElement(
            componentType,
            state,
            React.createElement('span', {
                id: reactUniqueIdentifier,
                ref: (parent: HTMLElement | null) => {
                    if (!uiElement.visible) {
                        return;
                    }

                    if (!parent) {
                        parent = document.querySelector(`#${reactUniqueIdentifier}`);
                    }

                    if (parent) {
                        this.consolidateVisualTrees(parent, uiElement.element, reactUniqueIdentifier, uiElement.uniqueIdentifier);
                    }
                }
            })
        );
    }
}
