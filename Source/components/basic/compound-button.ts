// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { IButtonProps, CompoundButton } from 'office-ui-fabric-react';

import { ButtonBase } from './ButtonBase';
import ButtonProps from './ButtonProps';

@autoinject
@customElement('compound-button')
export class AuCompoundButton extends ButtonBase<CompoundButton> {
    constructor(element: Element) {
        super(element, CompoundButton);
    }
}

AuCompoundButton.properties<IButtonProps>(ButtonProps);
