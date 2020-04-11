// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ITypeConverter } from '../../ITypeConverter';

import { RatingSize } from 'office-ui-fabric-react';

export class RatingSizeTypeConverter implements ITypeConverter {
    convert(value: any) {
        let converted = RatingSize.Small;
        switch (value?.toString().toLowerCase()) {
            case 'small': {
                converted = RatingSize.Small;
            } break;

            case 'large': {
                converted = RatingSize.Large;
            } break;
        }

        return converted;
    }
}
