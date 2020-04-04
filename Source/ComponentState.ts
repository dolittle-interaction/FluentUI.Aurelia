// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from './ComponentProperties';
import { parseValue } from './parseValue';
import { IComponent } from './IComponent';

export class ComponentState {

    static updateFor(component: IComponent, state: any): void {
        const properties = ComponentProperties.getFor(component.constructor);

        properties.forEach(property => {
            const targetValue = (component as any)[property.name];
            if (property.isEvent && !component.isRenderRoot) {
                state[property.reactName] = (args: any) => component.element.dispatchEvent(new CustomEvent(property.name, { bubbles: true, detail: args }));
            } else if (property.isFunction) {
                if (typeof targetValue === 'function') {
                    state[property.reactName] = targetValue.bind(component);
                }
            } else if (targetValue) {
                state[property.reactName] = parseValue(targetValue);
            }
        });
    }
}
