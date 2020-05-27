// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ICardItemProps, CardItem } from '@uifabric/react-cards';

import { autoinject, customElement } from 'aurelia-framework';

import { ReactBase } from '../../React/ReactBase';

@autoinject
@customElement('card-item')
export class AuCardItem extends ReactBase<ICardItemProps> {
    constructor(element: Element) {
        super(element);
    }
}

AuCardItem.properties<ICardItemProps>({
    fill: {} as any
});
