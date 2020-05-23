// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

export class CoreComponent {
    constructor(private _element: Element) {

    }

    attached() {
        if ((this as any).__metadata__?._children) {
            const children = (this as any).__metadata__._children;
            for (const child of children) {
                const childElements = this._element.querySelectorAll(child.selector);
                const childViewModels: any[] = (this as any)[child.property] || [];
                childElements.forEach(childElement => {
                    childViewModels.push(childElement.au.controller.viewModel);
                });
                (this as any)[child.property] = childViewModels;
            }
        }
    }
}
