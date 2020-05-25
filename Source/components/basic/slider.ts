// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ISliderProps, Slider } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('slider')
export class AuSlider extends ReactComponent<React.FunctionComponent<ISliderProps>, ISliderProps> implements ISliderProps {
    @bindable
    value?: number;

    constructor(element: Element) {
        super(element, Slider);
    }

    change(value: number) {
        this.value = value;
        this.handleRendering();
    }
}

AuSlider.properties<ISliderProps>({
    styles: {} as any,
    theme: {} as any,
    label: {} as any,
    defaultValue: {} as any,
    value: {} as any,
    min: {} as any,
    max: {} as any,
    showValue: {} as any,
    ariaLabel: {} as any,
    ariaValueText: {} as any,
    vertical: {} as any,
    disabled: {} as any,
    snapToStep: {} as any,
    className: {} as any,
    buttonProps: {} as any,
    valueFormat: {} as any,
    originFromZero: {} as any,

    onChange: () => {}
});
