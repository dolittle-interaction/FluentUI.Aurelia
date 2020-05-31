// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { CommandBar, ICommandBarProps, ICommandBarItemProps } from 'office-ui-fabric-react';
import { customElement, autoinject, bindable } from 'aurelia-framework';

import { ReactComponent } from '../../React/ReactComponent';
import { childrenOf } from '../../Children';

@autoinject
@customElement('command-bar')
export class AuCommandBar extends ReactComponent<React.FunctionComponent<ICommandBarProps>, ICommandBarProps> implements ICommandBarProps{

    @childrenOf('command-bar-item')
    items: ICommandBarItemProps[] = [];

    constructor(element: Element) {
        super(element, CommandBar);
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
