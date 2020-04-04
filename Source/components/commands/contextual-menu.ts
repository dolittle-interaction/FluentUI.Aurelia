// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject } from 'aurelia-framework';
import { Component } from '../../Component';

import { IContextualMenuProps, IContextualMenuItem, ContextualMenu } from 'office-ui-fabric-react';
import { TargetPropertyItemHandlingStrategy } from '../../TargetPropertyItemHandlingStrategy';
import { IItemHandlingStrategy } from '../../IItemHandlingStrategy';

import { ContextualMenuItem } from './contextual-menu-item';

@autoinject
@customElement('contextual-menu')
export class AuContextualMenu extends Component<React.FunctionComponent<IContextualMenuProps>, IContextualMenuProps> implements IContextualMenuProps {
    hidden: boolean = false;
    items: IContextualMenuItem[] = [];

    constructor(element: Element) {
        super(element, ContextualMenu.prototype);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new TargetPropertyItemHandlingStrategy(ContextualMenuItem, 'items')];
    }
}

AuContextualMenu.properties<IContextualMenuProps>({
    beakWidth: {} as any,
    bounds: {} as any,
    calloutProps: {} as any,
    className: {} as any,
    coverTarget: {} as any,
    gapSpace: {} as any,
    hidden: {} as any,
    isBeakVisible: {} as any,
    isSubMenu: {} as any,
    items: {} as any,

    onDismiss: () => { },
    onItemClick: () => { },
    onMenuDismissed: () => { },
    onMenuOpened: () => { },

    alignTargetEdge: {} as any,
    ariaLabel: {} as any,
    delayUpdateFocusOnHover: {} as any,
    directionalHint: {} as any,
    directionalHintFixed: {} as any,
    directionalHintForRTL: {} as any,
    doNotLayer: {} as any,
    focusZoneProps: {} as any,
    labelElementId: {} as any,
    shouldFocusOnContainer: {} as any,
    shouldFocusOnMount: {} as any,
    subMenuHoverDelay: {} as any,
    target: {} as any,
    useTargetAsMinWidth: {} as any,
    useTargetWidth: {} as any
});
