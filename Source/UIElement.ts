// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from './ComponentProperties';
import { IUIElement } from './IUIElement';
import { PropertyConverter } from './PropertyConverter';
import { uniqueIdentifier } from './uniqueIdentifier';

export class UIElement implements IUIElement {
    static properties<TProps>(properties: TProps) {
        ComponentProperties.configureFor(this, properties);
    }

    private _propertyConverters: PropertyConverter[] = [];

    uniqueIdentifier: string;
    isRenderRoot: boolean = false;

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
        let renderRoot: UIElement = this;
        let currentElement: Element | null | undefined = this.element;
        while (renderRoot && !renderRoot.isRenderRoot) {
            currentElement = currentElement?.parentElement;
            if (currentElement?.tagName.toLowerCase() === 'au-content') {
                currentElement = currentElement?.parentElement;
            }

            renderRoot = (currentElement as any)?.au?.controller?.viewModel as UIElement;
        }
        this.renderRoot = renderRoot;
    }
}
