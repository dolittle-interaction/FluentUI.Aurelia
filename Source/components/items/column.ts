// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IColumn } from 'office-ui-fabric-react';

import { autoinject, customElement } from 'aurelia-framework';

import { ItemsComponent } from '../../index';

@autoinject
@customElement('column')
export class Column extends ItemsComponent<IColumn> {
    constructor(element: Element) {
        super(element);
    }
}

Column.properties<IColumn>({
    key: {} as any,
    name: {} as any,
    fieldName: {} as any,
    className: {} as any,
    styles: {} as any,
    minWidth: {} as any,
    ariaLabel: {} as any,
    isRowHeader: {} as any,
    maxWidth: {} as any,
    columnActionsMode: {} as any,
    iconName: {} as any,
    iconClassName: {} as any,
    isCollapsable: {} as any,
    isCollapsible: {} as any,
    isSorted: {} as any,
    isSortedDescending: {} as any,
    isResizable: {} as any,
    isMultiline: {} as any,
    isFiltered: {} as any,
    isGrouped: {} as any,
    data: {} as any,
    currentWidth: {} as any,
    headerClassName: {} as any,
    isPadded: {} as any,
    sortAscendingAriaLabel: {} as any,
    sortDescendingAriaLabel: {} as any,
    groupAriaLabel: {} as any,
    filterAriaLabel: {} as any,
    isMenuOpen: {} as any,

    onColumnClick: () => {},
    onColumnContextMenu: () => {},
    onColumnResize: () => {}
});
