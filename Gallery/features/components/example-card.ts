// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject, customElement, bindable } from 'aurelia-framework';

@autoinject
@customElement('example-card')
export class ExampleCard {
    @bindable
    title: string = '';
}
