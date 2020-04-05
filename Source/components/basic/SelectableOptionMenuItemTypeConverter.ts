// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ITypeConverter } from '../../ITypeConverter';

import { SelectableOptionMenuItemType } from 'office-ui-fabric-react';

export class SelectableOptionMenuItemTypeConverter implements ITypeConverter {
    convert(value: any) {
        let converted = SelectableOptionMenuItemType.Normal;
        switch (value?.toString().toLowerCase()) {
            case 'divider': {
                converted = SelectableOptionMenuItemType.Divider;
            } break;

            case 'header': {
                converted = SelectableOptionMenuItemType.Header;
            } break;
        }

        return converted;
    }
}
