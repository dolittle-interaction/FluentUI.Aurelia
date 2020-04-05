// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IStackTokens } from 'office-ui-fabric-react';

import { autoinject, customElement } from 'aurelia-framework';

import { ComponentConfiguration } from '../../index';

@autoinject
@customElement('stack-tokens')
export class StackTokens extends ComponentConfiguration<IStackTokens> {
    constructor(element: Element) {
        super(element, StackTokens);
    }
}

StackTokens.properties<IStackTokens>({
    childrenGap: {} as any,
    maxHeight: {} as any,
    maxWidth: {} as any,
    padding: {} as any
});