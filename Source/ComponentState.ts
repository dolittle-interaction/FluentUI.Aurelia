// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from './ComponentProperties';
import { IComponent } from './IComponent';
import { parseValue } from './parseValue';

export class ComponentState {

    static updateFor(component: IComponent, state: any): void {
        const properties = ComponentProperties.getFor(component.constructor);
        const attributesWithoutValue: string[] = [];

        for (let i = 0; i < component.element.attributes.length; i++) {
            const attribute = component.element.attributes.item(i);
            if (attribute) {
                const value = attribute.value;
                if (!value || value === '') {
                    attributesWithoutValue.push(attribute.name);
                }
            }
        }

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
            } else {
                if (attributesWithoutValue.some(_ => _ === property.attribute)) {
                    state[property.reactName] = true;
                }
            }
        });
    }
}
