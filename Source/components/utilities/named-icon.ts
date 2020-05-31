// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, noView, bindable, child, processContent } from 'aurelia-framework';
import { registerIcons } from 'office-ui-fabric-react/lib/Styling';

const HtmlToReactParser = require('html-to-react').Parser;
const parser = new HtmlToReactParser();

@autoinject
@noView
@processContent(false)
@customElement('named-icon')
export class AuNamedIcon {
    @bindable
    name: string = '';

    private _svg: Element | null;

    constructor(element: Element) {
        this._svg = element.querySelector('svg');
        while (element.children.length !== 0) {
            if (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
    }

    attached() {
        if (!this._svg || !this.name || this.name === '') {
            return;
        }
        const icons: any = {};
        const reactElement = parser.parse(this._svg.outerHTML);
        icons[this.name] = reactElement;
        registerIcons({
            icons: icons
        });
    }
}
