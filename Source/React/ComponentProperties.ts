// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { SyntheticEvent } from 'react';
import { bindable, bindingMode } from 'aurelia-framework';

import { ComponentProperty } from './ComponentProperty';
import { kebabCase } from '../kebabCase';
import { parseValue } from '../parseValue';
import { Component } from '../Component';

const propertiesPerTarget: Map<any, ComponentProperty[]> = new Map<any, ComponentProperty[]>();

export class ComponentProperties {

    static configureFor<TProps>(target: any, properties: TProps) {
        const targetProperties = Object.getOwnPropertyNames(target.prototype);
        const propertyNames = Object.getOwnPropertyNames(properties);
        const componentProperties = propertyNames.map((name) => {
            const reactName = name;
            let isFunction = false;
            if (name.indexOf('on') === 0) {
                name = `${name[2].toLowerCase()}${name.substr(3)}`;
                isFunction = true;
            }

            const hasOwnProperty = targetProperties.includes(name);

            return new ComponentProperty(name, kebabCase(name), reactName, isFunction, hasOwnProperty);
        });
        propertiesPerTarget.set(target, componentProperties);

        const actualProperties = componentProperties.filter(_ => !_.hasOwnProperty);

        for (const property of actualProperties) {
            try {
                bindable({
                    name: property.name,
                    attribute: property.attribute,
                    defaultBindingMode: bindingMode.twoWay
                })(target);
            } catch { }
        }
    }

    static getFor(target: any): ComponentProperty[] {
        return propertiesPerTarget.get(target) || [];
    }

    static setFor(component: Component, target: any): void {
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

            if (property.isFunction) {
                target[property.reactName] = function () {
                    if (typeof targetValue === 'function') {
                        if (property.hasOwnProperty) {
                            (targetValue as Function).apply(component, arguments);
                        } else {
                            (targetValue as Function).apply(component.bindingContext, arguments);
                        }
                    }

                    if (arguments.length > 0 &&
                        arguments[0].constructor &&
                        (arguments[0].constructor.toString().indexOf('SyntheticEvent') >= 0)) {
                        const syntheticEvent = arguments[0] as SyntheticEvent;
                        if (!syntheticEvent.isDefaultPrevented() && syntheticEvent.isPropagationStopped()) {
                            component.element.dispatchEvent(syntheticEvent.nativeEvent);
                        }
                    } else if (arguments.length > 1) {
                        component.element.dispatchEvent(new CustomEvent(property.name, { bubbles: true, detail: arguments[1] }));
                    }
                };
            } else if (targetValue) {
                target[property.reactName] = parseValue(targetValue);
            } else {
                if (attributesWithoutValue.some(_ => _ === property.attribute)) {
                    target[property.reactName] = true;
                }
            }
        });
    }

}
