// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { IButtonProps, CommandBarButton } from 'office-ui-fabric-react';

import { ButtonBase } from './ButtonBase';
import ButtonProps from './ButtonProps';

@autoinject
@customElement('command-bar-button')
export class AuCommandBarButton extends ButtonBase<CommandBarButton> {
    constructor(element: Element) {
        super(element, CommandBarButton);
    }
}

AuCommandBarButton.properties<IButtonProps>(ButtonProps);
