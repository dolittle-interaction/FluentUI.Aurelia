// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { inlineView } from 'aurelia-framework';

import { Component } from './Component';
import { ReactContentComponent } from './React/ReactContentComponent';
import { Constructor } from './Constructor';

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export class ContentComponent<TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> extends Component<TComponent, TProps> {
    constructor(element: Element, type: Constructor<TComponent>) {
        super(element, type, ReactContentComponent);
    }

    render() {
        if (this.actualElement) {
            this.actualComponent = ReactDom.render(this.actualElement as any, this.container) as any;
        }
    }
}
