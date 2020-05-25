// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable, observable } from 'aurelia-framework';
import { IBreadcrumbItem } from 'office-ui-fabric-react';

import { AuChoiceGroupOption } from '@dolittle/fluentui.aurelia';

export class TestBench {

    items: IBreadcrumbItem[] = [
        { text: 'Files', key: 'Files', href:'#', as: 'h1' },
        { text: 'Folder 1', key: 'f1', href:'#', as: 'h1' },
        { text: 'Folder 2', key: 'f2', href:'#', as: 'h1' },
        { text: 'Folder 3', key: 'f3', href:'#' },
        { text: 'Folder 4 (non-clickable)', key: 'f4', href:'#' },
        { text: 'Folder 5', key: 'f5', href:'#' },
    ];

    @bindable
    myValue: string = '';

    @bindable
    theSearch: string = '';

    @bindable
    selectedOption: any;

    constructor() {
        let counter = 0;
        setInterval(() => {
            //this.myValue = `Counter : ${counter}`;
            counter++;

        }, 1000);
    }

    clicked() {
        debugger;
    }

    changed() {
        debugger;
    }

    propertyChanged(property: any, newValue: any) {
        console.log(`${property} changed to ${newValue}`);
    }

}
