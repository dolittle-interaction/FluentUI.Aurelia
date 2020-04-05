// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { UIElement } from '../UIElement';

export class ReactContentComponent extends React.Component {
    private _inneridReact: string;
    private _type: any;
    private _uiElement: UIElement;

    constructor(state: any) {
        super(state);

        this._uiElement = state._uiElement;
        this._type = state._componentType;

        this._inneridReact = 'react' + Math.round(Math.random() * 10000000000000000);
        this.state = { ...state };
    }

    render() {
        return React.createElement(
            this._type,
            this.state,
            React.createElement('span', {
                id: this._inneridReact,
                ref: (parent: HTMLElement | null) => {
                    if (!this._uiElement.visible) {
                        return;
                    }

                    const childrenToMove: ChildNode[] = [];

                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < this._uiElement.element.childNodes.length; i++) {
                        const child = this._uiElement.element.childNodes[i];
                        if ((child as any).id === this._uiElement.uniqueIdentifier) {
                            continue;
                        }
                        childrenToMove.push(child);
                    }

                    childrenToMove.forEach(child => {
                        this._uiElement.element.removeChild(child);
                        parent?.appendChild(child);
                    });
                }
            })
        );
    }
}
