// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { Constructor } from '@dolittle/rudiments';
import { ReactComponent } from './ReactComponent';

export class ReactChildComponent<TComponent extends React.Component<TProps, any> | React.FunctionComponent<TProps>, TProps> extends ReactComponent<TComponent, TProps> {
    constructor(element: Element, componentType?: Constructor<TComponent> | React.FunctionComponent<TProps>, wrapperType?: any) {
        super(element, componentType, wrapperType);
        ((element as any)?.style as CSSStyleDeclaration).display = 'none';
    }

    render() { }

    getChildRepresentation() {
        return this;
    }
}
