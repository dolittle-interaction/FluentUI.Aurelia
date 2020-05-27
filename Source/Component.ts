// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


import { inlineView, bindable, metadata } from 'aurelia-framework';

import { uniqueIdentifier } from './uniqueIdentifier';
import { ChildSelectorForProperty } from './Children';
import { PropertyConverters } from './PropertyConverters';

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export class Component {
    element: Element;
    uniqueIdentifier: string;

    @bindable
    visible: boolean = true;

    private _bindingContext: any;
    private _overrideContext: any;

    constructor(element: Element) {
        this.element = element;
        PropertyConverters.hookupConvertersFor(this);

        this.uniqueIdentifier = uniqueIdentifier();
    }

    get bindingContext() {
        return this._bindingContext;
    }

    get overrideContext() {
        return this._overrideContext;
    }

    render() {
    }

    handleRendering() {
        this.render();
    }

    bind(bindingContext: any, overrideContext: any) {
        this._bindingContext = bindingContext;
        this._overrideContext = overrideContext;
    }

    attached() {
        this.handleChildrenOf();
        this.handleChildOf();
        this.handleRendering();
    }

    propertyChanged(propertyName: string, newValue: any) {
    }

    private handleChildrenOf() {
        if ((this as any).__metadata__?._childrenOf) {
            const children = (this as any).__metadata__._childrenOf as ChildSelectorForProperty[];
            for (const childrenOf of children) {
                const childElements = this.element.querySelectorAll(childrenOf.selector);
                if (childElements.length > 0) {
                    if (childrenOf.initialValue) {
                        (this as any)[childrenOf.property] = childrenOf.initialValue;
                    }

                    const childViewModels = childrenOf.getValueFrom(this) || [];

                    childElements.forEach((childElement: any) => {
                        childViewModels.push(childElement.au.controller.viewModel);
                    });

                    childrenOf.setValueOn(this, childViewModels);
                }
            }
        }
    }

    private handleChildOf() {
        if ((this as any).__metadata__?._childOf) {
            const children = (this as any).__metadata__._childOf as ChildSelectorForProperty[];
            for (const childOf of children) {
                const childElement = this.element.querySelector(childOf.selector);
                if (childElement) {
                    if (childOf.initialValue) {
                        (this as any)[childOf.property] = childOf.initialValue;
                    }

                    childOf.setValueOn(this, (childElement as any).au.controller.viewModel);
                }
            }
        }
    }

}
