// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject } from 'aurelia-dependency-injection';

@autoinject
export class Index {
    textForButton: string = '';

    constructor() {
        let counter = 0;
        setInterval(() => {
            this.textForButton = `Blah blah ${counter++}`;
        }, 1000);
    }

    clicked() {
        alert('clicked');
    }

    otherClicked() {
        alert('Other clicked');
    }
}
