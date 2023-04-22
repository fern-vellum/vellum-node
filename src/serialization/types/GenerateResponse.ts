/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Vellum } from "vellum-ai";
import * as core from "../../core";

export const GenerateResponse: core.serialization.ObjectSchema<
    serializers.GenerateResponse.Raw,
    Vellum.GenerateResponse
> = core.serialization.object({
    results: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).GenerateResult)),
});

export declare namespace GenerateResponse {
    interface Raw {
        results: serializers.GenerateResult.Raw[];
    }
}
