// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

export function parseValue(input: any): any {
    let output = input;
    if (typeof input === 'string') {
        const inputAsString = input as string;
        const floatParsed = parseFloat(inputAsString);
        if (!isNaN(floatParsed)) {
            output = floatParsed;
        } else {
            const intParsed = parseInt(inputAsString, 10);
            if (!isNaN(intParsed)) {
                output = intParsed;
            } else {
                if (inputAsString.toLowerCase() === 'true') {
                    output = true;
                } else if (inputAsString.toLowerCase() === 'false') {
                    output = false;
                }
            }
        }
    }
    return output;
}
