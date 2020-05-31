// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IContextualMenuItem, IIconProps } from 'office-ui-fabric-react';
import { autoinject, noView, customElement, bindable } from 'aurelia-framework';

import { IconTypeConverter, propertyConverter } from '../../index';
import { ReactBase } from '../../React/ReactBase';

@autoinject
@noView
@customElement('contextual-menu-item')
export class AuContextualMenuItem extends ReactBase<IContextualMenuItem> implements IContextualMenuItem {
    key: string = '';

    @bindable
    icon: string = '';

    @propertyConverter('icon', new IconTypeConverter())
    get iconProps(): IIconProps { return {}; }

    constructor(element: Element) {
        super(element);
    }
}

AuContextualMenuItem.properties<IContextualMenuItem>({
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
