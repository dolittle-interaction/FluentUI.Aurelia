// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { inlineView, bindable } from 'aurelia-framework';

import { uniqueIdentifier } from './uniqueIdentifier';
import { ChildSelectorForProperty } from './Children';
import { PropertyConverters } from './PropertyConverters';

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export class Component {
    private _bindingContext: any;
    private _overrideContext: any;
    private _childrenOfHandled: boolean = false;
    private _childOfHandled: boolean = false;


    element: Element;
    uniqueIdentifier: string;

    @bindable
    visible: boolean = true;

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

    handleChildrenOf() {
        if (this._childrenOfHandled) {
            return;
        }
        if ((this as any).__metadata__?._childrenOf) {
            const children = (this as any).__metadata__._childrenOf as ChildSelectorForProperty[];
            for (const childrenOf of children) {
                const childElements: Element[] = [];
                const all = this.element.querySelectorAll(childrenOf.selector);
                all.forEach(child => {
                    let parentElement = child.parentElement;
                    if (parentElement) {
                        if (parentElement.localName === 'au-content' && parentElement.parentElement) {
                            parentElement = parentElement.parentElement;
                        }
                        if (parentElement === this.element) {
                            childElements.push(child);
                        }
                    }
                });

                if (childElements.length > 0) {

                    if (childrenOf.initialValue) {
                        (this as any)[childrenOf.property] = JSON.parse(JSON.stringify(childrenOf.initialValue));
                    }

                    const childViewModels = childrenOf.getValueFrom(this) || [];

                    childElements.forEach((childElement: any) => {
                        const childViewModel = childElement.au.controller.viewModel;
                        if (typeof childViewModel.handleChildrenOf === 'function') {
                            childViewModel.handleChildrenOf();
                        }
                        childViewModels.push(childViewModel);
                    });

                    childrenOf.setValueOn(this, childViewModels);
                }
            }
        }

        this._childrenOfHandled = true;
    }

    handleChildOf() {
        if (this._childOfHandled) {
            return;
        }
        if ((this as any).__metadata__?._childOf) {
            const children = (this as any).__metadata__._childOf as ChildSelectorForProperty[];
            for (const childOf of children) {
                const childElement = this.element.querySelector(childOf.selector);
                if (childElement) {
                    if (childOf.initialValue) {
                        (this as any)[childOf.property] = childOf.initialValue;
                    }

                    const childViewModel = (childElement as any).au.controller.viewModel;
                    if (typeof childViewModel.handleChildOf === 'function') {
                        childViewModel.handleChildOf();
                    }

                    childOf.setValueOn(this, childViewModel);
                }
            }
        }

        this._childOfHandled = true;
    }

}
