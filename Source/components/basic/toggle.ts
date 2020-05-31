// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IToggleProps, Toggle } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('toggle')
export class AuToggle extends ReactComponent<React.FunctionComponent<IToggleProps>, IToggleProps> implements IToggleProps {
    @bindable
    checked: boolean = false;

    constructor(element: Element) {
        super(element, Toggle);
    }

    onChange(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, checked?: boolean) {
        this.checked = checked || false;
        this.handleRendering();
    }
}

AuToggle.properties<IToggleProps>({
    label: {} as any,
    onText: {} as any,
    offText: {} as any,
    ariaLabel: {} as any,
    onAriaLabel: {} as any,
    offAriaLabel: {} as any,
    checked: {} as any,
    defaultChecked: {} as any,
    disabled: {} as any,
    inlineLabel: {} as any,
    role: {} as any,

    onChange: () => { }
});
