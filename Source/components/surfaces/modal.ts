// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement } from 'aurelia-framework';

import { Modal, IModalProps } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';
import { ReactWrapperComponent } from '../../React/ReactWrapperComponent';

@autoinject
@customElement('modal')
export class AuModal extends ReactComponent<React.FunctionComponent<IModalProps>, IModalProps> {
    constructor(element: Element) {
        super(element, Modal, ReactWrapperComponent);
    }

    isOpenChanged(open: boolean) {
        if (this.renderedComponent) {
            // 'ms-Modal-scrollableContent'
            debugger;

        }
    }
}

AuModal.properties<IModalProps>({
    className: {} as any,
    styles: {} as any,
    theme: {} as any,
    isOpen: {} as any,
    isDarkOverlay: {} as any,
    layerProps: {} as any,
    overlay: {} as any,
    isBlocking: {} as any,
    isModeless: {} as any,
    containerClassName: {} as any,
    scrollableContentClassName: {} as any,
    titleAriaId: {} as any,
    subtitleAriaId: {} as any,
    topOffsetFixed: {} as any,
    dragOptions: {} as any,
    allowTouchBodyScroll: {} as any,

    onDismiss: () => { },
    onDismissed: () => { },
    onLayerDidMount: () => { }
});
