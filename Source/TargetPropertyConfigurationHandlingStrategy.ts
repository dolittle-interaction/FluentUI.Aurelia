// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { UIElement } from './UIElement';
import { IConfigurationHandlingStrategy } from './IConfigurationHandlingStrategy';

export class TargetPropertyConfigurationHandlingStrategy implements IConfigurationHandlingStrategy {
    readonly targetProperty: string;
    readonly type: Function;

    constructor(type: Function, targetProperty: string) {
        this.targetProperty = targetProperty;
        this.type = type;
    }

    handle(target: UIElement, configuration: any): void {
        target.propertyChanged(this.targetProperty, configuration);

        if (!target.isRenderRoot) {
            target.renderRoot.childStateChanged();
        }
    }
}
