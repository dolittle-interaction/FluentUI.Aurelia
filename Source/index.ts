// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.


export * from './CallbackItemHandlingStrategy';
export * from './Component';
export * from './ComponentConfiguration';
export * from './ComponentProperties';
export * from './ComponentProperty';
export * from './ComponentState';
export * from './ContentComponent';
export * from './Constructor';
export * from './FrameworkElement';
export * from './IConfigurationHandlingStrategy';
export * from './IconTypeConverter';
export * from './IItemsComponent';
export * from './IItemHandlingStrategy';
export * from './ItemsComponent';
export * from './ITypeConverter';
export * from './kebabCase';
export * from './parseValue';
export * from './PropertyConverter';
export * from './TargetPropertyConfigurationHandlingStrategy';
export * from './TargetPropertyItemHandlingStrategy';
export * from './UIElement';
export * from './uniqueIdentifier';

import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia: FrameworkConfiguration, config: any) {
    aurelia.globalResources([

        // Basic
        PLATFORM.moduleName('./components/basic/default-button'),
        PLATFORM.moduleName('./components/basic/primary-button'),
        PLATFORM.moduleName('./components/basic/compound-button'),
        PLATFORM.moduleName('./components/basic/command-bar-button'),
        PLATFORM.moduleName('./components/basic/action-button'),
        PLATFORM.moduleName('./components/basic/checkbox'),
        PLATFORM.moduleName('./components/basic/choice-group'),
        PLATFORM.moduleName('./components/basic/choice-group-option'),
        PLATFORM.moduleName('./components/basic/combo-box'),
        PLATFORM.moduleName('./components/basic/combo-box-option'),
        PLATFORM.moduleName('./components/basic/dropdown'),
        PLATFORM.moduleName('./components/basic/dropdown-option'),
        PLATFORM.moduleName('./components/basic/label'),
        PLATFORM.moduleName('./components/basic/link'),
        PLATFORM.moduleName('./components/basic/rating'),
        PLATFORM.moduleName('./components/basic/search-box'),
        PLATFORM.moduleName('./components/basic/slider'),
        PLATFORM.moduleName('./components/basic/toggle'),

        // Commands, Menus & Navs
        PLATFORM.moduleName('./components/commands/contextual-menu'),
        PLATFORM.moduleName('./components/commands/contextual-menu-item'),
        PLATFORM.moduleName('./components/commands/navigation'),
        PLATFORM.moduleName('./components/commands/navigation-link'),
        PLATFORM.moduleName('./components/commands/navigation-link-group'),

        // Items
        PLATFORM.moduleName('./components/items/column'),
        PLATFORM.moduleName('./components/items/details-list'),

        // Utilities
        PLATFORM.moduleName('./components/utilities/stack'),
        PLATFORM.moduleName('./components/utilities/stack-tokens'),
        PLATFORM.moduleName('./components/utilities/stack-item'),
    ]);
}

