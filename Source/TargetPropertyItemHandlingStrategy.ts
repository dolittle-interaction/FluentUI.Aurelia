// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { UIElement } from './UIElement';
import { IItemsComponent } from './IItemsComponent';
import { IItemHandlingStrategy } from './IItemHandlingStrategy';

export class TargetPropertyItemHandlingStrategy implements IItemHandlingStrategy {
    readonly targetProperty: string;
    readonly type: Function;

    constructor(type: Function, targetProperty: string) {
        this.targetProperty = targetProperty;
        this.type = type;
    }

    handle(target: IItemsComponent, item: UIElement): void {
        const targetAsAny = target as any;
        if (!targetAsAny[this.targetProperty]) {
            targetAsAny[this.targetProperty] = [];
        }
        if (Object.prototype.toString.call(targetAsAny[this.targetProperty]) !== '[object Array]') {
            throw new Error(`Property '${this.targetProperty}' on '${this.type}' is not an array. Can't add items.`);
        }

        const items = [...targetAsAny[this.targetProperty], item.state];
        target.propertyChanged(this.targetProperty, items);
    }
}
