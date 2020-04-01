// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject } from 'aurelia-framework';
import { ReactChildItem } from '../../ReactChildItem';
import { INavLink } from 'office-ui-fabric-react';
import { IItemHandlingStrategy } from '../../IItemHandlingStrategy';
import { TargetPropertyItemHandlingStrategy } from '../../TargetPropertyItemHandlingStrategy';
import { IComponent } from '../../IComponent';

@autoinject
export class NavigationLink extends ReactChildItem<INavLink> implements INavLink {
    url: string = '';
    name: string = '';
    links: INavLink[] = [];

    constructor(private _thisElement: Element) {
        super(_thisElement);
    }

    propertyChanged(property: string, newValue: any): void {
        super.propertyChanged(property, newValue);

        let parentElement = this._thisElement.parentElement;
        while (parentElement && parentElement.tagName.toLowerCase() !== 'navigation') {
            parentElement = parentElement.parentElement;
        }

        const parentViewModel = (parentElement as any)?.au?.controller?.viewModel as IComponent;
        if (parentViewModel) {
            parentViewModel.propertyChanged('groups', [...(parentViewModel as any).groups]);
        }
    }


    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new TargetPropertyItemHandlingStrategy(NavigationLink, 'links')];
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
