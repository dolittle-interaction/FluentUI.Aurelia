// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IItemHandlingStrategy } from './IItemHandlingStrategy';

export interface IComponent {

    getItemHandlingStrategies(): IItemHandlingStrategy[];

    addChildItem(itemViewModel: any, item: any): void;

    propertyChanged(property: string, newValue: any): void;
}
