// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable } from 'aurelia-framework';

export class Basic {

    @bindable
    integerValue: number = 0;

    @bindable
    decimalValue: number = 0;

    propertyChanged(property: string, newValue: boolean) {
        console.log(`Property '${property}'changed to '${newValue}'`);
    }
}
