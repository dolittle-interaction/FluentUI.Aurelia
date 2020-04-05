// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { customElement, autoinject } from 'aurelia-framework';

import { IChoiceGroupProps, ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react';

import { IItemHandlingStrategy, ItemsComponent, TargetPropertyItemHandlingStrategy } from '../../index';

import { ChoiceGroupOption } from './choice-group-option';


@autoinject
@customElement('choice-group')
export class AuChoiceGroup extends ItemsComponent<React.FunctionComponent<IChoiceGroupProps>, IChoiceGroupProps> implements IChoiceGroupProps {
    hidden: boolean = false;
    options: IChoiceGroupOption[] = [];

    constructor(element: Element) {
        super(element, ChoiceGroup.prototype);
    }

    getItemHandlingStrategies(): IItemHandlingStrategy[] {
        return [new TargetPropertyItemHandlingStrategy(ChoiceGroupOption, 'options')];
    }
}

AuChoiceGroup.properties<IChoiceGroupProps>({
    options: {} as any,
    label: {} as any,
    defaultSelectedKey: {} as any,
    selectedKey: {} as any,

    onChange: () => {}
});
