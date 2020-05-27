// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { Nav, INavProps, INavLinkGroup } from 'office-ui-fabric-react';
import { customElement, autoinject } from 'aurelia-framework';

import { childrenOf } from '../../Children';
import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('navigation')
export class AuNavigation extends ReactComponent<React.FunctionComponent<INavProps>, INavProps> implements INavProps {
    hidden: boolean = false;

    @childrenOf('navigation-link-group')
    groups: INavLinkGroup[] = [];

    constructor(element: Element) {
        super(element, Nav);
    }
}

AuNavigation.properties<INavProps>({
    groups: {} as any,
    ariaLabel: {} as any,
    isOnTop: {} as any,
    initialSelectedKey: {} as any,
    selectedKey: {} as any,
    expandButtonAriaLabel: {} as any,
    selectedAriaLabel: {} as any,

    onLinkClick: () => { },
    onLinkExpandClick: () => { }
});
