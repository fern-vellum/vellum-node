/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NumberVariableValue: core.serialization.ObjectSchema<
    serializers.NumberVariableValue.Raw,
    Vellum.NumberVariableValue
> = core.serialization.object({
    value: core.serialization.number().optional(),
});

export declare namespace NumberVariableValue {
    interface Raw {
        value?: number | null;
    }
}
