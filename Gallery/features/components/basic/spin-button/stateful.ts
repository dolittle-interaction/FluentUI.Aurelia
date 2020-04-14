// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const suffix = ' cm';

export class Stateful {
    currentValue: string = '7 cm';

    validate(value: string) {
        value = this._removeSuffix(value, suffix);
        if (Number(value) > 100 || Number(value) < 0 || value.trim().length === 0 || isNaN(+value)) {
            return '0' + suffix;
        }

        return String(value) + suffix;
    }

    increment(value: string) {
        value = this._removeSuffix(value, suffix);
        if (Number(value) + 2 > 100) {
            return String(+value) + suffix;
        } else {
            return String(+value + 2) + suffix;
        }
    }

    decrement(value: string) {
        value = this._removeSuffix(value, suffix);
        if (Number(value) - 2 < 0) {
            return String(+value) + suffix;
        } else {
            return String(+value - 2) + suffix;
        }
    }

    focus() {
        console.log('Focus called');
    }

    blur() {
        console.log('Blur called');
    }

    private _hasSuffix(value: string, suffix: string): Boolean {
        const subString = value.substr(value.length - suffix.length);
        return subString === suffix;
    }

    private _removeSuffix(value: string, suffix: string): string {
        if (!this._hasSuffix(value, suffix)) {
            return value;
        }

        return value.substr(0, value.length - suffix.length);
    }
}
