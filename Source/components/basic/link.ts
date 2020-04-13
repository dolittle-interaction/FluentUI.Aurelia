// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { customElement, autoinject } from 'aurelia-framework';

import { ILinkProps, Link } from 'office-ui-fabric-react';

import { Component, uniqueIdentifier, DOMUtility } from '../../index';

@autoinject
@customElement('flink')
export class AuLink extends Component<React.FunctionComponent<ILinkProps>, ILinkProps> {
    private _reactUniqueIdentifier: string;

    constructor(element: Element) {
        super(element, Link.prototype);

        this._reactUniqueIdentifier = uniqueIdentifier('react');
    }

    createElement() {
        delete this.state._componentType;
        delete this.state._uiElement;
        return DOMUtility.createElementWithContent(this, Link, this.state, this._reactUniqueIdentifier);
    }

    render() {
        this.actualComponent = ReactDom.render(this.actualElement as any, this.container) as any;
    }
}

AuLink.properties<ILinkProps>({
    type: {} as any,
    download: {} as any,
    href: {} as any,
    hrefLang: {} as any,
    media: {} as any,
    rel: {} as any,
    target: {} as any,
    autoFocus: {} as any,
    disabled: {} as any,
    form: {} as any,
    formAction: {} as any,
    formEncType: {} as any,
    formMethod: {} as any,
    formNoValidate: {} as any,
    formTarget: {} as any,
    name: {} as any,
    value: {} as any
});

