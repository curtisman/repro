/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { IRequestHeader } from "./module";
import { IExtend1 } from "./extend1";

export function test(request: IRequestHeader, handler?: IExtend1) {
    if (handler) {
        return request.base;
    }
    return undefined;
}
