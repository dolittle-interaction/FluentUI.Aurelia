// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement, bindable } from 'aurelia-framework';

import { FontIcon, IFontIconProps } from 'office-ui-fabric-react';

import { ContentComponent } from '../../index';

@autoinject
@customElement('font-icon')
export class AuFontIcon extends ContentComponent<React.FunctionComponent<IFontIconProps>, IFontIconProps> {

    constructor(element: Element) {
        super(element, FontIcon.prototype);
    }
}

AuFontIcon.properties<IFontIconProps>({
    iconName: {} as any,
    className: {} as any
});
