// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const propertiesPerTarget: Map<any, any> = new Map<any, any>();

export class ComponentBindables {

    static configureFor<TProps>(target: any, properties: TProps) {
        propertiesPerTarget.set(target, properties);
    }

    static getFor(target: any): any {
        return propertiesPerTarget.get(target);
    }
}
