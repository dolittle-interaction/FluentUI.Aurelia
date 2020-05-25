// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IDropdownOption, SelectableOptionMenuItemType } from 'office-ui-fabric-react';

import { ReactBase } from '../../React/ReactBase';

import { PropertyConverter } from '../../PropertyConverter';
import { KeyValueTypeConverter } from '../../index';

@autoinject
@customElement('dropdown-option')
export class AuDropdownOption extends ReactBase<IDropdownOption> implements IDropdownOption {
    @bindable
    key: string | number = '';

    @bindable
    text: string = '';

    @bindable
    type: string = 'normal';

    constructor(element: Element) {
        super(element);
    }

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('type', 'itemType', new KeyValueTypeConverter(
            SelectableOptionMenuItemType.Divider, {
            'divider': SelectableOptionMenuItemType.Divider,
            'header': SelectableOptionMenuItemType.Header
        }
        ))];
    }
}

AuDropdownOption.properties<IDropdownOption>({
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
