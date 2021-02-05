/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { stuff } from "./extend2";
export type exportedType = string;
declare module "./module" {
    export interface IRequestHeader {
        extend1: stuff;
    }
}
