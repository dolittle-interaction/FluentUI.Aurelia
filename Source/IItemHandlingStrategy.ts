// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IItemsComponent } from './IItemsComponent';
import { UIElement } from './UIElement';

export interface IItemHandlingStrategy {
    readonly type: Function;

    handle(target: IItemsComponent, item: UIElement): void;
}
