// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react';

import { autoinject, customElement, inlineView } from 'aurelia-framework';

import { Panel, IPanelProps, PanelType } from 'office-ui-fabric-react';

import { ReactComponent } from '../../React/ReactComponent';
import { ReactComponentWithInnerSpan } from '../../React/ReactComponentWithInnerSpan';
import { DOMUtility } from '../../React/DOMUtility';
import { KeyValueTypeConverter, propertyConverter } from '../../index';

const panelTypes = {
    'smallFluid': PanelType.smallFluid,
    'smallFixedFar': PanelType.smallFixedFar,
    'smallFixedNear': PanelType.smallFixedNear,
    'medium': PanelType.medium,
    'large': PanelType.large,
    'extraLarge': PanelType.extraLarge,
    'custom': PanelType.custom,
    'customNear': PanelType.customNear
};

@autoinject
@customElement('panel')
@inlineView('<template><span id.bind="uniqueIdentifier" style="display:none;"></span><slot></slot></template>')
export class AuPanel extends ReactComponent<React.FunctionComponent<IPanelProps>, IPanelProps> {

    constructor(element: Element) {
        super(element, Panel, ReactComponentWithInnerSpan);
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

    @propertyConverter('panelType', new KeyValueTypeConverter(panelTypes))
    get type(): PanelType { return PanelType.smallFixedFar; }

}

AuPanel.properties<IPanelProps>({
    className: {} as any,
    styles: {} as any,
    theme: {} as any,
    isOpen: {} as any,
    hasCloseButton: {} as any,
    isLightDismiss: {} as any,
    isHiddenOnDismiss: {} as any,
    isBlocking: {} as any,
    isFooterAtBottom: {} as any,
    headerText: {} as any,
    headerTextProps: {} as any,
    type: {} as any,
    customWidth: {} as any,
    closeButtonAriaLabel: {} as any,
    headerClassName: {} as any,
    elementToFocusOnDismiss: {} as any,
    ignoreExternalFocusing: {} as any,
    forceFocusInsideTrap: {} as any,
    firstFocusableSelector: {} as any,
    focusTrapZoneProps: {} as any,
    layerProps: {} as any,
    overlayProps: {} as any,
    allowTouchBodyScroll: {} as any,

    onOpen: () => {},
    onOpened: () => {},
    onDismiss: () => {},
    onDismissed: () => {},
    onLightDismissClick: () => {},
    onOuterClick: () => {}
});
