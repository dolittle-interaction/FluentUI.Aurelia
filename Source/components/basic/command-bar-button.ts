// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, inject } from 'aurelia-framework';
import { ReactComponent } from '../../ReactComponent';

import { IButtonProps, CommandBarButton, IContextualMenuProps } from 'office-ui-fabric-react';

import { iconProperty } from '../../iconProperty';
import { childCollection } from '../../childCollection';
import ButtonProps from './ButtonProps';

import { ItemSelector } from '../../ItemSelector';
import { ContextualMenuItem } from '../commands/contextual-menu-item';


@inject(Element)
@iconProperty()
@customElement('command-bar-button')
export class AuCommandBarButton extends ReactComponent<CommandBarButton, IButtonProps> implements IButtonProps {
    hidden: boolean = false;

    constructor(element: Element) {
        super(element, CommandBarButton);
    }

    getItemSelectors(): ItemSelector[] {
        return[{
            targetProperty: 'items',
            type: ContextualMenuItem
        }];
    }
}

AuCommandBarButton.properties<IButtonProps>(ButtonProps);
