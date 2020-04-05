// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

export function uniqueIdentifier(prefix: string = 'au') {
    return `${prefix}-${Math.round(Math.random() * 10000000000000000)}`;
}
