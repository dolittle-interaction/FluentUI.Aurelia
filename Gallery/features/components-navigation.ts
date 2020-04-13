// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { bindable } from 'aurelia-framework';

const navigation = require('./navigation.json');

export class ComponentsNavigation {
    @bindable
    searching: boolean = false;

    searchResult: any[] = [];

    searchChanged(evt: any, searchString: string) {
        this.searchResult = [];
        if (searchString === '') {
            this.searching = false;
        } else {
            searchString = searchString.toLowerCase();

            navigation.forEach((group: any) => {
                group.items.forEach((item: any) => {
                    if (item.name.toLowerCase().indexOf(searchString) >= 0) {
                        this.searchResult.push(item);
                    }
                });
            });

            this.searching = true;
        }
    }

    clearSearch() {
        debugger;
        this.searchResult = [];
        this.searching = false;
    }
}
