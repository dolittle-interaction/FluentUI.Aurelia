// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement, inlineView } from 'aurelia-framework';

import { Modal, IModalProps } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';
import { ReactComponentWithInnerSpan } from '../../React/ReactComponentWithInnerSpan';
import { DOMUtility } from '../../React/DOMUtility';

@autoinject
@customElement('modal')
@inlineView('<template><span id.bind="uniqueIdentifier" style="display:none;"></span><slot></slot></template>')
export class AuModal extends ReactComponent<React.FunctionComponent<IModalProps>, IModalProps> {
    constructor(element: Element) {
        super(element, Modal, ReactComponentWithInnerSpan);
    }

    attached() {
        super.attached();
        if (this.aureliaContainer) {
            DOMUtility.moveElements(this.element, this.aureliaContainer, this.uniqueIdentifier);
        }
    }

    getSourceElementToConsolidateFrom() {
        return this.aureliaContainer || this.element;
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
