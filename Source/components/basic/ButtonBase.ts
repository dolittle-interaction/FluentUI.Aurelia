// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable } from 'aurelia-framework';

import { ContentComponent } from '../../ContentComponent';

import { IButtonProps } from 'office-ui-fabric-react';

import { PropertyConverter } from '../../PropertyConverter';
import { IconTypeConverter } from '../../IconTypeConverter';

export class ButtonBase<TComponent extends React.Component<IButtonProps, any>> extends ContentComponent<TComponent, IButtonProps> implements IButtonProps {
    hidden: boolean = false;

    @bindable
    icon: string = '';

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('icon', 'iconProps', new IconTypeConverter())];
    }
}
