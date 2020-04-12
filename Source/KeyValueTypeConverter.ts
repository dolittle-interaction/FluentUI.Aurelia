// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ITypeConverter } from './ITypeConverter';

export class KeyValueTypeConverter implements ITypeConverter {
    constructor(private _defaultValue: any, private _keyValues: any) {
    }

    convert(value: any) {
        if (this._keyValues.hasOwnProperty(value)) {
            return this._keyValues[value];
        }
        return this._defaultValue;
    }
}
