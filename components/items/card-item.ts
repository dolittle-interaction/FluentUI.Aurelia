// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { ICardItemProps, CardItem } from '@uifabric/react-cards';

import { autoinject, customElement } from 'aurelia-framework';

import { ContentComponent } from '../../index';

@autoinject
@customElement('card-item')
export class AuCardItem extends ContentComponent<React.FunctionComponent<ICardItemProps>, ICardItemProps> {
    constructor(element: Element) {
        super(element, CardItem.prototype);
    }
}

AuCardItem.properties<ICardItemProps>({
    fill: {} as any
});
