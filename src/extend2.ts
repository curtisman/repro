/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export type stuff = boolean;
export interface IExtend2 {
    extend2: stuff;
}

declare module "./module" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface IRequestHeader extends Partial<IExtend2> { }
}
