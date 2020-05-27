// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement, bindable } from 'aurelia-framework';

import { Persona, IPersonaProps, PersonaSize, PersonaPresence, PersonaInitialsColor } from 'office-ui-fabric-react';

import { KeyValueTypeConverter, propertyConverter } from '../../index';
import { ReactComponent } from '../../React/ReactComponent';

const personaSizes = {
    'tiny': PersonaSize.tiny,
    'extraExtraSmall': PersonaSize.extraExtraSmall,
    'extraSmall': PersonaSize.extraSmall,
    'small': PersonaSize.small,
    'regular': PersonaSize.regular,
    'large': PersonaSize.large,
    'extraLarge': PersonaSize.extraLarge,
    'size8': PersonaSize.size8,
    'size10': PersonaSize.size10,
    'size16': PersonaSize.size16,
    'size24': PersonaSize.size24,
    'size28': PersonaSize.size28,
    'size32': PersonaSize.size32,
    'size40': PersonaSize.size40,
    'size48': PersonaSize.size48,
    'size56': PersonaSize.size56,
    'size72': PersonaSize.size72,
    'size100': PersonaSize.size100,
    'size120': PersonaSize.size120
};

const personaPresences = {
    'none': PersonaPresence.none,
    'offline': PersonaPresence.offline,
    'online': PersonaPresence.online,
    'away': PersonaPresence.away,
    'dnd': PersonaPresence.dnd,
    'blocked': PersonaPresence.blocked,
    'busy': PersonaPresence.busy
};

const personaInitialsColor = {
    'lightBlue': PersonaInitialsColor.lightBlue,
    'blue': PersonaInitialsColor.blue,
    'darkBlue': PersonaInitialsColor.darkBlue,
    'teal': PersonaInitialsColor.teal,
    'lightGreen': PersonaInitialsColor.lightGreen,
    'green': PersonaInitialsColor.green,
    'darkGreen': PersonaInitialsColor.darkGreen,
    'lightPink': PersonaInitialsColor.lightPink,
    'pink': PersonaInitialsColor.pink,
    'magenta': PersonaInitialsColor.magenta,
    'purple': PersonaInitialsColor.purple,
    'black': PersonaInitialsColor.black,
    'orange': PersonaInitialsColor.orange,
    'red': PersonaInitialsColor.red,
    'darkRed': PersonaInitialsColor.darkRed,
    'transparent': PersonaInitialsColor.transparent,
    'violet': PersonaInitialsColor.violet,
    'lightRed': PersonaInitialsColor.lightRed,
    'gold': PersonaInitialsColor.gold,
    'burgundy': PersonaInitialsColor.burgundy,
    'warmGray': PersonaInitialsColor.warmGray,
    'coolGray': PersonaInitialsColor.coolGray,
    'gray': PersonaInitialsColor.gray,
    'cyan': PersonaInitialsColor.cyan,
    'rust': PersonaInitialsColor.rust
};


@autoinject
@customElement('persona')
export class AuPersona extends ReactComponent<React.FunctionComponent<IPersonaProps>, IPersonaProps> {

    @bindable
    personaSize: string = 'size8';

    @bindable
    personaPresence: string = 'none';

    @bindable
    personaInitialsColor: string = 'lightBlue';

    @propertyConverter('personaSize', new KeyValueTypeConverter(personaSizes))
    get size(): PersonaSize { return PersonaSize.size8; }

    @propertyConverter('personaPresence', new KeyValueTypeConverter(personaPresences))
    get presence(): PersonaPresence { return PersonaPresence.none; }

    @propertyConverter('personaInitialsColor', new KeyValueTypeConverter(personaInitialsColor))
    get initialsColor(): PersonaInitialsColor { return PersonaInitialsColor.lightBlue; }


    constructor(element: Element) {
        super(element, Persona);
    }
}

AuPersona.properties<IPersonaProps>({
    className: {} as any,
    styles: {} as any,
    theme: {} as any,

    text: {} as any,
    size: {} as any,
    imageShouldFadeIn: {} as any,
    imageShouldStartVisible: {} as any,
    imageUrl: {} as any,
    imageAlt: {} as any,
    imageInitials: {} as any,
    allowPhoneInitials: {} as any,
    initialsColor: {} as any,
    presenceColors: {} as any,
    presence: {} as any,
    presenceTitle: {} as any,
    isOutOfOffice: {} as any,
    secondaryText: {} as any,
    tertiaryText: {} as any,
    optionalText: {} as any,
    hidePersonaDetails: {} as any,
    showUnknownPersonaCoin: {} as any,
    showInitialsUntilImageLoads: {} as any,
    coinSize: {} as any,
    coinProps: {} as any,
    primaryText: {} as any,

    onRenderCoin: () => { return {} as JSX.Element; },
    onRenderInitials: () => { return {} as JSX.Element; },
    onRenderPrimaryText: () => { return {} as JSX.Element; },
    onRenderSecondaryText: () => { return {} as JSX.Element; },
    onRenderTertiaryText: () => { return {} as JSX.Element; },
    onRenderOptionalText: () => { return {} as JSX.Element; },
    onPhotoLoadingStateChange: () => { }
});
