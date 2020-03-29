// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

export class ItemSelector {
    readonly targetProperty: string;
    readonly type: Function;

    constructor(targetProperty: string, type: Function) {
        this.targetProperty = targetProperty;
        this.type = type;
    }
}
