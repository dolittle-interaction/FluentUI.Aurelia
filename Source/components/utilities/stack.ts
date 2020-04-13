// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { customElement, autoinject } from 'aurelia-framework';

import { IStackProps, Stack } from 'office-ui-fabric-react';

import { ChildComponentItemHandlingStrategy, IItemHandlingStrategy, Component, IConfigurationHandlingStrategy, TargetPropertyConfigurationHandlingStrategy } from '../../index';

import { StackTokens } from './stack-tokens';
import { AuStackItem } from './stack-item';

import { uniqueIdentifier } from '../../uniqueIdentifier';
import { DOMUtility } from '../../DOMUtility';

@autoinject
@customElement('stack')
export class AuStack extends Component<React.FunctionComponent<IStackProps>, IStackProps> {
    private _reactUniqueIdentifier: string;

    constructor(element: Element) {
        super(element, Stack.prototype);

        this._reactUniqueIdentifier = uniqueIdentifier('react');
    }

    createElement() {
        return DOMUtility.createElementWithChildren(this, Stack, this.state);
    }

    render() {
        const component = ReactDom.render(this.actualElement as any, this.container);
        this.actualComponent = component as any;
    }

    getConfigurationHandlingStrategies(): IConfigurationHandlingStrategy[] {
        return [new TargetPropertyConfigurationHandlingStrategy(StackTokens, 'tokens')];
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new ChildComponentItemHandlingStrategy(AuStackItem)];
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
