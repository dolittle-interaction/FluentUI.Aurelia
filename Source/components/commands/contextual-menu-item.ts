// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IContextualMenuItem } from 'office-ui-fabric-react';

import { ReactChildItem } from '../../ReactChildItem';

import { autoinject, noView, customElement, bindable } from 'aurelia-framework';

import { PropertyConverter } from '../../PropertyConverter';
import { IconTypeConverter } from '../../IconTypeConverter';

@autoinject
@noView
@customElement('contextual-menu-item')
export class ContextualMenuItem extends ReactChildItem<IContextualMenuItem> implements IContextualMenuItem {
    key: string = '';

    @bindable
    icon: string = '';

    constructor(element: Element) {
        super(element);
    }

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('icon', 'iconProps', new IconTypeConverter())];
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
