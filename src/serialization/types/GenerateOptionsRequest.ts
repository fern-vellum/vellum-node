/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Vellum } from "@fern-api/vellum";
import * as core from "../../core";

export const GenerateOptionsRequest: core.serialization.ObjectSchema<
    serializers.GenerateOptionsRequest.Raw,
    Vellum.GenerateOptionsRequest
> = core.serialization.object({
    logprobs: core.serialization.lazy(async () => (await import("..")).LogprobsEnum).optional(),
});

export declare namespace GenerateOptionsRequest {
    interface Raw {
        logprobs?: serializers.LogprobsEnum.Raw | null;
    }
}
