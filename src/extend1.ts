/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { stuff } from "./extend2";

/**
 * Set of Request Headers that the Loader understands and may inspect or modify
 */
export interface IExtend1 {
    extend1: stuff;
}

declare module "./module" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface IRequestHeader extends Partial<IExtend1> { }
}
