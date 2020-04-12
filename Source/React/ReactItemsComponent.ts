// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import { UIElement } from 'UIElement';

export class ReactItemsComponent extends React.Component {
    private _type: any;

    constructor(private _properties: any) {
        super(_properties);

        this._type = _properties._componentType;
        this.state = { ..._properties };
    }

    render() {
        if (this._properties._uiElement.element.localName.toLowerCase().indexOf('stack') >= 0) {
            debugger;
        }

        const childComponents = (this.state as any)._childComponents;

        if (childComponents) {
            const children: React.ReactNode[] = [];

            childComponents.forEach((child: UIElement) => {
                const element = (child as any).actualElement;
                if (element) {
                    children.push(element);
                }
            });

            return React.createElement(
                this._type,
                this.state,
                children);
        } else {
            return React.createElement(
                this._type,
                this.state);
        }
    }
}
