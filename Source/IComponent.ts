// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IItemHandlingStrategy } from './IItemHandlingStrategy';

export interface IComponent {
    isRenderRoot: boolean;
    renderRoot: IComponent;

    state: any;

    getItemHandlingStrategies(): IItemHandlingStrategy[];

    addChildItem(item: IComponent): void;

    propertyChanged(property: string, newValue: any): void;

    childStateChanged(): void;
}
