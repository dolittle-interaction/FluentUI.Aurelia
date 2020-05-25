// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import { Component } from '../Component';

export class ReactItemsComponent extends React.Component {
    private _type: any;

    constructor(private _props: any) {
        super(_props);

        this._type = _props._componentType;
    }

    render() {
        const childComponents = this._props._childComponents;

        if (childComponents) {
            const children: React.ReactNode[] = [];

            childComponents.forEach((child: Component) => {
                const element = (child as any).actualElement;
                if (element) {
                    children.push(element);
                }
            });

            return React.createElement(
                this._type,
                this._props,
                children) as any;
        } else {
            return React.createElement(
                this._type,
                this._props) as any;
        }
    }
}
