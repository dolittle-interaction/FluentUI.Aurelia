// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { observable, bindable } from 'aurelia-framework';

export class Default {
    @observable
    modalVisible: boolean = false;

    showModal() {
        this.modalVisible = true;
    }

    hideModal() {
        this.modalVisible = false;
    }
}
