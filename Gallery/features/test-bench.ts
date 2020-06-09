// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { observable } from 'aurelia-framework';

export class TestBench {
    items: any[] = [{
        first: 'First column',
        second: 'Second column',
    }, {
        first: 'First column - second',
        second: 'Second column',
    }];


    activeItemChanged(item: any) {
        console.log('changed : ' + item.first);
    }
}
