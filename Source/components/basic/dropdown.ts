// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject } from 'aurelia-framework';

import { Dropdown, IDropdownProps } from 'office-ui-fabric-react';

import { ItemsComponent, IItemHandlingStrategy, TargetPropertyItemHandlingStrategy } from '../../index';

import { DropdownOption } from './dropdown-option';

@autoinject
@customElement('dropdown')
export class AuDropdown extends ItemsComponent<IDropdownProps, React.FunctionComponent<IDropdownProps>> {
    constructor(element: Element) {
        super(element, Dropdown.prototype);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new TargetPropertyItemHandlingStrategy(DropdownOption, 'options')];
    }
}

AuDropdown.properties<IDropdownProps>({
    label: {} as any,
    ariaLabel: {} as any,
    id: {} as any,
    className: {} as any,
    defaultSelectedKey: {} as any,
    selectedKey: {} as any,
    multiSelect: {} as any,
    placeholder: {} as any,
    options: {} as any,
    dropdownWidth: {} as any,
    responsiveMode: {} as any,
    defaultSelectedKeys: {} as any,
    multiSelectDelimiter: {} as any,
    notifyOnReselect: {} as any,
    isDisabled: {} as any,
    keytipProps: {} as any,
    theme: {} as any,
    styles: {} as any,
    disabled: {} as any,
    required: {} as any,
    calloutProps: {} as any,
    panelProps: {} as any,
    errorMessage: {} as any,
    openOnKeyboardFocus: {} as any,

    onChange: () => {},
    onDismiss: () => {}
});
