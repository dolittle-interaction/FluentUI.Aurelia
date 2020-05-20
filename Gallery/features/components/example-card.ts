// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { autoinject, customElement, bindable, computedFrom, observable } from 'aurelia-framework';
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

const fileIcons: any = {
    'html': 'FileHTML',
    'scss': 'FileSASS',
    'ts': 'TypeScriptLanguage',
};

const headers: any = {
    'html': 'HTML',
    'scss': 'Styles',
    'ts': 'TypeScript'
};

@autoinject
@customElement('example-card')
export class ExampleCard {
    @bindable
    title: string = '';

    @bindable
    sample: string = '';

    @computedFrom('sample')
    get hasSample(): boolean {
        return this.sample !== '';
    }

    showingCode: boolean = false;
    showingSample: boolean = true;
    codeSwitchString: string = 'Show code';

    typeScriptCode: string = '';
    markupCode: string = '';
    stylesCode: string = '';

    @bindable
    files: string = 'html,ts';
    allFiles: any[] = [];

    hasHtml: boolean = false;

    get html() {
        return this.allFiles.find(_ => _.fileType === 'html');
    }

    get scss() {
        return this.allFiles.find(_ => _.fileType === 'scss');
    }

    get ts() {
        return this.allFiles.find(_ => _.fileType === 'ts');
    }

    constructor(private _router: Router, private _httpClient: HttpClient) {
    }

    bind() {
        const fileTypes = this.files.split(',');

        const examplePath = `/features${this._router.currentInstruction.fragment}`;
        if (this.sample !== '') {
            for (const fileType of fileTypes) {
                const codePath = `${examplePath}/${this.sample}.${fileType}`;
                this._httpClient.fetch(codePath)
                    .then(response => response.text())
                    .then(data => {
                        const formatted = this.highlight(data, fileType);
                        this.allFiles.push({
                            fileType: fileType,
                            content: `${formatted}${lineNumbersWrapper}`,
                            header: headers[fileType],
                            icon: fileIcons[fileType]
                        });
                    });
            }
        }
    }

    private highlight(data: string, fileType: string) {
        let grammar = Prism.languages.markup;
        let type = 'markup';

        switch (fileType) {
            case 'html': {
                grammar = Prism.languages.markup;
                type = 'markup';
            } break;
            case 'scss': {
                grammar = Prism.languages.scss;
                type = 'scss';
            } break;
            case 'ts': {
                grammar = Prism.languages.typescript;
                type = 'typescript';
            } break;

        }

        const formatted = Prism.highlight(data, grammar, type);
        return formatted;
    }

    languageSelected(item: any, ev: any) {
    }

    toggleShowingCode() {
        this.showingCode = !this.showingCode;
        this.showingSample = !this.showingCode;
        this.codeSwitchString = this.showingCode ? 'Hide code' : 'Show code';
    }
}
