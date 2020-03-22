# Fluent UI for Aurelia

This project is a wrapper of the official [React components for Fluent UI from Microsoft](https://developer.microsoft.com/en-us/fabric#/controls/web).
Enabling them to be idiomatically used in Aurelia.

## Using

Add a dependency to this package:

```shell
$ npm i @dolittle/fluentui.aurelia
```

...or

```shell
$ yarn add @dolittle/fluentui.aurelia
```

In your Aurelia setup (`main.js`):

```javascript
aurelia.use.plugin(PLATFORM.moduleName('@dolittle/fluentui.aurelia');
```

## Getting started

This project is using [Yarn workspaces](https://github.com/dolittle-tools/JavaScript.Build).
To get started you can simply run:

```shell
$ yarn
```

At the root of the project.

## Components Gallery

The purpose of the components gallery is to enable a simple place to go to for reference on how to use a component.
When working locally, it depends on the use of Yarn workspaces.
For running the control gallery, just do the following from the folder called `Gallery`:

```shell
$ yarn start
```

This will start the Webpack DevServer and it will react to any changes, also those happening from the build.

## Building

Both for publishing and for working locally one needs to build on change. This can be done by doing:

```shell
$ yarn build
```
