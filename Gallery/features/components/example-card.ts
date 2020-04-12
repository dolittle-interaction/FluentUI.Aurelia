// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject, customElement, bindable } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient } from 'aurelia-fetch-client';

import Prism from 'prismjs';

const NEW_LINE_EXP = /\n(?!$)/g;
let lineNumbersWrapper: string;

Prism.hooks.add('after-tokenize', function (env) {
    const match = env.code.match(NEW_LINE_EXP);
    const linesNum = match ? match.length + 1 : 1;
    const lines = new Array(linesNum + 1).join('<span></span>');

    lineNumbersWrapper = `<span aria-hidden="true" class="line-numbers-rows">${lines}</span>`;
});


@autoinject
@customElement('example-card')
export class ExampleCard {
    @bindable
    title: string = '';

    @bindable
    sample: string = '';

    showingCode: boolean = false;
    showingSample: boolean = true;
    codeSwitchString: string = 'Show code';

    typeScriptCode: string = '';
    markupCode: string = '';

    constructor(private _router: Router, private _httpClient: HttpClient) {
    }

    bind() {
        const examplePath = `/features${this._router.currentInstruction.fragment}`;
        if (this.sample !== '') {
            const markupCodePath = `${examplePath}/${this.sample}.html`;
            const typeScriptCodePath = `${examplePath}/${this.sample}.ts`;

            this._httpClient.fetch(markupCodePath)
                .then(response => response.text())
                .then(data => {
                    const formatted = Prism.highlight(data, Prism.languages.markup, 'markup');
                    this.markupCode = `${formatted}${lineNumbersWrapper}`;
                });

            this._httpClient.fetch(typeScriptCodePath)
                .then(response => response.text())
                .then(data => {
                     const formatted = Prism.highlight(data, Prism.languages.typescript, 'typescript');
                     this.typeScriptCode = `${formatted}${lineNumbersWrapper}`;
                });

        }
    }

    languageSelected(item: any, ev: any) {
    }

    toggleShowingCode() {
        this.showingCode = !this.showingCode;
        this.showingSample = !this.showingCode;
        this.codeSwitchString = this.showingCode ? 'Hide code' : 'Show code';
    }
}
