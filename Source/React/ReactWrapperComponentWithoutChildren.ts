// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { Component } from '../Component';
import { DOMUtility } from './DOMUtility';
import { uniqueIdentifier } from '../uniqueIdentifier';

export class ReactWrapperComponentWithoutChildren extends React.Component {
    private _uniqueIdentifier: string;
    private _componentType: any;
    private _component: Component;

    constructor(props: any) {
        super(props);
        this._component = props._component;
        this._componentType = props._componentType;
        this._uniqueIdentifier = uniqueIdentifier('react');
    }

    render() {
        return React.createElement('span', {
            id: this._uniqueIdentifier,
            ref: DOMUtility.getReferenceCallbackFor(this._component)
        }, React.createElement(
            this._componentType,
            this.props)
        );
    }
}
