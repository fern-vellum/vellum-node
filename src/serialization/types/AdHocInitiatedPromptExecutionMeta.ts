/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const AdHocInitiatedPromptExecutionMeta: core.serialization.ObjectSchema<
    serializers.AdHocInitiatedPromptExecutionMeta.Raw,
    Vellum.AdHocInitiatedPromptExecutionMeta
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string().optional()),
    latency: core.serialization.number().optional(),
});

export declare namespace AdHocInitiatedPromptExecutionMeta {
    export interface Raw {
        model_name?: string | null;
        latency?: number | null;
    }
}
