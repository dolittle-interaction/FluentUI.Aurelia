// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { IPivotProps, Pivot, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react';
import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ChildComponentItemHandlingStrategy, IItemHandlingStrategy, ItemsComponent, KeyValueTypeConverter, PropertyConverter } from '../../index';
import { AuPivotItem } from './pivot-item';

@autoinject
@customElement('pivot')
export class AuPivot extends ItemsComponent<IPivotProps, React.FunctionComponent<IPivotProps>> {

    @bindable
    size: string = 'normal';

    @bindable
    format: string = 'links';

    constructor(element: Element) {
        super(element, Pivot.prototype);
    }

    getPropertyConverters(): PropertyConverter[] {
        return [
            new PropertyConverter('size', 'linkSize', new KeyValueTypeConverter(PivotLinkSize.normal, {
                'normal': PivotLinkSize.normal,
                'large': PivotLinkSize.large
            })),
            new PropertyConverter('format', 'linkFormat', new KeyValueTypeConverter(PivotLinkFormat.links, {
                'links': PivotLinkFormat.links,
                'tabs': PivotLinkFormat.tabs
            }))
        ];
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new ChildComponentItemHandlingStrategy(AuPivotItem)];
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
