// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, inject } from 'aurelia-framework';
import { ReactComponent } from '../ReactComponent';

import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

@inject(Element)
@customElement('default-button')
export class AuDefaultButton extends ReactComponent<DefaultButton, IButtonProps> {
    constructor(element: Element) {
        super(element, DefaultButton);
    }
}

AuDefaultButton.bindables<IButtonProps>({
    href: '',
    text: 'Default',
    primary: false,
    onClick: () => alert('hello')
});
