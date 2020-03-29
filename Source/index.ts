// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia: FrameworkConfiguration, config: any) {
    aurelia.globalResources([

        // Basic
        PLATFORM.moduleName('./components/basic/default-button'),
        PLATFORM.moduleName('./components/basic/primary-button'),
        PLATFORM.moduleName('./components/basic/compound-button'),
        PLATFORM.moduleName('./components/basic/command-bar-button'),

        // Commands
        PLATFORM.moduleName('./components/commands/contextual-menu'),
        PLATFORM.moduleName('./components/commands/contextual-menu-item'),

        // Items
        PLATFORM.moduleName('./components/items/details-list'),
    ]);
}
