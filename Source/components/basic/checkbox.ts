// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ICheckboxProps, Checkbox } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('checkbox')
export class AuCheckbox extends ReactComponent<React.FunctionComponent<ICheckboxProps>, ICheckboxProps> implements ICheckboxProps {
    @bindable
    checked: boolean = false;

    constructor(element: Element) {
        super(element, Checkbox);
    }

    onChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) {
        this.checked = checked || false;
        this.handleRendering();
    }
}

AuCheckbox.properties<ICheckboxProps>({
    checked: {} as any,
    defaultChecked: {} as any,
    label: {} as any,
    disabled: {} as any,
    ariaLabel: {} as any,
    ariaLabelledBy: {} as any,
    ariaDescribedBy: {} as any,
    ariaPositionInSet: {} as any,
    ariaSetSize: {} as any,
    indeterminate: {} as any,
    defaultIndeterminate: {} as any,

    onChange: () => { }
});
