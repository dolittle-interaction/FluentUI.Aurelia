// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ITypeConverter } from './ITypeConverter';

export class PropertyConverter {
    readonly propertyName: string;
    readonly targetPropertyName: string;
    readonly typeConverter: ITypeConverter;

    constructor(propertyName: string, targetPropertyName: string, typeConverter: ITypeConverter) {
        this.propertyName = propertyName;
        this.targetPropertyName = targetPropertyName;
        this.typeConverter = typeConverter;
    }
}
