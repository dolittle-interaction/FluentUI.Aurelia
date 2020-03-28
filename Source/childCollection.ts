// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ViewCompiler, ViewResources, BehaviorInstruction, camelCase, processContent } from 'aurelia-framework';
import { parseValue } from './parseValue';

export function childCollection(collectionTagName: string, elementTagName: string, targetProperty: string) {
    function contentProcessor(compiler: ViewCompiler, resources: ViewResources, node: HTMLElement, instruction: (BehaviorInstruction & any)): Boolean {
        const collection = node.getElementsByTagName(collectionTagName);
        if (collection.length > 1) {
            throw new Error(`You should only have one '${collectionTagName}' collection within a '${node.tagName}'`);
        }

        const elements = [];

        if (collection.length === 1) {
            const elementTags = collection[0].getElementsByTagName(elementTagName);
            // tslint:disable-next-line: prefer-for-of
            for (let columnTagIndex = 0; columnTagIndex < elementTags.length; columnTagIndex++) {
                const elementTag = elementTags[columnTagIndex];
                const element: any = {};

                // tslint:disable-next-line: prefer-for-of
                for (let attributeIndex = 0; attributeIndex < elementTag.attributes.length; attributeIndex++) {
                    const attribute = elementTag.attributes[attributeIndex];
                    const camelCasedName = camelCase(attribute.name);
                    element[camelCasedName] = parseValue(attribute.value);
                }

                elements.push(element);
            }
        }

        resources.registerValue(targetProperty, elements);

        return true;
    }

    return processContent(contentProcessor);
}
