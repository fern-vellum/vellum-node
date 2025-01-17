/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const ExecutionJsonVellumValue: core.serialization.ObjectSchema<
    serializers.ExecutionJsonVellumValue.Raw,
    Vellum.ExecutionJsonVellumValue
> = core.serialization.object({
    id: core.serialization.string(),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("JSON"),
    value: core.serialization.unknown(),
});

export declare namespace ExecutionJsonVellumValue {
    export interface Raw {
        id: string;
        name: string;
        type: "JSON";
        value?: unknown;
    }
}
