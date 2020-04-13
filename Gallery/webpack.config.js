const path = require('path');
const fs = require('fs')
const envPath = path.resolve(process.cwd(), 'dolittle.env');

require('dotenv').config({ path: envPath });

const originalComponentsPath = '../node_modules/office-ui-fabric-react/src/components';

const CopyPlugin = require('copy-webpack-plugin');
const NavigationGenerator = require('./NavigationGenerator');

const webpack = require('@dolittle/typescript.webpack.aurelia').webpack
const originalConfig = webpack(__dirname, path.resolve(__dirname, '..'));

console.log(process.env.DOLITTLE_WEB_TITLE);

function flatten(lists) {
    return lists.reduce((a, b) => a.concat(b), []);
}

function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .map(file => path.join(srcpath, file))
        .filter(path => fs.statSync(path).isDirectory());
}

function getDirectoriesRecursive(srcpath) {
    return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}


const allDirectories = getDirectoriesRecursive('features/components');
const allComponents = allDirectories
    .filter(_ => _.split(path.sep).length == 4)
    .map(_ => {
        var segments = _.split(path.sep);

        return {
            category: segments[2],
            component: segments[3],
            componentConracted: segments[3].split('-').join('')
        };
    });

module.exports = () => {
    const config = originalConfig.apply(null, arguments);
    config.devServer = {
        historyApiFallback: true,
        port: 8080
    };

    config.plugins = config.plugins || [];
    config.plugins.push(new NavigationGenerator());
    config.plugins.push(
        new CopyPlugin([
            {
                from: path.join(originalComponentsPath, '/**/docs/*.md'),
                to: './features/components',
                transformPath(targetPath, absolutePath) {
                    const segments = targetPath.split(path.sep);
                    let filename = segments[segments.length - 1].toLowerCase();
                    let filenameWithoutExtension = filename.replace('.md', '')

                    if (filenameWithoutExtension.endsWith('dos')) {
                        filename = 'dos.md';
                    }
                    if (filenameWithoutExtension.endsWith('donts')) {
                        filename = 'donts.md';
                    }
                    if (filenameWithoutExtension.endsWith('overview')) {
                        filename = 'overview.md';
                    }

                    const componentName = segments[segments.length - 3].toLowerCase();
                    const components = allComponents.filter(_ => _.componentConracted == componentName);
                    if (components.length == 1) {
                        const component = components[0];
                        const newPath = path.join('./features/components', component.category, component.component, filename);
                        return newPath;
                    }

                    return targetPath;
                }
            },

            { from: './features/components/**/*.{html,ts}', to: './' }
        ])
    );

    return config;
};
