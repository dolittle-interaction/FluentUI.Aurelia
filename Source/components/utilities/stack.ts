// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject } from 'aurelia-framework';

import { IStackProps, Stack, IStackTokens, IStackItemProps } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';
import { childOf, childrenOf } from 'Children';


@autoinject
@customElement('stack')
export class AuStack extends ReactComponent<React.FunctionComponent<IStackProps>, IStackProps> {

    @childOf('stack-tokens')
    tokens?: IStackTokens;

    @childrenOf('stack-item')
    items?: IStackItemProps[];

    constructor(element: Element) {
        super(element, Stack);
    }
}

AuStack.properties<IStackProps>({
    horizontal: {} as any,
    reversed: {} as any,
    horizontalAlign: {} as any,
    verticalAlign: {} as any,
    verticalFill: {} as any,
    disableShrink: {} as any,
    grow: {} as any,
    gap: {} as any,
    maxWidth: {} as any,
    maxHeight: {} as any,
    padding: {} as any,
    wrap: {} as any,

    tokens: {} as any
});
