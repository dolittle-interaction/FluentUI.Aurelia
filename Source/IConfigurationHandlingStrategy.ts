// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { UIElement } from './UIElement';

export interface IConfigurationHandlingStrategy {
    readonly type: Function;

    handle(target: UIElement, configuration: any): void;
}
