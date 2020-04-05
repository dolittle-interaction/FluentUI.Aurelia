// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { noView } from 'aurelia-framework';

import { IComponentConfiguration } from './IComponentConfiguration';
import { FrameworkElement } from './FrameworkElement';
import { UIElement } from './UIElement';
import { Constructor } from './Constructor';
import { ComponentState } from './ComponentState';

@noView
export abstract class ComponentConfiguration<TProps> extends FrameworkElement implements IComponentConfiguration {
    constructor(element: Element, private _type: Constructor<any>) {
        super(element);
    }

    attached() {
        super.attached();

        if (this.parent instanceof UIElement) {
            const state = {};
            ComponentState.updateFor(this, state);
            (this.parent as UIElement).handleConfigurationObject((this as any).constructor, state);
        }
    }
}
