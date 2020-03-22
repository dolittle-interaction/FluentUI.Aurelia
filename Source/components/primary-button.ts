// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, inject } from 'aurelia-framework';
import { ReactComponent } from '../ReactComponent';

import { IButtonProps, PrimaryButton } from 'office-ui-fabric-react/lib/Button';

@inject(Element)
@customElement('primary-button')
export class AuPrimaryButton extends ReactComponent<PrimaryButton, IButtonProps> implements IButtonProps {
    hidden: boolean = false;

    constructor(element: Element) {
        super(element, PrimaryButton);
    }
}

AuPrimaryButton.bindables<IButtonProps>({
    href: '',
    text: 'Something',
    primary: <any> {},
    onClick: () => alert('hello')
});
