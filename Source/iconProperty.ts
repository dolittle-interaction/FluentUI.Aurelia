// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ViewCompiler, ViewResources, BehaviorInstruction, processContent, LogManager } from 'aurelia-framework';

import { IIconProps } from 'office-ui-fabric-react';

export function iconProperty(attribute: string = 'icon', targetProperty: string = 'iconProps') {
    function contentProcessor(compiler: ViewCompiler, resources: ViewResources, node: HTMLElement, instruction: (BehaviorInstruction & any)): Boolean {
        const iconAttribute = node.attributes.getNamedItem(attribute);
        if (iconAttribute) {
            const iconProperties: IIconProps = {
                iconName: iconAttribute.value
            };
            resources.registerValue(targetProperty, iconProperties);
        }

        return true;
    }

    return processContent(contentProcessor);
}
