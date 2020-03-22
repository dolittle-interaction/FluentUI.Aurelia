// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { inlineView } from 'aurelia-framework';

import { ComponentBindables } from './ComponentBindables';

type Constructor<T extends {} = {}> = new (...args: any[]) => T;

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export abstract class ReactComponent<T extends React.Component<TProps, any>, TProps> {
    static propertiesSet: false;

    static bindables<TProps>(properties: TProps) {
        ComponentBindables.configureFor(this, properties);
    }

    uniqueIdentifier: string;

    constructor(private _element: Element, private _type: Constructor<T>) {
        this.uniqueIdentifier = 'au-' + Math.round(Math.random() * 10000000000000000);
    }

    unbind() {
        ReactDom.unmountComponentAtNode(this._element);
    }

    attached() {
        ReactDom.unmountComponentAtNode(this._element);
        const container = document.getElementById(this.uniqueIdentifier);

        const properties = ComponentBindables.getFor((this as any).constructor);
        const reactElement = React.createElement(this._type, properties);
        const reactComponent = ReactDom.render(reactElement, container);
    }
}
