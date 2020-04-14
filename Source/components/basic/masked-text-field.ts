// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ITextFieldProps, MaskedTextField } from 'office-ui-fabric-react';

import { AuTextField } from './text-field';
import TextFieldProps from './TextFieldProps';

@autoinject
@customElement('masked-text-field')
export class AuMaskedTextField extends AuTextField {
    constructor(element: Element) {
        super(element, MaskedTextField.prototype);
    }
}

AuMaskedTextField.properties<ITextFieldProps>(TextFieldProps);
