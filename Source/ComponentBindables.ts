// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable, bindingMode } from 'aurelia-framework';

import { camelToKebab } from './camelToKebab';

const propertiesPerTarget: Map<any, any> = new Map<any, any>();

export class ComponentBindables {

    static configureFor<TProps>(target: any, properties: TProps) {
        propertiesPerTarget.set(target, properties);

        const propertyNames = Object.getOwnPropertyNames(properties);
        console.log(propertyNames);

        propertyNames.forEach((property) => {
            try {
                bindable({
                    name: property,
                    attribute: camelToKebab(property),
                    defaultBindingMode: bindingMode.twoWay
                })(target);
            } catch { }
        });
    }

    static getFor(target: any): any {
        return propertiesPerTarget.get(target);
    }
}
