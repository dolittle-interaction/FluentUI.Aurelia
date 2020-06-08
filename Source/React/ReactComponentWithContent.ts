// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { Component } from '../Component';
import { DOMUtility } from './DOMUtility';

export class ReactComponentWithContent extends React.Component {
    private _componentType: any;
    private _component: Component;

    constructor(props: any) {
        super(props);
        this._component = props._component;
        this._componentType = props._componentType;
    }

    componentWillUnmount() {
    }

    componentDidMount() {
        const reactUniqueIdentifier = (this._component as any).reactUniqueIdentifier;
        const reactElement = document.querySelector(`#${reactUniqueIdentifier}`);
        if (reactElement) {
            DOMUtility.consolidateVisualTrees(this._component, reactElement, reactUniqueIdentifier);
        }
    }

    render() {
        let children: any[] = [];
        if (this.props.children && Array.isArray(this.props.children)) {
            children = (this.props.children as []);
        }

        return React.createElement(
            this._componentType,
            this.props,
            children);
    }
}
