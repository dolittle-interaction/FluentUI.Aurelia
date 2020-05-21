// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, children, autoinject, inlineView, processContent, metadata, HtmlBehaviorResource, useView, PLATFORM } from 'aurelia-framework';
import { AuAppBarItem } from './app-bar-item';

function childrenOf(selector: string) {
    return function (target: any, propertyKey: string) {
        target.__metadata__ = target.__metadata__ || {};
        target.__metadata__._children = target.__metadata__._children || [];
        target.__metadata__._children.push({ 'property': propertyKey, 'selector': selector });
    };
}

class ItemsComponent {
    private _element: Element;

    constructor(element: Element) {
        this._element = element;
    }

    attached() {
        if ((this as any).__metadata__?._children) {
            const children = (this as any).__metadata__._children;
            for (const child of children) {
                const childElements = this._element.querySelectorAll(child.selector);
                const childViewModels: any[] = (this as any)[child.property] || [];
                childElements.forEach(childElement => {
                    childViewModels.push(childElement.au.controller.viewModel);
                });
                (this as any)[child.property] = childViewModels;
            }
        }
    }
}


@autoinject
@customElement('app-bar')
@useView(PLATFORM.moduleName('./app-bar.html'))
export class AuAppBar extends ItemsComponent {
    @childrenOf('app-bar-item')
    items: AuAppBarItem[] = [];

    constructor(element: Element) {
        super(element);
    }

    attached() {
        super.attached();
    }

    selectedItemChanged(item: AuAppBarItem) {
        this.items.forEach(_ => _.selected = false);
        item.selected = true;
    }
}
