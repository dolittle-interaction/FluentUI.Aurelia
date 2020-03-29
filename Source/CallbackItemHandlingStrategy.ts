// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IItemHandlingStrategy } from './IItemHandlingStrategy';
import { IComponent } from './IComponent';

export type HandleItem = (target: IComponent, item: any) => void;

export class CallbackItemHandlingStrategy implements IItemHandlingStrategy {
    readonly type: Function;
    readonly callback: HandleItem;

    constructor(type: Function, callback: HandleItem) {
        this.type = type;
        this.callback = callback;
    }

    handle(target: any, item: any): void {
        this.callback(target, item);
    }
}
