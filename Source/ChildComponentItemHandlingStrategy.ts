// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IItemsComponent } from './IItemsComponent';
import { IItemHandlingStrategy } from './IItemHandlingStrategy';
import { UIElement } from './UIElement';

export class ChildComponentItemHandlingStrategy implements IItemHandlingStrategy {
    readonly type: Function;

    constructor(type: Function) {
        this.type = type;
    }

    canHandle(item: UIElement): boolean {
        return true;
    }

    handle(target: IItemsComponent, item: UIElement): void {
        if ((item as any).actualElement) {
            target.addChildComponent(item);
        }
    }
}
