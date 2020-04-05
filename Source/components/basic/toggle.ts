// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { IToggleProps, Toggle } from 'office-ui-fabric-react';

import { ContentComponent } from '../../index';

@autoinject
@customElement('toggle')
export class AuToggle extends ContentComponent<React.FunctionComponent<IToggleProps>, IToggleProps> {
    constructor(element: Element) {
        super(element, Toggle.prototype);
    }
}

AuToggle.properties<IToggleProps>({
    label: {} as any,
    onText: {} as any,
    offText: {} as any,
    ariaLabel: {} as any,
    onAriaLabel: {} as any,
    offAriaLabel: {} as any,
    checked: {} as any,
    defaultChecked: {} as any,
    disabled: {} as any,
    inlineLabel: {} as any,
    role: {} as any,

    onChange: () => {}
});
