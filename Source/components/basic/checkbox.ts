// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { ICheckboxProps, Checkbox } from 'office-ui-fabric-react';

import { Component } from '../../Component';


@autoinject
@customElement('checkbox')
export class AuCheckbox extends Component<React.FunctionComponent<ICheckboxProps>, ICheckboxProps> {
    constructor(element: Element) {
        super(element, Checkbox.prototype);
    }
}

AuCheckbox.properties<ICheckboxProps>({
    checked: {} as any,
    defaultChecked: {} as any,
    label: {} as any,
    disabled: {} as any,
    ariaLabel: {} as any,
    ariaLabelledBy: {} as any,
    ariaDescribedBy: {} as any,
    ariaPositionInSet: {} as any,
    ariaSetSize: {} as any,
    indeterminate: {} as any,
    defaultIndeterminate: {} as any,

    onChange: () => {}
});
