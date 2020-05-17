// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ICommandBarItemProps } from 'office-ui-fabric-react';

import { autoinject, noView, customElement, bindable } from 'aurelia-framework';

import { IconTypeConverter, ItemsComponent, PropertyConverter } from '../../index';

@autoinject
@noView
@customElement('command-bar-item')
export class AuCommandBarItem extends ItemsComponent<ICommandBarItemProps> implements ICommandBarItemProps {
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

AuCommandBarItem.properties<ICommandBarItemProps>({
    key: {} as any,
    text: {} as any,
    secondaryText: {} as any,
    itemType: {} as any,
    iconProps: {} as any,
    iconOnly: {} as any,
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
    tooltipHostProps: {} as any,
    buttonStyles: {} as any,
    cacheKey: {} as any,
    renderedInOverflow: {} as any,
    commandBarButtonAs: {} as any,

    onClick: () => { },
    onMouseDown: () => { },
});
