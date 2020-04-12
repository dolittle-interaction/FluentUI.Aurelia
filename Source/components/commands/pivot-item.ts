// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


import { IPivotItemProps, PivotItem } from 'office-ui-fabric-react';
import { customElement, autoinject } from 'aurelia-framework';

import { ChildComponent } from '../../index';

@autoinject
@customElement('pivot-item')
export class AuPivotItem extends ChildComponent<PivotItem, IPivotItemProps> {

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
