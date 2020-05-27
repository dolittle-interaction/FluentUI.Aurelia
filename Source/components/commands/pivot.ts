// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { IPivotProps, Pivot, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react';
import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ReactComponent } from '../../React/ReactComponent';
import { propertyConverter, KeyValueTypeConverter, childrenOf } from '../../index';
import { AuPivotItem } from './pivot-item';

@autoinject
@customElement('pivot')
export class AuPivot extends ReactComponent<React.FunctionComponent<IPivotProps>, IPivotProps> {

    @bindable
    size: string = 'normal';

    @propertyConverter('size', new KeyValueTypeConverter({
        'normal': PivotLinkSize.normal,
        'large': PivotLinkSize.large
    }))
    get linkSize(): PivotLinkSize { return PivotLinkSize.normal; }

    @bindable
    format: string = 'links';

    @propertyConverter('format', new KeyValueTypeConverter({
        'links': PivotLinkFormat.links,
        'tabs': PivotLinkFormat.tabs
    }))
    get linkFormat(): PivotLinkFormat { return PivotLinkFormat.links; }

    @childrenOf('pivot-item', [])
    pivotItems: AuPivotItem[] = [];

    constructor(element: Element) {
        super(element, Pivot);
    }

    get children() {
        return this.pivotItems;
    }
}

AuPivot.properties<IPivotProps>({
    styles: {} as any,
    theme: {} as any,
    className: {} as any,
    defaultSelectedKey: {} as any,
    defaultSelectedIndex: {} as any,
    selectedKey: {} as any,
    linkSize: {} as any,
    linkFormat: {} as any,
    headersOnly: {} as any,

    onLinkClick: () => {}
});
