// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement, bindable } from 'aurelia-framework';

import { FontIcon, IFontIconProps } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('font-icon')
export class AuFontIcon extends ReactComponent<React.FunctionComponent<IFontIconProps>, IFontIconProps> {

    constructor(element: Element) {
        super(element, FontIcon);
    }
}

AuFontIcon.properties<IFontIconProps>({
    iconName: {} as any,
    className: {} as any
});
