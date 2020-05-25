// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { customElement, autoinject, child, children } from 'aurelia-framework';

import { ICardProps, Card, CardItem, CardSection } from '@uifabric/react-cards';

import { Component, DOMUtility, uniqueIdentifier } from '../../index';

@autoinject
@customElement('card')
export class AuCard extends Component<React.FunctionComponent<ICardProps>, ICardProps> {
    private _reactUniqueIdentifier: string;

    constructor(element: Element) {
        super(element, Card.prototype);

        this._reactUniqueIdentifier = uniqueIdentifier('react');
    }

    render() {
        const element = DOMUtility.createElementWithContent(this, Card, this.props, this._reactUniqueIdentifier);
        this.actualComponent = ReactDom.render(element as any, this.container) as any;
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
