// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { bindable, customElement, autoinject } from 'aurelia-framework';

import { ISearchBoxProps, SearchBox, IIconProps } from 'office-ui-fabric-react';

import { propertyConverter, IconTypeConverter } from '../../index';
import { ReactComponent } from '../../React/ReactComponent';
import { ReactWrapperComponentWithoutChildren } from '../../React/ReactWrapperComponentWithoutChildren';

@autoinject
@customElement('search-box')
export class AuSearchBox extends ReactComponent<React.FunctionComponent<ISearchBoxProps>, ISearchBoxProps> implements ISearchBoxProps {
    @bindable
    value?: string;

    @bindable
    icon: string = '';

    @propertyConverter('icon', new IconTypeConverter())
    get iconProps(): IIconProps { return {}; }

    constructor(element: Element) {
        super(element, SearchBox, ReactWrapperComponentWithoutChildren);
    }

    change(event?: React.ChangeEvent<HTMLInputElement>, newValue?: string) {
        this.value = newValue;
        this.handleRendering();
    }
}

AuSearchBox.properties<ISearchBoxProps>({
    placeholder: {} as any,
    value: {} as any,
    className: {} as any,
    ariaLabel: {} as any,
    clearButtonProps: {} as any,
    iconProps: {} as any,
    underlined: {} as any,
    theme: {} as any,
    styles: {} as any,
    disableAnimation: {} as any,

    onChange: () => { },
    onSearch: () => { },
    onClear: () => { },
    onEscape: () => { }
});
