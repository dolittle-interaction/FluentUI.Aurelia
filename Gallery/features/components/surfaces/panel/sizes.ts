// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { observable, bindable } from 'aurelia-framework';

export class Sizes {
    @observable
    panelVisible: boolean = false;

    @bindable
    selectedSize: any = 'smallFixedFar';

    showPanel() {
        this.panelVisible = true;
    }

    hidePanel() {
        this.panelVisible = false;
    }
}
