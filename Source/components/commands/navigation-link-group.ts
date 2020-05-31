// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject, noView, customElement } from 'aurelia-framework';

import { INavLinkGroup, INavLink } from 'office-ui-fabric-react';

import { childrenOf } from '../../Children';
import { ReactBase } from '../../React/ReactBase';

@autoinject
@noView
@customElement('navigation-link-group')
export class NavigationLinkGroup extends ReactBase<INavLinkGroup> implements INavLinkGroup {
    @childrenOf('navigation-link')
    links: INavLink[] = [];

    constructor(element: Element) {
        super(element);
    }
}

NavigationLinkGroup.properties<INavLinkGroup>({
    name: {} as any,
    links: {} as any,
    expandAriaLabel: {} as any,
    collapseAriaLabel: {} as any,

    onHeaderClick: () => { }
});
