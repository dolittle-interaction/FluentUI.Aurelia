// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, inject } from 'aurelia-framework';

import { IButtonProps, PrimaryButton } from 'office-ui-fabric-react';
import { ButtonBase } from './ButtonBase';
import ButtonProps from './ButtonProps';

@inject(Element)
@customElement('primary-button')
export class AuPrimaryButton extends ButtonBase<PrimaryButton> implements IButtonProps {
    hidden: boolean = false;

    constructor(element: Element) {
        super(element, PrimaryButton);
    }
}

AuPrimaryButton.properties<IButtonProps>(ButtonProps);
