// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { customElement, autoinject } from 'aurelia-framework';

import { IStackProps, Stack } from 'office-ui-fabric-react';

import { StackTokens } from './stack-tokens';
import { AuStackItem } from './stack-item';


@autoinject
@customElement('stack')
export class AuStack extends ReactComponent<React.FunctionComponent<IStackProps>, IStackProps> {
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
