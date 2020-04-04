// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import Globals from './globals';

export class index {
    textForButton: string = 'Waiting for binding';

    constructor() {
        let counter = 0;
        setInterval(() => {
            counter++;
            this.textForButton = `Blah blah ${counter}`;
        }, 1000);
    }

    clicked() {
        alert('clicked');
    }

    otherClicked() {
        alert('Other clicked');
    }

    disabledToggled(checked: boolean) {
        Globals.disabled = checked;
    }

    checkedToggled(checked: boolean) {
        Globals.checked = checked;
    }

}
