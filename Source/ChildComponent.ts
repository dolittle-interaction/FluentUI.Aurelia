// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { noView } from 'aurelia-framework';

import { Component } from './Component';
import { Constructor } from './Constructor';

import { uniqueIdentifier } from './uniqueIdentifier';

@noView
export class ChildComponent<TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> extends Component<TComponent, TProps> {
    private _reactUniqueIdentifier: string;

    constructor(element: Element, type: Constructor<TComponent>) {
        super(element, type);

        this._reactUniqueIdentifier = uniqueIdentifier('react');
    }

    createElement() {
        return React.createElement(
            this.componentType as any,
            this.state,
            React.createElement('span', {
                id: this._reactUniqueIdentifier,
                ref: (parent: HTMLElement | null) => {
                    if (!this.visible) {
                        return;
                    }
                    const reactComponent = document.querySelector(`#${this._reactUniqueIdentifier}`);
                    if (reactComponent && reactComponent?.childElementCount > 0) {
                        this.moveElements(reactComponent, this.element, this._reactUniqueIdentifier);
                    } else if (parent) {
                        this.moveElements(this.element, parent, this.uniqueIdentifier);
                    }
                }
            })
        );
    }

    moveElements(source: Element, destination: Element, skipId: string) {
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
