// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IComboBoxProps, ComboBox, IComboBox, IComboBoxOption } from 'office-ui-fabric-react';

import { AuComboBoxOption } from './combo-box-option';
import { childrenOf } from '../../index';
import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('combo-box')
export class AuComboBox extends ReactComponent<ComboBox, IComboBoxProps> implements IComboBoxProps {
    @childrenOf('combo-box-option')
    options: IComboBoxOption[] = [];

    @bindable
    selected: IComboBoxOption | undefined;

    @bindable
    selectedKey: string | number = '';

    constructor(element: Element) {
        super(element, ComboBox);
    }

    onChange(event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: number, value?: string) {
        if (index) {
            this.selected = this.options[index];
        } else {
            this.selected = option as AuComboBoxOption;
        }
        this.selectedKey = this.selected?.key || '';
        this.handleRendering();
    }
}

AuComboBox.properties<IComboBoxProps>({
    label: {} as any,
    ariaLabel: {} as any,
    id: {} as any,
    className: {} as any,
    defaultSelectedKey: {} as any,
    selectedKey: {} as any,
    multiSelect: {} as any,
    required: {} as any,
    disabled: {} as any,
    calloutProps: {} as any,
    panelProps: {} as any,
    errorMessage: {} as any,
    placeholder: {} as any,
    openOnKeyboardFocus: {} as any,
    options: {} as any,
    allowFreeform: {} as any,
    autoComplete: {} as any,
    text: {} as any,
    buttonIconProps: {} as any,
    autofill: {} as any,
    theme: {} as any,
    styles: {} as any,
    caretDownButtonStyles: {} as any,
    comboBoxOptionStyles: {} as any,
    scrollSelectedToTop: {} as any,
    dropdownWidth: {} as any,
    useComboBoxAsMenuWidth: {} as any,
    dropdownMaxWidth: {} as any,
    isButtonAriaHidden: {} as any,
    ariaDescribedBy: {} as any,
    keytipProps: {} as any,
    persistMenu: {} as any,
    shouldRestoreFocus: {} as any,
    iconButtonProps: {} as any,

    onItemClick: () => { },
    onMenuOpen: () => { },
    onMenuDismiss: () => { },
    onMenuDismissed: () => { },
    onChange: () => { }
});
