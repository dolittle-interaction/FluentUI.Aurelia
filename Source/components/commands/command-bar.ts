// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { CommandBar, ICommandBarProps } from 'office-ui-fabric-react';
import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IItemHandlingStrategy, ItemsComponent, TargetPropertyItemHandlingStrategy } from '../../index';
import { AuCommandBarItem } from './command-bar-item';

@autoinject
@customElement('command-bar')
export class AuCommandBar extends ItemsComponent<ICommandBarProps, React.FunctionComponent<ICommandBarProps>> {

    constructor(element: Element) {
        super(element, CommandBar.prototype);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new TargetPropertyItemHandlingStrategy(AuCommandBarItem, 'items')];
    }
}

AuCommandBar.properties<ICommandBarProps>({
    items: {} as any,
    farItems: {} as any,
    overflowItems: {} as any,
    overflowButtonProps: {} as any,
    overflowButtonAs: {} as any,
    buttonAs: {} as any,
    shiftOnReduce: {} as any,
    className: {} as any,
    ariaLabel: {} as any,
    styles: {} as any,
    theme: {} as any,

    onReduceData: {} as any,
    onGrowData: {} as any,
    onDataReduced: () => {},
    onDataGrown: () => {},
    dataDidRender: () => {},
});
