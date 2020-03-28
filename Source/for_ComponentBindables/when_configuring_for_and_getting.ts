// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentProperties } from '../ComponentProperties';

describe('when configuring for and getting', () => {
    const target = 'MyTarget';
    const properties = {
        first: '42',
        second: 42
    };

    ComponentProperties.configureFor(target, properties);

    const resultingProperties = ComponentProperties.getFor(target);

    it('should return same properties', () => resultingProperties.should.equal(properties));
});
