/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { OpenApiEnumPropertyRequestEnumItem } from "./OpenApiEnumPropertyRequestEnumItem";
import { OpenApiEnumPropertyRequestDefault } from "./OpenApiEnumPropertyRequestDefault";

export const OpenApiEnumPropertyRequest: core.serialization.ObjectSchema<
    serializers.OpenApiEnumPropertyRequest.Raw,
    Vellum.OpenApiEnumPropertyRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("enum"),
    title: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    enum: core.serialization.list(OpenApiEnumPropertyRequestEnumItem.optional()),
    default: OpenApiEnumPropertyRequestDefault.optional(),
});

export declare namespace OpenApiEnumPropertyRequest {
    interface Raw {
        type: "enum";
        title?: string | null;
        description?: string | null;
        enum: (OpenApiEnumPropertyRequestEnumItem.Raw | null | undefined)[];
        default?: OpenApiEnumPropertyRequestDefault.Raw | null;
    }
}
