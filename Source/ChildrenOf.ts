// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

export class ChildrenOf {
    readonly property!: string;
    readonly selector!: string;
    readonly innerPath!: string;
}

export function childrenOf(selector: string, innerPath?: string) {
    return function (target: any, propertyKey: string) {
        target.__metadata__ = target.__metadata__ || {};
        target.__metadata__._children = target.__metadata__._children || [] as ChildrenOf[];
        target.__metadata__._children.push(
            { property: propertyKey, selector: selector, innerPath: innerPath || '' } as ChildrenOf
        );
    };
}

