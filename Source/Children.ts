// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

export class ChildSelectorForProperty {
    readonly property: string;
    readonly selector: string;
    readonly initialValue: any;
    readonly innerPath: string;

    readonly propertyPath: string[];

    constructor(
        property: string,
        selector: string,
        initialValue: any,
        innerPath: string) {
        this.property = property;
        this.selector = selector;
        this.initialValue = initialValue;
        this.innerPath = innerPath;

        let fullPath = property;
        if (innerPath && innerPath !== '') {
            fullPath = `${fullPath}.${innerPath}`;
        }

        this.propertyPath = fullPath.split('.');
    }

    getValueFrom(input: any) {
        let current = input;

        for (const property of this.propertyPath) {
            if (!current) {
                break;
            }
            current = current[property];
        }
        return current;
    }

    setValueOn(input: any, value: any) {
        let current = input;
        let property: string = this.property;
        for (let i = 0; i < this.propertyPath.length - 1; i++) {
            property = this.propertyPath[i];
            current = current[property];
        }
        current[property] = value;
    }
}

/**
 * Direct the component to look for children of a specific type and populate the property or property path with
 * the instances found.
 * @param {string} selector CSS Selector representing the items.
 * @param {any} [initialValue] If any items are found, initialize with this.
 * @param {string} [innerPath] Inner property path - can be nested - separated with '.' between every level.
 */
export function childrenOf(selector: string, initialValue?: any, innerPath?: string) {
    return function (target: any, propertyKey: string) {
        target.__metadata__ = target.__metadata__ || {};
        target.__metadata__._childrenOf = target.__metadata__._childrenOf || [] as ChildSelectorForProperty[];
        target.__metadata__._childrenOf.push(new ChildSelectorForProperty(propertyKey, selector, initialValue, innerPath || ''));
    };
}

/**
 * Direct the component to look for children of a specific type and populate the property or property path with
 * the instances found.
 * @param {string} selector CSS Selector representing the items.
 * @param {any} [initialValue] If any items are found, initialize with this.
 * @param {string} [innerPath] Inner property path - can be nested - separated with '.' between every level.
 */
export function childOf(selector: string, initialValue?: any, innerPath?: string) {
    return function (target: any, propertyKey: string) {
        target.__metadata__ = target.__metadata__ || {};
        target.__metadata__._childOf = target.__metadata__._childOf || [] as ChildSelectorForProperty[];
        target.__metadata__._childOf.push(new ChildSelectorForProperty(propertyKey, selector, initialValue, innerPath || ''));
    };
}
