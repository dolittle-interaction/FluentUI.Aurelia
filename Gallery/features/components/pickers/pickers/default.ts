// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { ITag } from 'office-ui-fabric-react';

export class Default {
    tags: string[] = [
        'black',
        'blue',
        'brown',
        'cyan',
        'green',
        'magenta',
        'mauve',
        'orange',
        'pink',
        'purple',
        'red',
        'rose',
        'violet',
        'white',
        'yellow'
    ];

    resolveSuggestions(filterText: string) {
        return this.tags.filter(_ => {
            if (!filterText || filterText === '') {
                return true;
            }
            return _.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
        }).map((_: string) => { return { key: _, name: _ } as ITag; });
    }

    getTextFromItem(item: ITag) {
        return item.name;
    }
}
