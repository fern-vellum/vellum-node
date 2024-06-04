/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ReductoChunkerConfigRequest: core.serialization.ObjectSchema<
    serializers.ReductoChunkerConfigRequest.Raw,
    Vellum.ReductoChunkerConfigRequest
> = core.serialization.object({
    characterLimit: core.serialization.property("character_limit", core.serialization.number().optional()),
});

export declare namespace ReductoChunkerConfigRequest {
    interface Raw {
        character_limit?: number | null;
    }
}