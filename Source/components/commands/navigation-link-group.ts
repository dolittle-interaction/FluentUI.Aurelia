// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject } from 'aurelia-framework';

import { ReactChildItem } from '../../ReactChildItem';
import { INavLinkGroup, INavLink } from 'office-ui-fabric-react';
import { IItemHandlingStrategy } from '../../IItemHandlingStrategy';
import { TargetPropertyItemHandlingStrategy } from '../../TargetPropertyItemHandlingStrategy';
import { NavigationLink } from './navigation-link';

@autoinject
export class NavigationLinkGroup extends ReactChildItem<INavLinkGroup> implements INavLinkGroup {
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
