// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { Breadcrumb, IBreadcrumbProps } from 'office-ui-fabric-react';
import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ItemsComponent } from '../../index';
import { Router } from 'aurelia-router';

@autoinject
@customElement('breadcrumb')
export class AuBreadcrumb extends ItemsComponent<IBreadcrumbProps, React.FunctionComponent<IBreadcrumbProps>> {
    @bindable
    useRoute: boolean = false;

    constructor(element: Element, private _router: Router) {
        super(element, Breadcrumb.prototype);
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
