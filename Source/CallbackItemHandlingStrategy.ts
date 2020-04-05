// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { UIElement } from './UIElement';
import { IItemsComponent } from './IItemsComponent';
import { IItemHandlingStrategy } from './IItemHandlingStrategy';

export type HandleItem = (target: IItemsComponent, item: UIElement) => void;

export class CallbackItemHandlingStrategy implements IItemHandlingStrategy {
    readonly type: Function;
    readonly callback: HandleItem;

    constructor(type: Function, callback: HandleItem) {
        this.type = type;
        this.callback = callback;
    }

    handle(target: IItemsComponent, item: UIElement): void {
        this.callback(target, item);
    }
}
