// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { Component } from '../Component';
import { ReactWrapperComponentWithChildren } from './ReactWrapperComponentWithChildren';

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

    static createElementWithChildren(component: Component, componentType: any, props: any) {
        return React.createElement(ReactWrapperComponentWithChildren, {
            _component: component,
            _componentType: componentType,
            _props: props
        });
    }

    static createElementWithContent(component: Component, componentType: any, props: any, reactUniqueIdentifier: string) {
        return React.createElement(
            componentType,
            props,
            React.createElement('span', {
                id: reactUniqueIdentifier,
                ref: (parent: HTMLElement | null) => {
                    if (!component.visible) {
                        return;
                    }

                    if (!parent) {
                        parent = document.querySelector(`#${reactUniqueIdentifier}`);
                    }

                    if (parent) {
                        this.consolidateVisualTrees(parent, component.element, reactUniqueIdentifier, component.uniqueIdentifier);
                    }
                }
            })
        );
    }
}
