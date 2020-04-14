// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ITextFieldProps, TextField } from 'office-ui-fabric-react';

import {
    Component,
    PropertyConverter,
    IconTypeConverter
} from '../../index';

@autoinject
@customElement('text-field')
export class AuTextField extends Component<React.FunctionComponent<ITextFieldProps>, ITextFieldProps> {
    @bindable
    icon: string = '';

    constructor(element: Element) {
        super(element, TextField.prototype);
    }

    createElement() {
        return React.createElement(TextField, this.state);
    }

    render() {
        this.actualComponent = ReactDom.render(this.actualElement as any, this.container) as any;
    }


    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('icon', 'iconProps', new IconTypeConverter())];
    }
}

AuTextField.properties<ITextFieldProps>({
    multiline: {} as any,
    resizable: {} as any,
    autoAdjustHeight: {} as any,
    underlined: {} as any,
    borderless: {} as any,
    label: {} as any,
    description: {} as any,
    prefix: {} as any,
    suffix: {} as any,
    iconProps: {} as any,
    defaultValue: {} as any,
    value: {} as any,
    disabled: {} as any,
    readOnly: {} as any,
    errorMessage: {} as any,
    deferredValidationTime: {} as any,
    className: {} as any,
    inputClassName: {} as any,
    ariaLabel: {} as any,
    validateOnFocusIn: {} as any,
    validateOnFocusOut: {} as any,
    validateOnLoad: {} as any,
    theme: {} as any,
    styles: {} as any,
    autoComplete: {} as any,
    mask: {} as any,
    maskChar: {} as any,
    maskFormat: {} as any,
    placeholder: {} as any,
    required: {} as any,

    onChange: () => {},
    onNotifyValidationResult: () => {},
});
