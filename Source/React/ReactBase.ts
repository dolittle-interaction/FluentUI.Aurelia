// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Component } from '../Component';
import { ComponentProperties } from './ComponentProperties';

export class ReactBase<TProps> extends Component {
    static properties<TProps>(properties: TProps) {
        ComponentProperties.configureFor(this, properties);
    }

    props: any = {};

    constructor(element: Element) {
        super(element);
    }

    render() {
        ComponentProperties.setFor(this, this.props);
        this.handleVisibilityProperty();
    }

    protected handleVisibilityProperty() {
        if (this.props.hasOwnProperty('visible')) {
            delete this.props.visible;
        }
        this.props.hidden = !this.visible;
    }
}
