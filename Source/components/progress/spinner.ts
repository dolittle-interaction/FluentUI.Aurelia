// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject, bindable } from 'aurelia-framework';
import { ISpinnerProps, Spinner, ISpinner, SpinnerSize, SpinnerType } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';
import { KeyValueTypeConverter, propertyConverter } from '../../index';

const spinnerSizes = {
    'xsmall': SpinnerSize.xSmall,
    'small': SpinnerSize.small,
    'medium': SpinnerSize.medium,
    'large': SpinnerSize.large
};


@autoinject
@customElement('spinner')
export class AuSpinner extends ReactComponent<React.FunctionComponent<ISpinnerProps>, ISpinnerProps> implements ISpinner {

    @bindable
    spinnerSize: string = 'medium';

    constructor(element: Element) {
        super(element, Spinner);
    }

    @propertyConverter('spinnerSize', new KeyValueTypeConverter(spinnerSizes))
    get size(): SpinnerSize { return SpinnerSize.medium; }
}

AuSpinner.properties<ISpinnerProps>({
    type: {} as any,
    size: {} as any,
    label: {} as any,
    className: {} as any,
    ariaLive: {} as any,
    ariaLabel: {} as any,
    theme: {} as any,
    styles: {} as any,
    labelPosition: {} as any,
});
