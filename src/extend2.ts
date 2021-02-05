/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export type stuff = boolean;
declare module "./module" {
    export interface IRequestHeader { 
        extend2: stuff;
    }
}
