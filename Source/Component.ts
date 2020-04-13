// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { inlineView } from 'aurelia-framework';

import { Constructor } from './Constructor';
import { ComponentState } from './ComponentState';
import { UIElement } from './UIElement';

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export class Component<TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> extends UIElement {
    actualElement: React.CElement<any, React.Component<any, any, any>> | undefined;
    actualComponent: React.Component<any, any, any> | undefined;
    container: Element;
    componentType: Constructor<TComponent> | undefined;

    constructor(private _element: Element, componentType?: Constructor<TComponent>, private _wrapperType?: any) {
        super(_element);

        this.container = _element;
        this.componentType = componentType;

        if (typeof componentType === 'object') {
            this.componentType = (componentType as any).constructor;
        }

        if (!componentType) {
            this.isRenderRoot = false;
        } else {
            this.isRenderRoot = true;
        }
    }

    beforeRender() {
    }

    render() {
    }

    createElement() {
        if (this._wrapperType) {
            return React.createElement(this._wrapperType, this.state);
        } else {
            return React.createElement('span') as any;
        }
    }

    afterRender() {
    }

    unbind() {
        ReactDom.unmountComponentAtNode(this._element);
    }

    attached() {
        super.attached();
        ReactDom.unmountComponentAtNode(this._element);
        const container = this.element.querySelector(`#${this.uniqueIdentifier}`);
        if (container) {
            this.container = container;
        }

        ComponentState.updateFor(this, this.state);

        this.beforeRender();
        this.handlePropertyConverters();
        this.handleVisibilityProperty(this.state);

        this.state._uiElement = this;

        if (this.isRenderRoot) {
            this.state._componentType = this.componentType;
            this.actualElement = this.createElement();
        }

        this.render();

        if (this.parent && (this.parent as any).addChildItem) {
            (this.parent as any).addChildItem(this);
        }

        if (this.renderRoot) {
            this.renderRoot.childStateChanged();
        }

        this.afterRender();
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
