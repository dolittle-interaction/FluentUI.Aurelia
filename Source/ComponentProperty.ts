// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

export class ComponentProperty {
    readonly name: string;
    readonly attribute: string;
    readonly reactName: string;
    readonly isFunction: boolean;

    constructor(name: string, attribute: string, reactName: string, isFunction: boolean) {
        this.name = name;
        this.attribute = attribute;
        this.reactName = reactName;
        this.isFunction = isFunction;
    }
}
