// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Constructor } from '@dolittle/rudiments';
import { ComponentProperties } from './ComponentProperties';
import { ComponentProperty } from './ComponentProperty';
import { ReactBase } from './ReactBase';
import { DOMUtility } from './DOMUtility';
import { uniqueIdentifier } from '../uniqueIdentifier';

export class ReactComponent<TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> extends ReactBase<TProps> {
    componentType: Constructor<TComponent> | React.FunctionComponent<TProps> | undefined;
    container: Element;
    properties: ComponentProperty[];
    reactUniqueIdentifier: string;
    aureliaContainer: Element | null;

    constructor(element: Element, componentType?: Constructor<TComponent> | React.FunctionComponent<TProps>, private _wrapperType?: any) {
        super(element);

        this.reactUniqueIdentifier = uniqueIdentifier('react');
        this.componentType = componentType;

        if (!_wrapperType) {
            this._wrapperType = componentType;
            this.props.ref = DOMUtility.getReferenceCallbackFor(this);
        }

        this.props._component = this;
        this.props._componentType = this.componentType;
        this.props.id = this.reactUniqueIdentifier;

        this.container = element;
        this.properties = ComponentProperties.getFor(this.constructor);
        this.aureliaContainer = element.querySelector(`#${this.uniqueIdentifier}`);
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

    get children(): any[] { return []; }

    createElement(): any {
        let element: any;

        this.handleProperties();

        const childElements = this.children.map(_ => _.createElement());

        if (this._wrapperType) {
            element = React.createElement(this._wrapperType, this.props, childElements);
        } else {
            element = React.createElement('span', childElements) as any;
        }
        return element;
    }

    render() {
        super.render();
        const element = this.createElement();
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
}
