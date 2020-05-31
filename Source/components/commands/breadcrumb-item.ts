// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IBreadcrumbItem } from 'office-ui-fabric-react';
import { ReactBase } from '../../React/ReactBase';
import { noView, customElement, bindable } from 'aurelia-framework';

@noView
@customElement('breadcrumb-item')
export class AuBreadcrumbItem extends ReactBase<IBreadcrumbItem> implements IBreadcrumbItem {
    @bindable
    text: string = '';

    @bindable
    key: string = '';

    constructor(element: Element) {
        super(element);
    }
}

AuBreadcrumbItem.properties<IBreadcrumbItem>({
    text: {} as any,
    key: {} as any,
    href: {} as any,
    isCurrentItem: {} as any,
    as: {} as any,

    onClick: () => { }
});
