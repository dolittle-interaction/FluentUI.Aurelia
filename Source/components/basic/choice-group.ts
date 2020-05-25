// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject, bindable } from 'aurelia-framework';

import { IChoiceGroupProps, ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react';

import { childrenOf } from '../../index';

import { ReactComponent } from '../../React/ReactComponent';
import { AuChoiceGroupOption } from './choice-group-option';


@autoinject
@customElement('choice-group')
export class AuChoiceGroup extends ReactComponent<React.FunctionComponent<IChoiceGroupProps>, IChoiceGroupProps> implements IChoiceGroupProps {
    hidden: boolean = false;

    @bindable
    selectedKey: string = '';

    @childrenOf('choice-group-option', [])
    options: AuChoiceGroupOption[] | undefined;

    @bindable
    selected: AuChoiceGroupOption | undefined;

    constructor(element: Element) {
        super(element, ChoiceGroup);
    }

    change(ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) {
        this.selected = option as AuChoiceGroupOption;
        this.selectedKey = option?.key || '';
        this.handleRendering();
    }
}

AuChoiceGroup.properties<IChoiceGroupProps>({
    options: {} as any,
    label: {} as any,
    defaultSelectedKey: {} as any,
    selectedKey: {} as any,

    onChange: () => {}
});
