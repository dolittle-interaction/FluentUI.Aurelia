// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject, customElement, noView, bindable } from 'aurelia-framework';
import { INavLink } from 'office-ui-fabric-react';
import { childrenOf } from '../../ChildrenOf';
import { ReactBase } from '../../React/ReactBase';

@autoinject
@noView
@customElement('navigation-link')
export class NavigationLink extends ReactBase<INavLink> implements INavLink {
    @bindable
    url: string = '';

    @bindable
    name: string = '';

    @childrenOf('navigation-link')
    links: NavigationLink[] = [];

    constructor(element: Element) {
        super(element);
    }
}

NavigationLink.properties<INavLink>({
    url: {} as any,
    name: {} as any,
    key: {} as any,
    links: {} as any,
    expandAriaLabel: {} as any,
    collapseAriaLabel: {} as any,
    icon: {} as any,
    iconClassName: {} as any,
    iconProps: {} as any,
    isExpanded: {} as any,
    ariaCurrent: {} as any,
    ariaLabel: {} as any,
    title: {} as any,
    target: {} as any,
    disabled: {} as any,
    forceAnchor: {} as any,

    onClick: () => { }
});
