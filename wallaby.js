// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const build = require('@dolittle/typescript.build');

module.exports = build.wallaby(undefined, w => {
    require('reflect-metadata')
});
