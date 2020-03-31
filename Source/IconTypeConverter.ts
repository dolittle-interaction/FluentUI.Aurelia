// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ITypeConverter } from './ITypeConverter';

import { IIconProps } from 'office-ui-fabric-react';

export class IconTypeConverter implements ITypeConverter {
    convert(value: any): any {
        const iconProperties: IIconProps = {
            iconName: value
        };
        return iconProperties;
    }
}
