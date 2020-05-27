// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable, autoinject, computedFrom } from 'aurelia-framework';

import { IButtonProps, IContextualMenuProps, IButton, IIconProps } from 'office-ui-fabric-react';

import {
    propertyConverter,
    IconTypeConverter,
    childrenOf
} from '../../index';

import { ReactComponent } from '../../React/ReactComponent';

@autoinject
export class ButtonBase<TComponent extends React.Component<IButtonProps, any>> extends ReactComponent<TComponent, IButtonProps> implements IButtonProps {
    @bindable
    icon: string = '';

    @propertyConverter('icon', new IconTypeConverter())
    get iconProps(): IIconProps { return {}; }

    @childrenOf('contextual-menu-item', { items: [] }, 'items')
    menuProps: IContextualMenuProps | undefined;
}
