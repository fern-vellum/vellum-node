/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const JsonVellumValueRequest: core.serialization.ObjectSchema<
    serializers.JsonVellumValueRequest.Raw,
    Vellum.JsonVellumValueRequest
> = core.serialization.object({
    value: core.serialization.unknown(),
});

export declare namespace JsonVellumValueRequest {
    interface Raw {
        value?: unknown;
    }
}