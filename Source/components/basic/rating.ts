// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject } from 'aurelia-framework';

import { IRatingProps, Rating } from 'office-ui-fabric-react';

import { ContentComponent } from '../../index';

import { PropertyConverter } from '../../PropertyConverter';
import { RatingSizeTypeConverter } from './RatingSizeTypeConverter';

@autoinject
@customElement('rating')
export class AuRating extends ContentComponent<React.FunctionComponent<IRatingProps>, IRatingProps> {
    constructor(element: Element) {
        super(element, Rating.prototype);
    }

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('size', 'size', new RatingSizeTypeConverter())];
    }
}

AuRating.properties<IRatingProps>({
    rating: {} as any,
    min: {} as any,
    max: {} as any,
    allowZeroStars: {} as any,
    icon: {} as any,
    unselectedIcon: {} as any,
    size: {} as any,
    ariaLabelFormat: {} as any,
    ariaLabelId: {} as any,
    readOnly: {} as any,
    styles: {} as any,
    theme: {} as any,

    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {}
});
