// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement, bindable } from 'aurelia-framework';

import { Icon, IIconProps, IconType } from 'office-ui-fabric-react';

import { ContentComponent, PropertyConverter, KeyValueTypeConverter } from '../../index';

@autoinject
@customElement('icon')
export class AuIcon extends ContentComponent<React.FunctionComponent<IIconProps>, IIconProps> {

    @bindable
    type: string = 'default';

    constructor(element: Element) {
        super(element, Icon.prototype);
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
