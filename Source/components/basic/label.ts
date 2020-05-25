// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { ILabelProps, Label } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('label')
export class AuLabel extends ReactComponent<React.FunctionComponent<ILabelProps>, ILabelProps> {
    constructor(element: Element) {
        super(element, Label);
    }
}

AuLabel.properties<ILabelProps>({
    required: {} as any,
    disabled: {} as any,
    theme: {} as any,
    styles: {} as any,
});
