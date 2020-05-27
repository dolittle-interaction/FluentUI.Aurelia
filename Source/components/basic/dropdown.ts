// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { Dropdown, IDropdownProps, IDropdown, IDropdownOption } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';

import { AuDropdownOption } from './dropdown-option';
import { childrenOf } from '../../index';

@autoinject
@customElement('dropdown')
export class AuDropdown extends ReactComponent<React.FunctionComponent<IDropdownProps>, IDropdownProps> {
    @childrenOf('dropdown-option')
    options: IDropdownOption[] = [];

    @bindable
    selected: IDropdownOption | undefined;

    @bindable
    selectedKey: string | number = '';

    constructor(element: Element) {
        super(element, Dropdown);
    }

    change(event: React.FormEvent<IDropdown>, option?: IDropdownOption, index?: number, value?: string) {
        if (index) {
            this.selected = this.options[index];
        } else {
            this.selected = option as AuDropdownOption;
        }
        this.selectedKey = this.selected?.key || '';
        this.handleRendering();
    }
}

AuDropdown.properties<IDropdownProps>({
    label: {} as any,
    ariaLabel: {} as any,
    id: {} as any,
    className: {} as any,
    defaultSelectedKey: {} as any,
    selectedKey: {} as any,
    multiSelect: {} as any,
    placeholder: {} as any,
    options: {} as any,
    dropdownWidth: {} as any,
    responsiveMode: {} as any,
    defaultSelectedKeys: {} as any,
    multiSelectDelimiter: {} as any,
    notifyOnReselect: {} as any,
    isDisabled: {} as any,
    keytipProps: {} as any,
    theme: {} as any,
    styles: {} as any,
    disabled: {} as any,
    required: {} as any,
    calloutProps: {} as any,
    panelProps: {} as any,
    errorMessage: {} as any,
    openOnKeyboardFocus: {} as any,

    onChange: () => { },
    onDismiss: () => { }
});
