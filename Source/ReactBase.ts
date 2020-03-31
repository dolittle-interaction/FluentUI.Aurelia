// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from './ComponentProperties';
import { PropertyConverter } from './PropertyConverter';
import { IItemHandlingStrategy } from './IItemHandlingStrategy';
import { IComponent } from './IComponent';
import { uniqueIdentifier } from './uniqueIdentifier';

export class ReactBase implements IComponent {
    static properties<TProps>(properties: TProps) {
        ComponentProperties.configureFor(this, properties);
    }

    private _itemHandlingStrategies: IItemHandlingStrategy[] = [];
    private _propertyConverters: PropertyConverter[] = [];

    uniqueIdentifier: string;

    constructor() {
        this.uniqueIdentifier = uniqueIdentifier();
        this._itemHandlingStrategies = this.getItemHandlingStrategies();
        this._propertyConverters = this.getPropertyConverters();
    }

    propertyChanged(property: string, newValue: any): void {
    }

    getPropertyConverters(): PropertyConverter[] {
        return [];
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [];
    }

    addChildItem(itemViewModel: any, item: any) {
        const filtered = this._itemHandlingStrategies.filter(_ => _.type === itemViewModel.constructor);
        if (filtered.length === 1) {
            filtered[0].handle(this as IComponent, item);
        }
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
}
