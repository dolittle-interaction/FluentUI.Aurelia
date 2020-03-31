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
import { IItemHandlingStrategy } from './IItemHandlingStrategy';
import { IComponent } from './IComponent';
import { PropertyConverter } from './PropertyConverter';

import { IIconProps } from 'office-ui-fabric-react';

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export abstract class ReactComponent<T extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> implements IComponent {
    private _actualComponent: ReactStateWrapper | undefined;
    private _itemHandlingStrategies: IItemHandlingStrategy[] = [];
    private _propertyConverters: PropertyConverter[] = [];

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
        this._itemHandlingStrategies = this.getItemHandlingStrategies();
        this._propertyConverters = this.getPropertyConverters();
    }

    beforeRender(properties: TProps) {
    }

    getPropertyConverters(): PropertyConverter[] {
        return [];
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [];
    }

    addChildItem(itemViewModel: any, item: any) {
        const filtered = this._itemHandlingStrategies.filter(_ => _.type === itemViewModel.constructor);
        if (filtered.length === 1) {
            filtered[0].handle(this, item);
        }
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

    attached() {
        ReactDom.unmountComponentAtNode(this._element);
        const container = document.getElementById(this.uniqueIdentifier);

        const properties = ComponentState.createFor(this);
        properties._componentType = this._type;

        this.beforeRender(properties);
        this.handlePropertyConverters();
        this.handleVisibilityProperty(properties);

        const reactElement = React.createElement(ReactStateWrapper, properties);
        this._actualComponent = ReactDom.render(reactElement, container);
    }

    propertyChanged(property: string, newValue: any) {
        const state: any = {};
        state[property] = newValue;
        (this as any)[property] = newValue;
        this.handleVisibilityProperty(state);

        const filtered = this._propertyConverters.filter((converter) => converter.propertyName === property);
        if (filtered.length === 1) {
            state[filtered[0].targetPropertyName] = filtered[0].typeConverter.convert(property);
        }

        this._actualComponent?.setState(state);
    }

    private handlePropertyConverters() {
        const thisAsAny = this as any;
        this._propertyConverters.forEach((converter) => {
            const converted = converter.typeConverter.convert(thisAsAny[converter.propertyName]);
            thisAsAny[converter.targetPropertyName] = converted;
        });
    }

    private handleVisibilityProperty(properties: any) {
        if (properties.hasOwnProperty('visible')) {
            delete properties.visible;
        }
        properties.hidden = !this.visible;
    }
}
