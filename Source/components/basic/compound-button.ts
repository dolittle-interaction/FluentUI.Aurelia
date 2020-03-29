// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, inject } from 'aurelia-framework';
import { ReactComponent } from '../../ReactComponent';

import { IButtonProps, CompoundButton } from 'office-ui-fabric-react';
import ButtonProps from './ButtonProps';

@inject(Element)
@customElement('compound-button')
export class AuCompoundButton extends ReactComponent<CompoundButton, IButtonProps> implements IButtonProps {
    hidden: boolean = false;

    constructor(element: Element) {
        super(element, CompoundButton);
    }
}

AuCompoundButton.properties<IButtonProps>(ButtonProps);
