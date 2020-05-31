// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable } from 'aurelia-framework';

export class Basic {
    @bindable
    uncheckedUncontrolledChecked: boolean = false;

    @bindable
    checkedUncontrolledChecked: boolean = false;

    propertyChanged(property: string, newValue: boolean) {
        console.log(`Property '${property}'changed to '${newValue}'`);
    }
}
