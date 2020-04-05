// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { DefaultButton, IButtonProps } from 'office-ui-fabric-react';

import { ButtonBase } from './ButtonBase';
import ButtonProps from './ButtonProps';

@autoinject
@customElement('default-button')
export class AuDefaultButton extends ButtonBase<DefaultButton> {
    constructor(element: Element) {
        super(element, DefaultButton);
    }
}

AuDefaultButton.properties<IButtonProps>(ButtonProps);
