// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement } from 'aurelia-framework';

import { ITagPickerProps, TagPicker, ITag, ValidationState } from 'office-ui-fabric-react';

import { ItemsComponent } from '../../index';

@autoinject
@customElement('tag-picker')
export class AuTagPicker extends ItemsComponent<ITagPickerProps, React.FunctionComponent<ITagPickerProps>> {
    constructor(element: Element) {
        super(element, TagPicker.prototype);
    }
}

AuTagPicker.properties<ITagPickerProps>({
    className: {} as any,
    defaultSelectedItems: {} as any,
    disabled: {} as any,
    enableSelectedSuggestionAlert: {} as any,
    inputProps: {} as any,
    itemLimit: {} as any,
    pickerSuggestionsProps: {} as any,
    pickerCalloutProps: {} as any,
    resolveDelay: {} as any,
    removeButtonAriaLabel: {} as any,
    selectedItems: [],
    styles: {} as any,
    theme: {} as any,

    createGenericItem: () => { return {} as ITag; },
    searchingText: () => '',
    getTextFromItem: () => '',

    onBlur: () => { },
    onDismiss: () => { },
    onChange: () => { },
    onEmptyInputFocus: () => [],
    onEmptyResolveSuggestions: () => [],
    onFocus: () => { },
    onGetMoreResults: () => [],
    onItemSelected: () => { return {} as ITag; },
    onInputChange: () => '',
    onRenderItem: () => { return {} as JSX.Element; },
    onRenderSuggestionsItem: () => { return {} as JSX.Element; },
    onRemoveSuggestion: () => { },
    onResolveSuggestions: () => [],
    onValidateInput: () => { return {} as ValidationState; },
});
