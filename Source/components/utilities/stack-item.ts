// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IStackItemProps, StackItem } from 'office-ui-fabric-react';
import { ReactComponent } from '../../React/ReactComponent';


@autoinject
@customElement('stack-item')
export class AuStackItem extends ReactComponent<React.FunctionComponent<IStackItemProps>, IStackItemProps> implements IStackItemProps {
    @bindable
    className?: string;

    constructor(element: Element) {
        super(element, StackItem);
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
