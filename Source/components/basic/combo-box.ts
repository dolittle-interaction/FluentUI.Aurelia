// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { IComboBoxProps, ComboBox } from 'office-ui-fabric-react';

import { ItemsComponent, IItemHandlingStrategy, TargetPropertyItemHandlingStrategy } from '../../index';

import { ComboBoxOption } from './combo-box-option';

@autoinject
@customElement('combo-box')
export class AuComboBox extends ItemsComponent<IComboBoxProps, ComboBox> {
    constructor(element: Element) {
        super(element, ComboBox);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new TargetPropertyItemHandlingStrategy(ComboBoxOption, 'options')];
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
