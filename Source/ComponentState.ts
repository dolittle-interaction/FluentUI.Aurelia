// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from './ComponentProperties';
import { parseValue } from './parseValue';
import { FrameworkElement } from './FrameworkElement';

export class ComponentState {

    static updateFor(frameworkElement: FrameworkElement, state: any): void {
        const properties = ComponentProperties.getFor(frameworkElement.constructor);
        const attributesWithoutValue: string[] = [];

        for (let i = 0; i < frameworkElement.element.attributes.length; i++) {
            const attribute = frameworkElement.element.attributes.item(i);
            if (attribute) {
                const value = attribute.value;
                if (!value || value === '') {
                    attributesWithoutValue.push(attribute.name);
                }
            }
        }

        properties.forEach(property => {
            const targetValue = (frameworkElement as any)[property.name];
            if (property.isEvent && !frameworkElement.isRenderRoot) {
                state[property.reactName] = (args: any) => frameworkElement.element.dispatchEvent(new CustomEvent(property.name, { bubbles: true, detail: args }));
            } else if (property.isFunction) {
                if (typeof targetValue === 'function') {
                    state[property.reactName] = targetValue.bind(frameworkElement.bindingContext);
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
