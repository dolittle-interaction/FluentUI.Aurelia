// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from './ComponentProperties';
import { parseValue } from './parseValue';
import { IComponent } from './IComponent';

export class ComponentState {

    static updateFor(target: IComponent, state: any, element: Element, child: boolean = false): void {
        const properties = ComponentProperties.getFor(target.constructor);

        properties.forEach(property => {
            const targetValue = (target as any)[property.name];
            if (property.isEvent && child) {
                state[property.reactName] = (args: any) => element.dispatchEvent(new CustomEvent(property.name, { bubbles: true, detail: args }));
            } else if (property.isFunction) {
                if (typeof targetValue === 'function') {
                    state[property.reactName] = targetValue.bind(target);
                }
            } else if (targetValue) {
                state[property.reactName] = parseValue(targetValue);
            }
        });
    }
}
