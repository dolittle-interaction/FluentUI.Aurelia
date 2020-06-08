// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Component } from '../Component';
import { ComponentProperties } from './ComponentProperties';
import { uniqueIdentifier } from '../uniqueIdentifier';
import { inlineView } from 'aurelia-framework';

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export class ReactBase<TProps = {}> extends Component {
    static properties<TProps>(properties: TProps) {
        ComponentProperties.configureFor(this, properties);
    }

    reactUniqueIdentifier: string;
    props: any = {};

    constructor(element: Element) {
        super(element);
        this.reactUniqueIdentifier = uniqueIdentifier('react');
    }

    handleProperties() {
        ComponentProperties.setFor(this, this.props);
        this.handleVisibilityProperty();
    }

    getChildRepresentation() {
        this.handleProperties();
        return this.props;
    }

    render() {
    }

    protected handleVisibilityProperty() {
        if (this.props.hasOwnProperty('visible')) {
            delete this.props.visible;
        }
        this.props.hidden = !this.visible;
    }
}
