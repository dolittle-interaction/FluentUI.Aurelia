// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { ILinkProps, Link } from 'office-ui-fabric-react';

import { ContentComponent } from '../../index';

@autoinject
@customElement('link')
export class AuLink extends ContentComponent<React.FunctionComponent<ILinkProps>, ILinkProps> {
    constructor(element: Element) {
        super(element, Link.prototype);
    }
}

AuLink.properties<ILinkProps>({
    type: {} as any,
    download: {} as any,
    href: {} as any,
    hrefLang: {} as any,
    media: {} as any,
    rel: {} as any,
    target: {} as any,
    autoFocus: {} as any,
    disabled: {} as any,
    form: {} as any,
    formAction: {} as any,
    formEncType: {} as any,
    formMethod: {} as any,
    formNoValidate: {} as any,
    formTarget: {} as any,
    name: {} as any,
    value: {} as any
});
