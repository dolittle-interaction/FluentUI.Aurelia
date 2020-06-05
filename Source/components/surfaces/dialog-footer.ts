// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { DialogFooter, IDialogFooterProps, IDialogFooter } from 'office-ui-fabric-react';
import { customElement, autoinject } from 'aurelia-framework';
import { ReactChildComponent } from '../../React/ReactChildComponent';
import { ReactComponent } from '../../React/ReactComponent';
import { ReactBase } from '../../React/ReactBase';

@autoinject
@customElement('dialog-footer')
export class AuDialogFooter extends ReactChildComponent<React.FunctionComponent<IDialogFooterProps>, IDialogFooterProps> {
    constructor(element: Element) {
        super(element, DialogFooter);
    }

    get children() {
        const children = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.element.children.length; i++) {
            const child = this.element.children[i] as any;
            const viewModel = child.au?.controller?.viewModel;
            if (viewModel && viewModel instanceof ReactBase) {
                children.push(viewModel);
            }
        }

        return children;
    }
}

AuDialogFooter.properties<IDialogFooterProps>({
    styles: {} as any,
    theme: {} as any,
    className: {} as any
});
