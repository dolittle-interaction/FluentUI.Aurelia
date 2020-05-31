// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ITypeConverter } from './ITypeConverter';
import { PropertyConverters } from './PropertyConverters';

export class PropertyConverter {
    readonly sourceProperty: string;
    readonly targetProperty: string;
    readonly typeConverter: ITypeConverter;

    constructor(sourceProperty: string, targetProperty: string, typeConverter: ITypeConverter) {
        this.sourceProperty = sourceProperty;
        this.targetProperty = targetProperty;
        this.typeConverter = typeConverter;
    }
}

export function propertyConverter(sourceProperty: string, converter: ITypeConverter) {
    return function (target: any, propertyKey: string) {
        PropertyConverters.addConverterFor(target.constructor.prototype, sourceProperty, propertyKey, converter);
    };
}

