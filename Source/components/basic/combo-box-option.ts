// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IComboBoxOption } from 'office-ui-fabric-react';

import { ItemsComponent } from '../../index';

import { PropertyConverter } from '../../PropertyConverter';
import { SelectableOptionMenuItemTypeConverter } from './SelectableOptionMenuItemTypeConverter';

@autoinject
@customElement('combo-box-option')
export class ComboBoxOption extends ItemsComponent<IComboBoxOption> {

    @bindable
    type: string = 'normal';

    constructor(element: Element) {
        super(element);
    }

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('type', 'itemType', new SelectableOptionMenuItemTypeConverter())];
    }
}

ComboBoxOption.properties<IComboBoxOption>({
    key: {} as any,
    id: {} as any,
    text: {} as any,
    title: {} as any,
    itemType: {} as any,
    index: {} as any,
    ariaLabel: {} as any,
    selected: {} as any,
    disabled: {} as any,
    hidden: {} as any,
    data: {} as any,
    styles: {} as any
});
