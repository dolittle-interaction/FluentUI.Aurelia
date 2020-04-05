// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Controller } from 'aurelia-framework';

import { ComponentProperties } from './ComponentProperties';

export class FrameworkElement {
    static properties<TProps>(properties: TProps) {
        ComponentProperties.configureFor(this, properties);
    }

    element: Element;
    parent: FrameworkElement | null = null;
    isRenderRoot: boolean = false;

    constructor(element: Element) {
        this.element = element;
    }

    attached() {
        this.parent = this.getParent();
    }

    private getParent(): FrameworkElement | null {
        const controller = (this.element as any).au?.controller as Controller;
        if (controller) {
            const container = (controller as any).container;
            if (container) {
                return container.parent?.viewModel as FrameworkElement;
            }
        }

        return null;
    }
}
