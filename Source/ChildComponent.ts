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
        return React.createElement(
            this.componentType as any,
            this.state,
            React.createElement('span', {
                id: this._reactUniqueIdentifier,
                ref: (parent: HTMLElement | null) => {
                    if (!this.visible) {
                        return;
                    }

                    if (!parent) {
                        parent = document.querySelector(`#${this._reactUniqueIdentifier}`);
                    }

                    if (parent) {
                        DOMUtility.consolidateVisualTrees(parent, this.element, this._reactUniqueIdentifier, this.uniqueIdentifier);
                    }
                }
            })
        );
    }
}
