// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { IButtonProps, CommandBarButton, IContextualMenuProps } from 'office-ui-fabric-react';

import { ContextualMenuItem } from '../commands/contextual-menu-item';

import { CallbackItemHandlingStrategy, IItemsComponent, IItemHandlingStrategy, UIElement } from '../../index';

import { ButtonBase } from './ButtonBase';
import ButtonProps from './ButtonProps';

@autoinject
@customElement('command-bar-button')
export class AuCommandBarButton extends ButtonBase<CommandBarButton> {
    hidden: boolean = false;

    constructor(element: Element) {
        super(element, CommandBarButton);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new CallbackItemHandlingStrategy(ContextualMenuItem, this.handleContextualMenuItem)];
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
