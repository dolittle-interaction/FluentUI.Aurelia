// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ReactContentComponent } from './React/ReactContentComponent';

import { inlineView, bindable } from 'aurelia-framework';

import { Constructor } from './Constructor';
import { ComponentState } from './ComponentState';
import { UIElement } from './UIElement';

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export class Component<TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> extends UIElement {
    actualComponent: ReactContentComponent | undefined;

    @bindable
    visible: boolean = true;

    isRenderRoot: boolean = true;

    constructor(private _element: Element, private _type: Constructor<TComponent>) {
        super(_element);

        if (typeof _type === 'object') {
            this._type = (_type as any).constructor;
        }
    }

    beforeRender() {
    }

    unbind() {
        ReactDom.unmountComponentAtNode(this._element);
    }

    attached() {
        super.attached();
        ReactDom.unmountComponentAtNode(this._element);
        const container = document.getElementById(this.uniqueIdentifier);

        ComponentState.updateFor(this, this.state);
        this.state._componentType = this._type;

        this.beforeRender();
        this.handlePropertyConverters();
        this.handleVisibilityProperty(this.state);

        const reactElement = React.createElement(ReactContentComponent, this.state);
        this.actualComponent = ReactDom.render(reactElement, container);
    }

    propertyChanged(property: string, newValue: any) {
        const state: any = {};
        state[property] = newValue;
        (this as any)[property] = newValue;
        this.state[property] = newValue;
        this.handleVisibilityProperty(state);
        this.handlePropertyConvertersForState(property, newValue, state);
        this.actualComponent?.setState(state);
    }

    private handleVisibilityProperty(properties: any) {
        if (properties.hasOwnProperty('visible')) {
            delete properties.visible;
        }
        properties.hidden = !this.visible;
    }
}
