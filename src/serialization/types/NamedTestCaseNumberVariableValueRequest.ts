/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NamedTestCaseNumberVariableValueRequest: core.serialization.ObjectSchema<
    serializers.NamedTestCaseNumberVariableValueRequest.Raw,
    Vellum.NamedTestCaseNumberVariableValueRequest
> = core.serialization.object({
    name: core.serialization.string(),
    value: core.serialization.number().optional(),
});

export declare namespace NamedTestCaseNumberVariableValueRequest {
    interface Raw {
        name: string;
        value?: number | null;
    }
}