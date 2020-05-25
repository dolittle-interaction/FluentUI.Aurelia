// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject } from 'aurelia-framework';

import { IContextualMenuProps, IContextualMenuItem, ContextualMenu } from 'office-ui-fabric-react';
import { ReactComponent } from '../../React/ReactComponent';
import { AuContextualMenuItem } from './contextual-menu-item';
import { childrenOf } from '../../ChildrenOf';

@autoinject
@customElement('contextual-menu')
export class AuContextualMenu extends ReactComponent<React.FunctionComponent<IContextualMenuProps>, IContextualMenuProps> implements IContextualMenuProps {
    hidden: boolean = false;

    @childrenOf('contextual-menu-item')
    items: AuContextualMenuItem[] = [];

    constructor(element: Element) {
        super(element, ContextualMenu);
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
