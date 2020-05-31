// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { customElement, autoinject, bindable } from 'aurelia-framework';
import { ITextFieldProps, TextField, ITextField, IIconProps } from 'office-ui-fabric-react';

import { ReactWrapperComponentWithoutChildren } from '../../React/ReactWrapperComponentWithoutChildren';

import { ReactComponent } from '../../React/ReactComponent';

import {
    propertyConverter,
    IconTypeConverter,
} from '../../index';

import TextFieldProps from './TextFieldProps';

@autoinject
@customElement('text-field')
export class AuTextField extends ReactComponent<React.FunctionComponent<ITextFieldProps>, ITextFieldProps> implements ITextField {
    private _suspendPropertyChanged: boolean = false;

    @bindable
    icon: string = '';

    @propertyConverter('icon', new IconTypeConverter())
    get iconProps(): IIconProps { return {}; }

    @bindable
    value: string | undefined;

    selectionStart: number | null = null;
    selectionEnd: number | null = null;

    constructor(element: Element, componentType?: any) {
        super(element, componentType ?? TextField);
    }

    onChange(textField: AuTextField, value: string) {
        this._suspendPropertyChanged = true;
        this.value = value;
        this.handleRendering();
    }

    propertyChanged(propertyName: string, newValue: any) {
        if (this._suspendPropertyChanged) {
            this._suspendPropertyChanged = false;
            return;
        }

        super.propertyChanged(propertyName, newValue);
    }

    focus() {
    }

    blur() {
    }

    select() {
    }

    setSelectionStart(value: number) {
    }

    setSelectionEnd(value: number) {
    }

    setSelectionRange(start: number, end: number) {
    }
}

AuTextField.properties<ITextFieldProps>(TextFieldProps);
