// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { IButtonProps, ActionButton } from 'office-ui-fabric-react';
import { ButtonBase } from './ButtonBase';
import ButtonProps from './ButtonProps';

@autoinject
@customElement('action-button')
export class AuActionButton extends ButtonBase<ActionButton> implements IButtonProps {
    hidden: boolean = false;

    constructor(element: Element) {
        super(element, ActionButton);
    }
}

AuActionButton.properties<IButtonProps>(ButtonProps);
