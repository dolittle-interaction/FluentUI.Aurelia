// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentState } from './ComponentState';
import { IComponent } from './IComponent';
import { ReactBase } from './ReactBase';
import { noView } from 'aurelia-framework';

@noView
export class ReactChildItem<TItem> extends ReactBase {
    hidden: boolean = false;

    constructor(private _element: Element) {
        super(_element);
    }

    propertyChanged(property: string, newValue: any) {
        (this as any)[property] = newValue;
        this.state[property] = newValue;
        this.childStateChanged();
    }

    attached() {
        super.attached();
        this.handlePropertyConverters();
        let parentElement = this._element.parentElement as any;
        if (parentElement.tagName.toLowerCase() === 'au-content') {
            parentElement = parentElement.parentElement;
        }

        const viewModel = (parentElement as any)?.au?.controller?.viewModel as IComponent;
        if (viewModel) {
            ComponentState.updateFor(this, this.state);
            this.hidden = false;
            viewModel.addChildItem(this);
        }
    }
}
