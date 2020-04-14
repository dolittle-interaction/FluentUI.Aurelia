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

import TextFieldProps from './TextFieldProps';

@autoinject
@customElement('text-field')
export class AuTextField extends Component<React.FunctionComponent<ITextFieldProps>, ITextFieldProps> {
    @bindable
    icon: string = '';

    constructor(element: Element, componentType?: any) {
        super(element, componentType ?? TextField.prototype);
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

AuTextField.properties<ITextFieldProps>(TextFieldProps);
