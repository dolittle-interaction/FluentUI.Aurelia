// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { IButtonProps, IconButton } from 'office-ui-fabric-react';

import { ButtonBase } from './ButtonBase';
import ButtonProps from './ButtonProps';

@autoinject
@customElement('icon-button')
export class AuIconButton extends ButtonBase<IconButton> {
    constructor(element: Element) {
        super(element, IconButton);
    }
}

AuIconButton.properties<IButtonProps>(ButtonProps);
