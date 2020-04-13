// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { UIElement } from '../UIElement';
import { DOMUtility } from '../DOMUtility';
import { uniqueIdentifier } from '../uniqueIdentifier';

export class ReactStateWrapperComponent extends React.Component {
    private _uniqueIdentifier: string;
    private _componentType: any;
    private _uiElement: UIElement;
    private _state: any;

    constructor(state: any) {
        super(state);
        this._uiElement = state._uiElement;
        this._componentType = state._componentType;
        this._state = state._state;

        this._uniqueIdentifier = uniqueIdentifier('react');
        this.state = { ...state };
    }

    render() {
        return React.createElement('span', {
            id: this._uniqueIdentifier,
            ref: (parent: HTMLElement | null) => {
                if (!this._uiElement.visible) {
                    return;
                }

                if (parent && parent.childElementCount === 1) {
                    const actualParent = parent.childNodes[0] as Element;
                    DOMUtility.consolidateVisualTrees(actualParent, this._uiElement.element, this._uniqueIdentifier, this._uiElement.uniqueIdentifier);
                }
            }
        }, React.createElement(
                this._componentType,
                this._state));
}
}
