// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ComponentBindables } from '../ComponentBindables';

describe('when configuring for and getting', () => {
    const target = 'MyTarget';
    const properties = {
        first: '42',
        second: 42
    };

    ComponentBindables.configureFor(target, properties);

    const resultingProperties = ComponentBindables.getFor(target);

    it('should return same properties', () => resultingProperties.should.equal(properties));
});
