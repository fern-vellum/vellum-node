/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Vellum } from "@fern-api/vellum";
import * as core from "../../../../core";

export const ErrorResponse: core.serialization.ObjectSchema<serializers.ErrorResponse.Raw, Vellum.ErrorResponse> =
    core.serialization.object({
        detail: core.serialization.string().optional(),
    });

export declare namespace ErrorResponse {
    interface Raw {
        detail?: string | null;
    }
}
