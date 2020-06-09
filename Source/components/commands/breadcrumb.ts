// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { Breadcrumb, IBreadcrumbProps, IBreadcrumbItem } from 'office-ui-fabric-react';
import { customElement, autoinject, bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';

import { ReactComponent } from '../../React/ReactComponent';
import { childrenOf } from '../../Children';

@autoinject
@customElement('breadcrumb')
export class AuBreadcrumb extends ReactComponent<React.FunctionComponent<IBreadcrumbProps>, IBreadcrumbProps> implements IBreadcrumbProps {
    @bindable
    useRoute: boolean = false;

    @childrenOf('bread-crumb-item')
    @bindable
    items: IBreadcrumbItem[] = [];

    constructor(element: Element, private _router: Router) {
        super(element, Breadcrumb);
    }

    attached() {
        super.attached();
    }
}

AuBreadcrumb.properties<IBreadcrumbProps>({
    items: {} as any,
    className: {} as any,
    dividerAs: {} as any,
    onRenderOverflowIcon: {} as any,
    maxDisplayedItems: {} as any,
    onRenderItem: {} as any,
    onReduceData: {} as any,
    ariaLabel: {} as any,
    overflowAriaLabel: {} as any,
    overflowIndex: {} as any,
    styles: {} as any,
    theme: {} as any,
    focusZoneProps: {} as any,
    tooltipHostProps: {} as any
});
