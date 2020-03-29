// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { inlineView, View, ViewResources, bindable, camelCase } from 'aurelia-framework';

import { ComponentProperties } from './ComponentProperties';
import { ComponentState } from './ComponentState';

import { ReactStateWrapper } from './ReactStateWrapper';
import { Constructor } from './Constructor';
import { uniqueIdentifier } from './uniqueIdentifier';
import { ItemSelector } from './ItemSelector';
import { parseValue } from './parseValue';

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export abstract class ReactComponent<T extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> {
    private _actualComponent: ReactStateWrapper | undefined;
    private _itemSelectors: ItemSelector[] = [];

    static properties<TProps>(properties: TProps) {
        ComponentProperties.configureFor(this, properties);
    }

    uniqueIdentifier: string;

    @bindable
    visible: boolean = true;

    constructor(private _element: Element, private _type: Constructor<T>) {
        if (typeof _type === 'object') {
            this._type = (_type as any).constructor;
        }

        this.uniqueIdentifier = uniqueIdentifier();
        this._itemSelectors = this.getItemSelectors();
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
        this.handleVisibilityProperty(state);
        this._actualComponent?.setState(state);
    }

    beforeRender(properties: TProps) {
    }

    getItemSelectors(): ItemSelector[] {
        return [];
    }

    addItem(itemViewModel: any, item: any) {
        const filtered = this._itemSelectors.filter(_ => _.type === itemViewModel.constructor);
        if (filtered.length === 1) {
            const itemSelector = filtered[0];

            const thisAsAny = this as any;

            if (!thisAsAny[itemSelector.targetProperty]) {
                thisAsAny[itemSelector.targetProperty] = [];
            }
            if (Object.prototype.toString.call(thisAsAny[itemSelector.targetProperty]) !== '[object Array]') {
                throw new Error(`Property '${itemSelector.targetProperty}' on '${itemSelector.type}' is not an array. Can't add items.`);
            }

            thisAsAny[itemSelector.targetProperty].push(item);

            this.propertyChanged(itemSelector.targetProperty, thisAsAny[itemSelector.targetProperty]);
        }
    }

    attached() {
        ReactDom.unmountComponentAtNode(this._element);
        const container = document.getElementById(this.uniqueIdentifier);

        const properties = ComponentState.createFor(this);
        properties._componentType = this._type;

        this.beforeRender(properties);

        this.handleVisibilityProperty(properties);

        const reactElement = React.createElement(ReactStateWrapper, properties);
        this._actualComponent = ReactDom.render(reactElement, container);
    }

    private handleVisibilityProperty(properties: any) {
        if (properties.hasOwnProperty('visible')) {
            delete properties.visible;
        }
        properties.hidden = !this.visible;
    }
}
