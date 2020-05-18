// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { TestImages } from '@uifabric/example-data';

export class Sizes {
    showDetails: boolean = true;

    imageUrl = TestImages.personaFemale;
    initials = 'AL';
    name = 'Annie Lindqvist';
    secondaryText = 'Software Engineer';
    tertiaryText = 'In a meeting';
    optionalText = 'Available at 4:00pm';

    items: any[] = [
        { size: 'size8', title: 'Size 8, with no presence', presence: 'none' },
        { size: 'size8', title: 'Size 8, with presence', presence: 'offline' },
        { size: 'size24', title: 'Size 24 Persona', presence: 'online' },
        { size: 'size32', title: 'Size 32 Persona', presence: 'online' },
        { size: 'size40', title: 'Size 40 Persona', presence: 'away' },
        { size: 'size48', title: 'Size 48 Persona', presence: 'busy' },
        { size: 'size56', title: 'Size 56 Persona', presence: 'online' },
        { size: 'size72', title: 'Size 72 Persona', presence: 'dnd' },
        { size: 'size100', title: 'Size 100 Persona', presence: 'blocked' },
        { size: 'size120', title: 'Size 120 Persona', presence: 'away' }
    ];

    sizes: string[] = [
        'size8',
        'size10',
        'size16',
        'size24',
        'size28',
        'size32',
        'size40',
        'size48',
        'size56',
        'size72',
        'size100',
        'size120'
    ];

    personaDetailsChanged(sender: any, checked: boolean) {
        this.showDetails = checked;
    }
}
