/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NamedScenarioInputStringVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedScenarioInputStringVariableValueRequest.Raw,
    Vellum.NamedScenarioInputStringVariableValueRequest
> = core.serialization.object({
    value: core.serialization.string().optional(),
    name: core.serialization.string(),
});

export declare namespace NamedScenarioInputStringVariableValueRequest {
    interface Raw {
        value?: string | null;
        name: string;
    }
}