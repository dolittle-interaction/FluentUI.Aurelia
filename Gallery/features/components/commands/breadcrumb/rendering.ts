// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IBreadcrumbItem } from 'office-ui-fabric-react';

export class Rendering {
    items: IBreadcrumbItem[] = [
        { text: 'Files', key: 'Files', onClick: this.itemClicked },
        { text: 'Folder 1', key: 'f1', onClick: this.itemClicked },
        { text: 'Folder 2', key: 'f2', onClick: this.itemClicked },
        { text: 'Folder 3', key: 'f3', onClick: this.itemClicked },
        { text: 'Folder 4 (non-clickable)', key: 'f4' },
        { text: 'Folder 5', key: 'f5', onClick: this.itemClicked },
    ];

    itemsWithHref: IBreadcrumbItem[] = [
        { text: 'Files', key: 'Files', href: '#/components/commands/breadcrumb' },
        { text: 'Folder 1', key: 'f1', href: '#/components/commands/breadcrumb' },
        { text: 'Folder 2', key: 'f2', href: '#/components/commands/breadcrumb' },
        { text: 'Folder 3', key: 'f3', href: '#/components/commands/breadcrumb' },
        { text: 'Folder 4 (non-clickable)', key: 'f4' },
        { text: 'Folder 1', key: 'f5', href: '#/components/commands/breadcrumb' },
    ];

    itemsWithHeading: IBreadcrumbItem[] = [
        { text: 'Files', key: 'Files', onClick: this.itemClicked },
        { text: 'Folder 1', key: 'd1', onClick: this.itemClicked },
        { text: 'Folder 2', key: 'd2', onClick: this.itemClicked, isCurrentItem: true, as: 'h4' },
    ];

    itemClicked(ev?: React.MouseEvent<HTMLElement>, item?: IBreadcrumbItem): void {
        alert(`Item ${item?.text} clicked`);
    }
}
