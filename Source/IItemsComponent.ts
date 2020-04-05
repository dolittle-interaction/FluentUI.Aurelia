// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IItemHandlingStrategy } from './IItemHandlingStrategy';
import { UIElement } from './UIElement';
import { IUIElement } from './IUIElement';

export interface IItemsComponent extends IUIElement {
    childStateChanged(): void;
    getItemHandlingStrategies(): IItemHandlingStrategy[];
    addChildItem(item: UIElement): void;
}
