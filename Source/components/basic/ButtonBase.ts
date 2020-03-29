// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ReactComponent } from '../../ReactComponent';
import { IButtonProps, IIconProps } from 'office-ui-fabric-react';
import { bindable } from 'aurelia-framework';

export class ButtonBase<TComponent extends React.Component<IButtonProps, any>> extends ReactComponent<TComponent, IButtonProps> implements IButtonProps {
    hidden: boolean = false;

    @bindable
    icon: string = '';

    iconChanged(newValue: string) {
        const iconProperties: IIconProps = {
            iconName: newValue
        };
        this.propertyChanged('iconProps', iconProperties);
}
}
