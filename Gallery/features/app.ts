// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject } from 'aurelia-dependency-injection';
import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from 'aurelia-router';

@autoinject
export class App {
    router: any;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.options.pushState = true;
        config.map([
            { route: ['', '/'], name: 'Index', moduleId: PLATFORM.moduleName('index'), nav: true },

            // Basic
            { route: '/components/basic/button', name: 'Button', moduleId: PLATFORM.moduleName('./components/basic/button/index'), nav: true },
            { route: '/components/basic/checkbox', name: 'Checkbox', moduleId: PLATFORM.moduleName('./components/basic/checkbox/index'), nav: true },
            { route: '/components/basic/choice-group', name: 'ChoiceGroup', moduleId: PLATFORM.moduleName('./components/basic/choice-group/index'), nav: true },
            { route: '/components/basic/combo-box', name: 'ComboBox', moduleId: PLATFORM.moduleName('./components/basic/combo-box/index'), nav: true },
            { route: '/components/basic/dropdown', name: 'Dropdown', moduleId: PLATFORM.moduleName('./components/basic/dropdown/index'), nav: true },
            { route: '/components/basic/label', name: 'Label', moduleId: PLATFORM.moduleName('./components/basic/label/index'), nav: true },
            { route: '/components/basic/link', name: 'Link', moduleId: PLATFORM.moduleName('./components/basic/link/index'), nav: true },
            { route: '/components/basic/rating', name: 'Rating', moduleId: PLATFORM.moduleName('./components/basic/rating/index'), nav: true },
            { route: '/components/basic/search-box', name: 'SearchBox', moduleId: PLATFORM.moduleName('./components/basic/search-box/index'), nav: true },

            // Utilities
            { route: '/components/utilities/stack', name: 'stack', moduleId: PLATFORM.moduleName('./components/utilities/stack/index'), nav: true }
        ]);

        this.router = router;
    }
}
