// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { UIElement } from '../UIElement';
import { DOMUtility } from '../DOMUtility';

import { uniqueIdentifier } from '../uniqueIdentifier';

export class ReactContentComponent extends React.Component {
    private _uniqueIdentifier: string;
    private _type: any;
    private _uiElement: UIElement;

    constructor(state: any) {
        super(state);

        this._uiElement = state._uiElement;
        this._type = state._componentType;

        this._uniqueIdentifier = uniqueIdentifier('react');
        this.state = { ...state };
    }

    render() {
        return DOMUtility.createElementWithContent(this._uiElement, this._type, this.state, this._uniqueIdentifier);
    }
}
