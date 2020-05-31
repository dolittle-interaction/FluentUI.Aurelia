// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PropertyConverter } from './PropertyConverter';
import { ITypeConverter } from './ITypeConverter';

export class PropertyConverters {
    private _all: PropertyConverter[] = [];

    get all(): PropertyConverter[] { return [...this._all]; }

    addConverter(converter: PropertyConverter) {
        this._all.push(converter);
    }

    static addConverterFor(target: Function, sourceProperty: string, targetProperty: string, typeConverter: ITypeConverter) {
        const targetAsAny = target as any;

        const converters = targetAsAny.__propertyConverters = targetAsAny.__propertyConverters || new PropertyConverters();

        converters.addConverter(new PropertyConverter(sourceProperty, targetProperty, typeConverter));
    }

    static getConvertersFor(target: any): PropertyConverter[] {
        return target.__propertyConverters?.all || [];
    }

    static hookupConvertersFor(target: any) {
        const converters = PropertyConverters.getConvertersFor(target);
        for (const converter of converters) {
            Reflect.defineProperty(
                target,
                converter.targetProperty,
                {
                    configurable: true,
                    enumerable: true,
                    get() {
                        let value = (this as any)[converter.sourceProperty];
                        if (typeof value === 'string' && value === '') {
                            value = undefined;
                        }
                        const converted = converter.typeConverter.convert(value);
                        if (!converted && !value) {
                            return value;
                        }
                        return converted;
                    }
                });
        }
    }
}
