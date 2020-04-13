// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { noView } from 'aurelia-framework';

import { Component } from './Component';
import { Constructor } from './Constructor';

import { uniqueIdentifier } from './uniqueIdentifier';
import { DOMUtility } from './DOMUtility';

@noView
export class ChildComponent<TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> extends Component<TComponent, TProps> {
    private _reactUniqueIdentifier: string;

    constructor(element: Element, type: Constructor<TComponent>) {
        super(element, type);

        this._reactUniqueIdentifier = uniqueIdentifier('react');
    }

    createElement() {
        return DOMUtility.createElementWithContent(this, this.componentType, this.state, this._reactUniqueIdentifier);
    }
}
