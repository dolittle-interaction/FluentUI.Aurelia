// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IChoiceGroupOption } from 'office-ui-fabric-react';

import { noView, autoinject, customElement, bindable } from 'aurelia-framework';

import { IconTypeConverter, PropertyConverter } from '../../index';
import { ReactBase } from '../../React/ReactBase';

@autoinject
@noView
@customElement('choice-group-option')
export class AuChoiceGroupOption extends ReactBase<IChoiceGroupOption> implements IChoiceGroupOption {
    @bindable
    key: string = '';

    @bindable
    text: string = '';

    @bindable
    icon: string = '';

    constructor(element: Element) {
        super(element);
    }

    getPropertyConverters(): PropertyConverter[] {
        return [new PropertyConverter('icon', 'iconProps', new IconTypeConverter())];
    }
}

AuChoiceGroupOption.properties<IChoiceGroupOption>({
    key: {} as any,
    text: {} as any,
    iconProps: {} as any,
    imageSrc: {} as any,
    imageAlt: {} as any,
    selectedImageSrc: {} as any,
    imageSize: {} as any,
    disabled: {} as any,
    checked: {} as any,
    id: {} as any,
    labelId: {} as any,
    ariaLabel: {} as any
});
