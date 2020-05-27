// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Constructor } from '@dolittle/rudiments';
import { Component } from '../Component';
import { ComponentProperties } from './ComponentProperties';
import { ComponentProperty } from './ComponentProperty';
import { ReactWrapperComponentWithChildren } from './ReactWrapperComponentWithChildren';
import { ReactBase } from './ReactBase';

export class ReactComponent<TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> extends ReactBase<TProps> {
    componentType: Constructor<TComponent> | React.FunctionComponent<TProps> | undefined;
    container: Element;
    properties: ComponentProperty[];

    constructor(element: Element, componentType?: Constructor<TComponent> | React.FunctionComponent<TProps>, private _wrapperType: any = ReactWrapperComponentWithChildren) {
        super(element);

        this.componentType = componentType;

        this.props._component = this;
        this.props._componentType = this.componentType;

        this.container = element;
        this.properties = ComponentProperties.getFor(this.constructor);
    }

    attached() {
        ReactDom.unmountComponentAtNode(this.container);
        const container = this.element.querySelector(`#${this.uniqueIdentifier}`);
        if (container) {
            this.container = container;
        }

        super.attached();
    }

    detached() {
        ReactDom.unmountComponentAtNode(this.container);
    }

    render() {
        super.render();

        let element: any;
        if (this._wrapperType) {
            element = React.createElement(this._wrapperType, this.props);
        }
        else {
            element = React.createElement('span') as any;
        }
        ReactDom.render(element as any, this.container) as any;
    }

    propertyChanged(propertyName: string, newValue: any) {
        super.propertyChanged(propertyName, newValue);
        const property = this.properties.find(_ => _.name === propertyName);
        if (property) {
            this.props[property.reactName] = newValue;

            this.handleRendering();
        }

        this.handleVisibilityProperty();
    }

    addChildComponent(child: Component) {
        let children = this.props._childComponents || [];
        children = [...children, child];
        this.props._childComponents = children;
        this.handleRendering();
    }
}
