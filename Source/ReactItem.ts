// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from './ComponentProperties';
import { uniqueIdentifier } from './uniqueIdentifier';
import { ComponentState } from './ComponentState';
import { IComponent } from './IComponent';

export abstract class ReactItem<TItem> {
    static properties<TProps>(properties: TProps) {
        ComponentProperties.configureFor(this, properties);
    }

    uniqueIdentifier: string;

    constructor(private _element: Element) {
        this.uniqueIdentifier = uniqueIdentifier();
    }

    propertyChanged(property: string, newValue: any) {
    }

    attached() {
        const viewModel = (this._element.parentElement as any)?.au?.controller?.viewModel as IComponent;
        if (viewModel) {
            const properties = ComponentState.createFor(this);
            viewModel.addChildItem(this, properties);
        }
    }
}
