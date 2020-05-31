// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ISpinButtonProps, SpinButton, IIconProps } from 'office-ui-fabric-react';

import {
    propertyConverter,
    IconTypeConverter
} from '../../index';

import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('spin-button')
export class AuSpinButton extends ReactComponent<SpinButton, ISpinButtonProps> implements ISpinButtonProps {
    @bindable
    value?: string;

    @bindable
    icon: string = '';

    @propertyConverter('icon', new IconTypeConverter())
    get iconProps(): IIconProps { return {}; }

    @bindable
    incrementIcon: string = '';

    @propertyConverter('icon', new IconTypeConverter())
    get incrementButtonIcon(): IIconProps { return {}; }

    @bindable
    decrementIcon: string = '';

    @propertyConverter('icon', new IconTypeConverter())
    get decrementButtonIcon(): IIconProps { return {}; }

    constructor(element: Element) {
        super(element, SpinButton);
    }
}

AuSpinButton.properties<ISpinButtonProps>({
    defaultValue: {} as any,
    value: {} as any,
    min: {} as any,
    max: {} as any,
    step: {} as any,
    ariaLabel: {} as any,
    ariaDescribedBy: {} as any,
    title: {} as any,
    disabled: {} as any,
    className: {} as any,
    label: {} as any,
    labelPosition: {} as any,
    iconProps: {} as any,
    incrementButtonIcon: {} as any,
    decrementButtonIcon: {} as any,
    styles: {} as any,
    upArrowButtonStyles: {} as any,
    downArrowButtonStyles: {} as any,
    theme: {} as any,
    incrementButtonAriaLabel: {} as any,
    decrementButtonAriaLabel: {} as any,
    precision: {} as any,
    ariaPositionInSet: {} as any,
    ariaSetSize: {} as any,
    ariaValueNow: {} as any,
    ariaValueText: {} as any,
    keytipProps: {} as any,
    inputProps: {} as any,
    iconButtonProps: {} as any,

    onChange: () => { },
    onValidate: () => { },
    onFocus: () => { },
    onBlur: () => { }
});
