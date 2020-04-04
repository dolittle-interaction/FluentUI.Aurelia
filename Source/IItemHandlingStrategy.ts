// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IComponent } from './IComponent';

export interface IItemHandlingStrategy {
    readonly type: Function;

    handle(target: IComponent, item: IComponent): void;
}
