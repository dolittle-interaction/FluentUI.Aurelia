// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from './ComponentProperties';
import { IUIElement } from './IUIElement';
import { PropertyConverter } from './PropertyConverter';
import { uniqueIdentifier } from './uniqueIdentifier';
import { Controller } from 'aurelia-framework';

export class UIElement implements IUIElement {
    static properties<TProps>(properties: TProps) {
        ComponentProperties.configureFor(this, properties);
    }

    private _propertyConverters: PropertyConverter[] = [];

    uniqueIdentifier: string;
    isRenderRoot: boolean = false;

    parent: UIElement | null = null;
    renderRoot: UIElement;

    element: Element;

    state: any = {};

    constructor(element: Element) {
        this.uniqueIdentifier = uniqueIdentifier();
        this._propertyConverters = this.getPropertyConverters();
        this.renderRoot = this;
        this.element = element;
    }

    childStateChanged(): void {
    }

    propertyChanged(property: string, newValue: any): void {
    }

    getPropertyConverters(): PropertyConverter[] {
        return [];
    }

    handlePropertyConverters() {
        const thisAsAny = this as any;
        this._propertyConverters.forEach((converter) => {
            const converted = converter.typeConverter.convert(thisAsAny[converter.propertyName]);
            thisAsAny[converter.targetPropertyName] = converted;
        });
    }

    handlePropertyConvertersForState(property: string, value: any, state: any) {
        const filtered = this._propertyConverters.filter((converter) => converter.propertyName === property);
        if (filtered.length === 1) {
            state[filtered[0].targetPropertyName] = filtered[0].typeConverter.convert(value);
        }
    }

    attached() {
        this.renderRoot = this.getRenderRoot();
        this.parent = this.getParent();
    }

    private getRenderRoot(): UIElement {
        let renderRoot: UIElement = this;
        const controller = (this.element as any).au?.controller as Controller;
        let container = (controller as any).container;
        if (container) {
            while (renderRoot && !renderRoot.isRenderRoot && container) {
                container = container.parent;
                renderRoot = (container as any)?.viewModel as UIElement;
            }
        }
        return renderRoot;
    }

    private getParent(): UIElement | null {
        const controller = (this.element as any).au?.controller as Controller;
        if (controller) {
            const container = (controller as any).container;
            if (container) {
                return container.parent?.viewModel as UIElement;
            }
        }

        return null;
    }
}
