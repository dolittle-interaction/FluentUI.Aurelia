// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, noView, inlineView, bindable } from 'aurelia-framework';

@noView
@customElement('app-bar-item')
export class AuAppBarItem {
    @bindable
    title: string = '';

    @bindable
    icon: string = '';

    @bindable
    selected: boolean = false;
}
