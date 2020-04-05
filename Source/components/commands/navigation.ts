// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import { Component } from '../../Component';

import { Nav, INavProps, INavLinkGroup } from 'office-ui-fabric-react';
import { customElement, autoinject } from 'aurelia-framework';

import { IItemHandlingStrategy, TargetPropertyItemHandlingStrategy, ItemsComponent } from '../../index';

import { NavigationLinkGroup } from './navigation-link-group';

@autoinject
@customElement('navigation')
export class AuNavigation extends ItemsComponent<INavProps, React.FunctionComponent<INavProps>> implements INavProps {
    hidden: boolean = false;
    groups: INavLinkGroup[] | null = null;

    constructor(element: Element) {
        super(element, Nav.prototype);
    }

    childStateChanged(): void {
        if (this.groups) {
            this.propertyChanged('groups', [...this.groups]);
        }
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new TargetPropertyItemHandlingStrategy(NavigationLinkGroup, 'groups')];
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
