// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ISpinButtonProps, SpinButton } from 'office-ui-fabric-react';

import {
    ContentComponent,
    PropertyConverter,
    IconTypeConverter
} from '../../index';


@autoinject
@customElement('spin-button')
export class AuSpinButton extends ContentComponent<SpinButton, ISpinButtonProps> {
    @bindable
    icon: string = '';

    @bindable
    incrementIcon: string = '';

    @bindable
    decrementIcon: string = '';

    constructor(element: Element) {
        super(element, SpinButton);
    }

    getPropertyConverters(): PropertyConverter[] {
        return [
            new PropertyConverter('icon', 'iconProps', new IconTypeConverter()),
            new PropertyConverter('incrementIcon', 'incrementButtonIcon', new IconTypeConverter()),
            new PropertyConverter('decrementIcon', 'decrementButtonIcon', new IconTypeConverter())
        ];
    }
}

AuSpinButton.properties<ISpinButtonProps>({
    defaultValue: {} as any,
    value: {} as any,
    min: {} as any,
    max: {} as any,
    step: {} as any,
    ariaLabel: {} as any,
    ariaDescribedBy: {} as any,
    title: {} as any,
    disabled: {} as any,
    className: {} as any,
    label: {} as any,
    labelPosition: {} as any,
    iconProps: {} as any,
    incrementButtonIcon: {} as any,
    decrementButtonIcon: {} as any,
    styles: {} as any,
    upArrowButtonStyles: {} as any,
    downArrowButtonStyles: {} as any,
    theme: {} as any,
    incrementButtonAriaLabel: {} as any,
    decrementButtonAriaLabel: {} as any,
    precision: {} as any,
    ariaPositionInSet: {} as any,
    ariaSetSize: {} as any,
    ariaValueNow: {} as any,
    ariaValueText: {} as any,
    keytipProps: {} as any,
    inputProps: {} as any,
    iconButtonProps: {} as any,

    onValidate: () => {},
    onIncrement: () => {},
    onDecrement: () => {},
    onFocus: () => {},
    onBlur: () => {}
});
