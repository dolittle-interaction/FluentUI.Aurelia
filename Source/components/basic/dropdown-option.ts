// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IDropdownOption } from 'office-ui-fabric-react';

import { ItemsComponent } from '../../index';

import { PropertyConverter } from '../../PropertyConverter';
import { SelectableOptionMenuItemTypeConverter } from './SelectableOptionMenuItemTypeConverter';

@autoinject
@customElement('dropdown-option')
export class DropdownOption extends ItemsComponent<IDropdownOption> {

    @bindable
    type: string = 'normal';

    constructor(element: Element) {
        super(element);
    }

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('type', 'itemType', new SelectableOptionMenuItemTypeConverter())];
    }
}

DropdownOption.properties<IDropdownOption>({
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
    isSelected: {} as any
});
