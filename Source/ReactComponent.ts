// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { inlineView, View, ViewResources } from 'aurelia-framework';

import { ComponentProperties } from './ComponentProperties';
import { ComponentState } from './ComponentState';

import { ReactStateWrapper } from './ReactStateWrapper';

type Constructor<T extends {} = {}> = new (...args: any[]) => T;

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export abstract class ReactComponent<T extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> {
    private _actualComponent: ReactStateWrapper | undefined;

    static properties<TProps>(properties: TProps) {
        ComponentProperties.configureFor(this, properties);
    }

    uniqueIdentifier: string;

    constructor(private _element: Element, private _type: Constructor<T>) {
        if (typeof _type === 'object') {
            this._type = (_type as any).constructor;
        }

        this.uniqueIdentifier = 'au-' + Math.round(Math.random() * 10000000000000000);
    }

    created(owningView: View, view: View) {
        const properties = ComponentProperties.getFor((this as any).constructor);

        if ((owningView as any).hasOwnProperty('resources')) {
            const resources = ((owningView as any).resources) as ViewResources;
            const values = (resources as any).values;
            if (values) {
                for (const key in values) {
                    if (properties.some((p) => p.name === key)) {
                        (this as any)[key] = values[key];
                    }
                }
            }
        }
    }

    unbind() {
        ReactDom.unmountComponentAtNode(this._element);
    }

    propertyChanged(property: string, newValue: any) {
        const state: any = {};
        state[property] = newValue;
        (this as any)[property] = newValue;
        this._actualComponent?.setState(state);
    }

    beforeRender(properties: TProps) {
    }

    attached() {
        ReactDom.unmountComponentAtNode(this._element);
        const container = document.getElementById(this.uniqueIdentifier);

        const properties = ComponentState.createFor(this);
        properties._componentType = this._type;

        this.beforeRender(properties);

        const reactElement = React.createElement(ReactStateWrapper, properties);
        this._actualComponent = ReactDom.render(reactElement, container);
    }
}
