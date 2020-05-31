// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject, child, children } from 'aurelia-framework';

import { ICardProps, Card, CardItem, CardSection } from '@uifabric/react-cards';

import { ReactComponent } from '../../React/ReactComponent';

@autoinject
@customElement('card')
export class AuCard extends ReactComponent<React.FunctionComponent<ICardProps>, ICardProps> {
    constructor(element: Element) {
        super(element, Card);
    }
}

AuCard.properties<ICardProps>({
    className: {} as any,
    styles: {} as any,
    theme: {} as any,
    horizontal: {} as any,
    tokens: {} as any,

    onClick: () => { },
    onKeyDown: () => { }
});
