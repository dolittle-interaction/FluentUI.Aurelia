// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { observable } from 'aurelia-framework';

export class Globals {
    @observable
    disabled: boolean = false;

    @observable
    checked: boolean = false;
}

export default new Globals();
