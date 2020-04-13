// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';
import * as ReactDom from 'react-dom';

import { bindable, customElement, autoinject } from 'aurelia-framework';

import { ISearchBoxProps, SearchBox } from 'office-ui-fabric-react';

import { Component, PropertyConverter, IconTypeConverter } from '../../index';

@autoinject
@customElement('search-box')
export class AuSearchBox extends Component<React.FunctionComponent<ISearchBoxProps>, ISearchBoxProps> {
    @bindable
    icon: string = '';

    constructor(element: Element) {
        super(element, SearchBox.prototype);
    }

    createElement() {
        return React.createElement(SearchBox, this.state);
    }

    render() {
        this.actualComponent = ReactDom.render(this.actualElement as any, this.container) as any;
    }

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('icon', 'iconProps', new IconTypeConverter())];
    }
}

AuSearchBox.properties<ISearchBoxProps>({
    placeholder: {} as any,
    value: {} as any,
    className: {} as any,
    ariaLabel: {} as any,
    clearButtonProps: {} as any,
    iconProps: {} as any,
    underlined: {} as any,
    theme: {} as any,
    styles: {} as any,
    disableAnimation: {} as any,

    onChange: () => {},
    onSearch: () => {},
    onClear: () => {},
    onEscape: () => {}
});
