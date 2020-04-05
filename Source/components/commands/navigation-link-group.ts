// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject } from 'aurelia-framework';

import { INavLinkGroup, INavLink } from 'office-ui-fabric-react';

import { IItemHandlingStrategy, TargetPropertyItemHandlingStrategy, ItemsComponent } from '../../index';

import { NavigationLink } from './navigation-link';

@autoinject
export class NavigationLinkGroup extends ItemsComponent<INavLinkGroup> implements INavLinkGroup {
    links: INavLink[] = [];

    constructor(element: Element) {
        super(element);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {

        return [new TargetPropertyItemHandlingStrategy(NavigationLink, 'links')];
    }
}

NavigationLinkGroup.properties<INavLinkGroup>({
    name: {} as any,
    links: {} as any,
    expandAriaLabel: {} as any,
    collapseAriaLabel: {} as any,

    onHeaderClick: () => { }
});
