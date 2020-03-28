// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable, bindingMode } from 'aurelia-framework';

import { camelToKebab } from './camelToKebab';
import { ComponentProperty } from './ComponentProperty';

const propertiesPerTarget: Map<any, ComponentProperty[]> = new Map<any, ComponentProperty[]>();

export class ComponentProperties {

    static configureFor<TProps>(target: any, properties: TProps) {
        const propertyNames = Object.getOwnPropertyNames(properties);
        const componentProperties = propertyNames.map((name) => {
            const reactName = name;
            let isFunction = false;
            if (name.indexOf('on') === 0) {
                name = `${name[2].toLowerCase()}${name.substr(3)}`;
                isFunction = true;
            }

            return new ComponentProperty(name, camelToKebab(name), reactName, isFunction);
        });
        propertiesPerTarget.set(target, componentProperties);

        componentProperties.forEach((property) => {
            try {
                bindable({
                    name: property.name,
                    attribute: property.attribute,
                    defaultBindingMode: bindingMode.twoWay
                })(target);
            } catch { }
        });
    }

    static getFor(target: any): ComponentProperty[] {
        return propertiesPerTarget.get(target) || [];
    }
}
