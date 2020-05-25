// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


import { IPivotItemProps, PivotItem } from 'office-ui-fabric-react';
import { customElement, autoinject, containerless } from 'aurelia-framework';

import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@containerless
@customElement('pivot-item')
export class AuPivotItem extends ReactComponent<PivotItem, IPivotItemProps> {

    constructor(element: Element) {
        super(element, PivotItem);
    }
}

AuPivotItem.properties<IPivotItemProps>({
    linkText: {} as any,
    headerText: {} as any,
    headerButtonProps: {} as any,
    itemKey: {} as any,
    ariaLabel: {} as any,
    itemCount: {} as any,
    itemIcon: {} as any,
    keytipProps: {} as any
});
