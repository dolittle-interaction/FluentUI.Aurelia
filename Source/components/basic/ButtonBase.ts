// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable, children } from 'aurelia-framework';

import { IButtonProps, IContextualMenuProps, IButton } from 'office-ui-fabric-react';

import {
    PropertyConverter,
    IconTypeConverter,
    childrenOf
} from '../../index';

import { ReactComponent } from '../../React/ReactComponent';

export class ButtonBase<TComponent extends React.Component<IButtonProps, any>> extends ReactComponent<TComponent, IButtonProps> implements IButtonProps {
    @bindable
    icon: string = '';

    @childrenOf('contextual-menu-item', { items: [] }, 'items')
    menuProps: IContextualMenuProps | undefined;

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('icon', 'iconProps', new IconTypeConverter())];
    }
}
