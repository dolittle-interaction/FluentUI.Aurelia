// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, inject } from 'aurelia-framework';
import { ReactComponent } from '../../ReactComponent';

import { IButtonProps, CommandBarButton, IContextualMenuProps } from 'office-ui-fabric-react';

import { iconProperty } from '../../iconProperty';
import ButtonProps from './ButtonProps';

import { ContextualMenuItem } from '../commands/contextual-menu-item';
import { CallbackItemHandlingStrategy } from '../../CallbackItemHandlingStrategy';
import { IItemHandlingStrategy } from '../../IItemHandlingStrategy';
import { IComponent } from '../../IComponent';


@inject(Element)
@iconProperty()
@customElement('command-bar-button')
export class AuCommandBarButton extends ReactComponent<CommandBarButton, IButtonProps> implements IButtonProps {
    hidden: boolean = false;

    constructor(element: Element) {
        super(element, CommandBarButton);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new CallbackItemHandlingStrategy(ContextualMenuItem, this.handleContextualMenuItem)];
    }

    private handleContextualMenuItem(target: IComponent, item: any) {
        const buttonProps = this as IButtonProps;
        if (!buttonProps.menuProps) {
            buttonProps.menuProps = {
                items: []
            } as IContextualMenuProps;
        }

        buttonProps.menuProps.items.push(item);
        target.propertyChanged('menuProps', buttonProps.menuProps);
    }
}

AuCommandBarButton.properties<IButtonProps>(ButtonProps);
