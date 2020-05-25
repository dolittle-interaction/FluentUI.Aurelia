// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

export * from './ChildrenOf';
export * from './Component';
export * from './React/ComponentProperties';
export * from './React/ComponentProperty';
export * from './Constructor';
export * from './React/DOMUtility';
export * from './IconTypeConverter';
export * from './ITypeConverter';
export * from './kebabCase';
export * from './KeyValueTypeConverter';
export * from './parseValue';
export * from './PropertyConverter';
export * from './uniqueIdentifier';

export * from './components/basic/choice-group-option';

import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia: FrameworkConfiguration, config: any) {
    aurelia.globalResources([

        // Basic
        PLATFORM.moduleName('./components/basic/action-button'),
        PLATFORM.moduleName('./components/basic/default-button'),
        PLATFORM.moduleName('./components/basic/compound-button'),
        PLATFORM.moduleName('./components/basic/checkbox'),
        PLATFORM.moduleName('./components/basic/choice-group'),
        PLATFORM.moduleName('./components/basic/choice-group-option'),
        PLATFORM.moduleName('./components/basic/combo-box'),
        PLATFORM.moduleName('./components/basic/combo-box-option'),
        PLATFORM.moduleName('./components/basic/command-bar-button'),
        PLATFORM.moduleName('./components/basic/dropdown'),
        PLATFORM.moduleName('./components/basic/dropdown-option'),
        PLATFORM.moduleName('./components/basic/icon-button'),
        PLATFORM.moduleName('./components/basic/label'),
        PLATFORM.moduleName('./components/basic/link'),
        PLATFORM.moduleName('./components/basic/masked-text-field'),
        PLATFORM.moduleName('./components/basic/rating'),
        PLATFORM.moduleName('./components/basic/primary-button'),
        PLATFORM.moduleName('./components/commands/contextual-menu-item'),
        PLATFORM.moduleName('./components/basic/search-box'),
        PLATFORM.moduleName('./components/basic/slider'),
        PLATFORM.moduleName('./components/basic/spin-button'),
        PLATFORM.moduleName('./components/basic/toggle'),
        PLATFORM.moduleName('./components/basic/text-field'),

        /*

        // Items
        PLATFORM.moduleName('./components/items/card'),
        PLATFORM.moduleName('./components/items/card-item'),
        PLATFORM.moduleName('./components/items/card-section'),
        PLATFORM.moduleName('./components/items/persona'),

        // Galleries & Pickers
        PLATFORM.moduleName('./components/pickers/tag-picker'),
        */

        // Commands, Menus & Navs
        PLATFORM.moduleName('./components/commands/app-bar'),
        PLATFORM.moduleName('./components/commands/app-bar-item'),
        PLATFORM.moduleName('./components/commands/breadcrumb'),
        PLATFORM.moduleName('./components/commands/command-bar'),
        PLATFORM.moduleName('./components/commands/command-bar-item'),
        PLATFORM.moduleName('./components/commands/contextual-menu'),
        PLATFORM.moduleName('./components/commands/navigation'),
        PLATFORM.moduleName('./components/commands/navigation-link'),
        PLATFORM.moduleName('./components/commands/navigation-link-group'),
        PLATFORM.moduleName('./components/commands/pivot'),
        PLATFORM.moduleName('./components/commands/pivot-item'),

        /*
        // Items
        PLATFORM.moduleName('./components/items/column'),
        PLATFORM.moduleName('./components/items/details-list'),

        // Surfaces
        PLATFORM.moduleName('./components/surfaces/dialog'),
        PLATFORM.moduleName('./components/surfaces/dialog-footer'),
        */

        // Utilities
        PLATFORM.moduleName('./components/utilities/font-icon'),
        PLATFORM.moduleName('./components/utilities/icon'),
        PLATFORM.moduleName('./components/utilities/named-icon'),
        /*
        PLATFORM.moduleName('./components/utilities/stack'),
        PLATFORM.moduleName('./components/utilities/stack-tokens'),
        PLATFORM.moduleName('./components/utilities/stack-item')
        */
    ]);
}

