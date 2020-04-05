// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


import { Controller, bindable } from 'aurelia-framework';

import { IUIElement } from './IUIElement';
import { PropertyConverter } from './PropertyConverter';
import { uniqueIdentifier } from './uniqueIdentifier';
import { FrameworkElement } from './FrameworkElement';
import { IConfigurationHandlingStrategy } from './IConfigurationHandlingStrategy';
import { IComponentConfiguration } from './IComponentConfiguration';

export class UIElement extends FrameworkElement implements IUIElement {
    private _configurationHandlingStrategies: IConfigurationHandlingStrategy[] = [];
    private _propertyConverters: PropertyConverter[] = [];

    uniqueIdentifier: string;
    renderRoot: UIElement;

    @bindable
    visible: boolean = true;

    state: any = {};

    constructor(element: Element) {
        super(element);

        this._configurationHandlingStrategies = this.getConfigurationHandlingStrategies();

        this.uniqueIdentifier = uniqueIdentifier();
        this._propertyConverters = this.getPropertyConverters();
        this.renderRoot = this;
    }

    childStateChanged(): void {
    }

    propertyChanged(property: string, newValue: any): void {
    }

    getPropertyConverters(): PropertyConverter[] {
        return [];
    }

    getConfigurationHandlingStrategies(): IConfigurationHandlingStrategy[] {
        return [];
    }

    handleConfigurationObject(type: Function, configuration: any) {
        const filtered = this._configurationHandlingStrategies.filter(_ => _.type === type);
        if (filtered.length === 1) {
            filtered[0].handle(this, configuration);
        }

        if (!this.isRenderRoot) {
            this.renderRoot.childStateChanged();
        }
    }


    handlePropertyConverters() {
        const thisAsAny = this as any;
        this._propertyConverters.forEach((converter) => {
            if (thisAsAny[converter.propertyName]) {
                const converted = converter.typeConverter.convert(thisAsAny[converter.propertyName]);
                thisAsAny[converter.targetPropertyName] = converted;
            }
        });
    }

    handlePropertyConvertersForState(property: string, value: any, state: any) {
        const filtered = this._propertyConverters.filter((converter) => converter.propertyName === property);
        if (filtered.length === 1) {
            state[filtered[0].targetPropertyName] = filtered[0].typeConverter.convert(value);
        }
    }

    attached() {
        super.attached();
        this.renderRoot = this.getRenderRoot();
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
}
