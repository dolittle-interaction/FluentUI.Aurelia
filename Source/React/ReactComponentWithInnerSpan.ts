// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { Component } from '../Component';
import { uniqueIdentifier } from '../uniqueIdentifier';
import { DOMUtility } from './DOMUtility';

export class ReactComponentWithInnerSpan extends React.Component {
    private _uniqueIdentifier: string;
    private _componentType: any;
    private _component: Component;

    constructor(props: any) {
        super(props);
        this._uniqueIdentifier = uniqueIdentifier('react');
        this._component = props._component;
        this._componentType = props._componentType;
    }

    componentWillUnmount() {
    }

    render() {
        let children = [React.createElement('span', {
            id: this._uniqueIdentifier,
            ref: DOMUtility.getReferenceCallbackFor(this._component, this._uniqueIdentifier)
        })];
        if (this.props.children && Array.isArray(this.props.children)) {
            children = [...children, ...(this.props.children as [])];
        }

        return React.createElement(
            this._componentType,
            this.props,
            children);
    }
}
