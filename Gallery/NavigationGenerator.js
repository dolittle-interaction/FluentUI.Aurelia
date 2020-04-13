// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const fs = require('fs');


class NavigationGenerator {

    apply(compiler) {
        let typeScriptOutput = "/* GENERATED CODE */\nimport { PLATFORM } from 'aurelia-pal';\n\nexport default [\n";
        let markupOutput = "<!-- GENERATED CODE -->\n<template>\n    <navigation>\n        <navigation-link-group>\n"
        
        fs.readFile('./features/navigation.json', (err, content) => {
            let hierarchy = JSON.parse(content);

            hierarchy.forEach(group => {
                markupOutput = markupOutput + `            <navigation-link name="${group.name}">\n`;

                group.items.forEach(item => {
                    const moduleName = `.${item.url}/index`;
                    const route = `   { route: '${item.url}', name: '${item.name}', moduleId: PLATFORM.moduleName('${moduleName}'), nav: true },\n`;
                    markupOutput = markupOutput + `                <navigation-link name="${item.name}" url="${item.url}"></navigation-link>\n`;
                    typeScriptOutput = typeScriptOutput + route;
                });

            markupOutput = markupOutput + '            </navigation-link>\n'
            });

            typeScriptOutput = typeScriptOutput + '];\n';
            markupOutput = markupOutput + '        </navigation-link-group>\n'
            markupOutput = markupOutput + '    </navigation>\n'
            markupOutput = markupOutput + '</template>\n'

            fs.writeFileSync('./features/navigation.ts', typeScriptOutput);
            fs.writeFileSync('./features/navigation-structure.html', markupOutput);
        });
    }
}

module.exports = NavigationGenerator;
