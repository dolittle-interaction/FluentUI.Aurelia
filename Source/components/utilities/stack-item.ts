// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject, containerless } from 'aurelia-framework';

import { IStackItemProps, Stack } from 'office-ui-fabric-react';

import { ContentComponent } from '../../index';

@autoinject
@customElement('stack-item')
export class AuStackItem extends ContentComponent<React.FunctionComponent<IStackItemProps>, IStackItemProps> {

    constructor(element: Element) {
        super(element, Stack.prototype);
    }
}

AuStackItem.properties<IStackItemProps>({
    className: {} as any,
    grow: {} as any,
    shrink: {} as any,
    disableShrink: {} as any,
    align: {} as any,
    verticalFill: {} as any,
    order: {} as any
});
