/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { IRequestHeader } from "./module";
import { exportedType } from "./extend1";

export function test(request: IRequestHeader, value: exportedType) {
    if (value) {
        return request.base;
    }
    return undefined;
}
