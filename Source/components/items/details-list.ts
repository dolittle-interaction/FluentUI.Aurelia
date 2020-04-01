// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { customElement, autoinject } from 'aurelia-framework';

import { ReactComponent } from '../../ReactComponent';

import { DetailsList, IDetailsListProps, IColumn } from 'office-ui-fabric-react';
import { Column } from './column';
import { TargetPropertyItemHandlingStrategy } from '../../TargetPropertyItemHandlingStrategy';
import { IItemHandlingStrategy } from 'IItemHandlingStrategy';

@autoinject
@customElement('details-list')
export class AuDetailsList extends ReactComponent<React.FunctionComponent<IDetailsListProps>, IDetailsListProps> {
    constructor(element: Element) {
        super(element, DetailsList.prototype);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return[new TargetPropertyItemHandlingStrategy(Column, 'columns')];
    }
}

AuDetailsList.properties<IDetailsListProps>({
    checkButtonAriaLabel: {} as any,
    checkboxCellClassName: {} as any,
    checkboxVisibility: {} as any,
    className: {} as any,
    columnReorderOptions: {} as any,
    columns: {} as any,
    compact: {} as any,
    constrainMode: {} as any,
    disableSelectionZone: {} as any,

    groupProps: {} as any,
    groups: {} as any,
    indentWidth: {} as any,
    initialFocusedIndex: {} as any,
    isHeaderVisible: {} as any,
    layoutMode: {} as any,
    listProps: {} as any,
    minimumPixelsForDrag: {} as any,

    onActiveItemChanged: () => { },
    onColumnHeaderClick: () => { },
    onColumnHeaderContextMenu: () => { },
    onColumnResize: () => { },
    onDidUpdate: () => { },
    onItemContextMenu: () => { },
    onItemInvoked: () => { },

    selection: {} as any,
    selectionMode: {} as any,
    selectionPreservedOnEmptyClick: {} as any,

    items: {} as any,
});
