// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IComponent } from './IComponent';
import { IItemHandlingStrategy } from './IItemHandlingStrategy';

export type HandleItem = (target: IComponent, item: IComponent) => void;

export class CallbackItemHandlingStrategy implements IItemHandlingStrategy {
    readonly type: Function;
    readonly callback: HandleItem;

    constructor(type: Function, callback: HandleItem) {
        this.type = type;
        this.callback = callback;
    }

    handle(target: IComponent, item: IComponent): void {
        this.callback(target, item);
    }
}
