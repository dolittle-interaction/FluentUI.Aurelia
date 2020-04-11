// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject, bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient } from 'aurelia-fetch-client';

import * as marked from 'marked';

@autoinject
export class ComponentInfo {
    @bindable
    overview: string = '';

    @bindable
    dos: string = '';

    @bindable
    donts: string = '';

    constructor(private _router: Router, private _httpClient: HttpClient) {
    }

    attached() {
        const documentationPath = `/features${this._router.currentInstruction.fragment}`;
        const overviewPath = `${documentationPath}/overview.md`;
        const dosPath = `${documentationPath}/dos.md`;
        const dontsPath = `${documentationPath}/donts.md`;

        this._httpClient.fetch(overviewPath)
            .then(response => response.text())
            .then(data => {
                this.overview = data;
            });

        this._httpClient.fetch(dosPath)
            .then(response => response.text())
            .then(data => {
                this.dos = marked.parse(data);
            });

        this._httpClient.fetch(dontsPath)
            .then(response => response.text())
            .then(data => {
                this.donts = marked.parse(data);
            });

    }
}
