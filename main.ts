
import { IRequestHeader } from "@fluidframework/core-interfaces";
import { ILoaderHeader } from "./extend1";

type RuntimeRequestHandler = ILoaderHeader;

export function test(request: IRequestHeader, handler?: RuntimeRequestHandler) {
    if (handler) {
        return request.blah;
    }
    return undefined;
}
