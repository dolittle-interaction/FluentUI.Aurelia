// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IButtonProps, CommandBarButton, IContextualMenuProps } from 'office-ui-fabric-react';

import { ContextualMenuItem } from '../commands/contextual-menu-item';

import {
    CallbackItemHandlingStrategy,
    IItemsComponent,
    IItemHandlingStrategy,
    ItemsComponent,
    PropertyConverter,
    UIElement,
    IconTypeConverter
} from '../../index';

import ButtonProps from './ButtonProps';

@autoinject
@customElement('command-bar-button')
export class AuCommandBarButton extends ItemsComponent<CommandBarButton> {
    hidden: boolean = false;

    @bindable
    icon: string = '';

    constructor(element: Element) {
        super(element, CommandBarButton);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new CallbackItemHandlingStrategy(ContextualMenuItem, this.handleContextualMenuItem)];
    }

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('icon', 'iconProps', new IconTypeConverter())];
    }

    private handleContextualMenuItem(target: IItemsComponent, item: UIElement) {
        const buttonProps = this as IButtonProps;
        if (!buttonProps.menuProps) {
            buttonProps.menuProps = {
                items: []
            } as IContextualMenuProps;
        }

        buttonProps.menuProps.items = [...buttonProps.menuProps.items, item.state];
        target.propertyChanged('menuProps', buttonProps.menuProps);
    }
}

AuCommandBarButton.properties<IButtonProps>(ButtonProps);
