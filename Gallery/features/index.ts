// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject } from 'aurelia-dependency-injection';

@autoinject
export class Index {
    textForButton: string = '';
    items: any[] = [{
        first: 'First column',
        second: 'Second column',
    }, {
        first: 'First column',
        second: 'Second column',
    }];

    constructor() {
        let counter = 0;
        setInterval(() => {
            counter++;
            this.textForButton = `Blah blah ${counter}`;

            this.items.push({
                first: `First ${counter}`,
                second: `Second ${counter * 2}`
            });
        }, 1000);
    }

    clicked() {
        alert('clicked');
    }

    otherClicked() {
        alert('Other clicked');
    }
}
