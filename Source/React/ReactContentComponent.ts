// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

export class ReactContentComponent extends React.Component {
    private _type: any;

    constructor(properties: any) {
        super(properties);

        this._type = properties._componentType;
        this.state = {...properties};
    }

    render() {
        return React.createElement(
            this._type,
            this.state
        );
    }
}
