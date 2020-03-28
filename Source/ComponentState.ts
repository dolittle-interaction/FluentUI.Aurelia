// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from './ComponentProperties';
import { ComponentProperty } from './ComponentProperty';
import { parseValue } from './parseValue';

export class ComponentState {

    static createFor(target: any): any {
        const properties = ComponentProperties.getFor(target.constructor);
        const state: any = {};

        properties.forEach((property: ComponentProperty) => {
            const targetValue = target[property.name];
            if (property.isFunction) {
                if (typeof targetValue === 'function') {
                    state[property.reactName] = targetValue.bind(target);
                }
            } else if (targetValue) {
                state[property.reactName] = parseValue(targetValue);
            }
        });

        return state;
    }
}
