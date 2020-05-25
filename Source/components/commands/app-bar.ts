// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, useView, PLATFORM } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { AuAppBarItem } from './app-bar-item';
import { Component, childrenOf } from '../../index';

@autoinject
@customElement('app-bar')
@useView(PLATFORM.moduleName('./app-bar.html'))
export class AuAppBar extends Component {
    @childrenOf('app-bar-item')
    items: AuAppBarItem[] = [];

    constructor(element: Element, private _router: Router) {
        super(element);
    }

    attached() {
        super.attached();

        if (this.items) {
            for (const item of this.items) {
                if (this._router.currentInstruction.config.route.indexOf(item.route) === 0) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
            }
        }
    }

    selectedItemChanged(item: AuAppBarItem) {
        this.items.forEach(_ => _.selected = false);
        item.selected = true;

        this._router.navigate(item.route);
    }
}
