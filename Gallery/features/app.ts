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
            { route: '/components/basic/button', name: 'Button', moduleId: PLATFORM.moduleName('./components/basic/button/index'), nav: true },
            { route: '/components/basic/checkbox', name: 'Checkbox', moduleId: PLATFORM.moduleName('./components/basic/checkbox/index'), nav: true },
            { route: '/components/utilities/stack', name: 'stack', moduleId: PLATFORM.moduleName('./components/utilities/stack/index'), nav: true }
        ]);

        this.router = router;
    }
}
