// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentState } from './ComponentState';
import { IComponent } from './IComponent';
import { ReactBase } from './ReactBase';
import { Constructor } from './Constructor';

export class ReactChildItem<TItem> extends ReactBase {
    constructor(private _element: Element) {
        super();
    }

    propertyChanged(property: string, newValue: any) {
    }

    attached() {
        this.handlePropertyConverters();
        const viewModel = (this._element.parentElement as any)?.au?.controller?.viewModel as IComponent;
        if (viewModel) {
            const properties = ComponentState.createFor(this);
            viewModel.addChildItem(this, properties);
        }
    }
}
