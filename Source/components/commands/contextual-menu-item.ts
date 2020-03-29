// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IContextualMenuItem } from 'office-ui-fabric-react';

import { ReactItem } from '../../ReactItem';
import { autoinject, noView, customElement } from 'aurelia-framework';

@autoinject
@noView
@customElement('contextual-menu-item')
export class ContextualMenuItem extends ReactItem<IContextualMenuItem> {
    constructor(element: Element) {
        super(element);
    }
}

ContextualMenuItem.properties<IContextualMenuItem>({
    key: {} as any,
    text: {} as any,
    secondaryText: {} as any,
    itemType: {} as any,
    iconProps: {} as any,
    submenuIconProps: {} as any,
    disabled: {} as any,
    primaryDisabled: {} as any,
    shortCut: {} as any,
    canCheck: {} as any,
    checked: {} as any,
    split: {} as any,
    data: {} as any,
    href: {} as any,
    target: {} as any,
    rel: {} as any,
    subMenuProps: {} as any,
    itemProps: {} as any,
    sectionProps: {} as any,
    className: {} as any,
    style: {} as any,
    ariaLabel: {} as any,
    title: {} as any,
    role: {} as any,
    customOnRenderListLength: {} as any,
    keytipProps: {} as any,
    inactive: {} as any,
    name: {} as any,

    onClick: () => { },
    onMouseDown: () => { },
});
