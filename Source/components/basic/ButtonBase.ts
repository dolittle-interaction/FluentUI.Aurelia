// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable } from 'aurelia-framework';

import { IButtonProps, IContextualMenuProps } from 'office-ui-fabric-react';

import {
    CallbackItemHandlingStrategy,
    IItemsComponent,
    IItemHandlingStrategy,
    ItemsComponent,
    PropertyConverter,
    UIElement,
    IconTypeConverter
} from '../../index';

import { ContextualMenuItem } from '../commands/contextual-menu-item';

export class ButtonBase<TComponent extends React.Component<IButtonProps, any>> extends ItemsComponent<IButtonProps, TComponent> {
    @bindable
    icon: string = '';

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
