// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { DialogFooter, IDialogFooterProps, IDialogFooter } from 'office-ui-fabric-react';
import { customElement, autoinject } from 'aurelia-framework';
import { ContentComponent } from '../../Source/index';

@autoinject
@customElement('dialog-footer')
export class AuDialogFooter extends ContentComponent<React.FunctionComponent<IDialogFooterProps>, IDialogFooterProps> {
    constructor(element: Element) {
        super(element, DialogFooter.prototype);
    }
}

AuDialogFooter.properties<IDialogFooterProps>({
    styles: {} as any,
    theme: {} as any,
    className: {} as any
});
