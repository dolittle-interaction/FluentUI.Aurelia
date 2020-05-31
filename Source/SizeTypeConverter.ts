// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ITypeConverter } from './ITypeConverter';

export class SizeTypeConverter implements ITypeConverter {
    constructor(private _defaultValue?: any) {
    }

    convert(value: any) {
        if (value && typeof value === 'string' && value !== '') {
            return JSON.parse(value);
        }
        return this._defaultValue;
    }
}
