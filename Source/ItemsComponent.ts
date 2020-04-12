// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { inlineView, autoinject } from 'aurelia-framework';

import { Component } from './Component';
import { Constructor } from './Constructor';
import { IItemsComponent } from './IItemsComponent';
import { IItemHandlingStrategy } from './IItemHandlingStrategy';
import { UIElement } from './UIElement';
import { ReactItemsComponent } from './React/ReactItemsComponent';

@autoinject
@inlineView('<template><span id.bind="uniqueIdentifier"></span></template>')
export class ItemsComponent<TProps, TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps> | any = {}> extends Component<TComponent, TProps> implements IItemsComponent {
    private _itemHandlingStrategies: IItemHandlingStrategy[] = [];

    constructor(element: Element, type?: Constructor<TComponent>) {
        super(element, type, ReactItemsComponent);
        this._itemHandlingStrategies = this.getItemHandlingStrategies();
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [];
    }

    beforeRender() {
    }

    render() {
        if (this.actualElement) {
            this.actualComponent = ReactDom.render(this.actualElement as any, this.container) as any;
        }
    }

    addChildItem(item: UIElement) {
        const filtered = this._itemHandlingStrategies.filter(_ => _.canHandle(item));

        if (filtered.length === 1) {
            filtered[0].handle(this, item);
        }

        if (!this.isRenderRoot) {
            this.renderRoot.childStateChanged();
        }
    }

    addChildComponent(child: UIElement) {
        let children = this.state._childComponents || [];
        children = [...children, child];
        this.state._childComponents = children;
        this.actualComponent?.setState({ _childComponents: children });
    }
}
