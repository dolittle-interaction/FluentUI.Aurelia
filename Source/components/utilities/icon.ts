// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement, bindable } from 'aurelia-framework';

import { Icon, IIconProps, IconType } from 'office-ui-fabric-react';

import { PropertyConverter, KeyValueTypeConverter } from '../../index';
import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('icon')
export class AuIcon extends ReactComponent<React.FunctionComponent<IIconProps>, IIconProps> {

    @bindable
    type: string = 'default';

    constructor(element: Element) {
        super(element, Icon);
    }

    getPropertyConverters(): PropertyConverter[] {
        return [
            new PropertyConverter('type', 'iconType', new KeyValueTypeConverter(IconType.default, {
                'default': IconType.default,
                'image': IconType.image
            }))
        ];
    }
}

AuIcon.properties<IIconProps>({
    iconName: {} as any,
    ariaLabel: {} as any,
    iconType: {} as any,
    imageProps: {} as any,
    imageErrorAs: {} as any,
    styles: {} as any,
    theme: {} as any
});
