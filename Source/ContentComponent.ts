// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { inlineView } from 'aurelia-framework';

import { Component } from './Component';

@inlineView('<template><span id.bind="uniqueIdentifier"></span><slot></slot></template>')
export class ContentComponent<TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> extends Component<TComponent, TProps> {
}
