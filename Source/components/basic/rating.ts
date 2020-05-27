// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IRatingProps, Rating, RatingSize } from 'office-ui-fabric-react';

import { propertyConverter } from '../../PropertyConverter';
import { ReactComponent } from '../../React/ReactComponent';
import { KeyValueTypeConverter } from '../../KeyValueTypeConverter';

@autoinject
@customElement('rating')
export class AuRating extends ReactComponent<React.FunctionComponent<IRatingProps>, IRatingProps> implements IRatingProps {
    @bindable
    rating?: number;

    constructor(element: Element) {
        super(element, Rating);
    }

    @bindable
    ratingSize: string = 'small';

    @propertyConverter('raging-size', new KeyValueTypeConverter({
            'small': RatingSize.Small,
            'large': RatingSize.Large
        }))
    get size(): RatingSize { return RatingSize.Small; }

    change(event: React.FocusEvent<HTMLElement>, rating?: number) {
        this.rating = rating || 0;
        this.handleRendering();
    }
}

AuRating.properties<IRatingProps>({
    rating: {} as any,
    min: {} as any,
    max: {} as any,
    allowZeroStars: {} as any,
    icon: {} as any,
    unselectedIcon: {} as any,
    size: {} as any,
    ariaLabelFormat: {} as any,
    ariaLabelId: {} as any,
    readOnly: {} as any,
    styles: {} as any,
    theme: {} as any,

    onChange: () => { },
    onFocus: () => { },
    onBlur: () => { }
});
