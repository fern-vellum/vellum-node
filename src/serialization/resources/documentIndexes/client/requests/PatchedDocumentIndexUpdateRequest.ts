/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vellum from "../../../../../api";
import * as core from "../../../../../core";

export const PatchedDocumentIndexUpdateRequest: core.serialization.Schema<
    serializers.PatchedDocumentIndexUpdateRequest.Raw,
    Vellum.PatchedDocumentIndexUpdateRequest
> = core.serialization.object({
    label: core.serialization.string().optional(),
    status: core.serialization.lazy(async () => (await import("../../../..")).EntityStatus).optional(),
    environment: core.serialization.lazy(async () => (await import("../../../..")).EnvironmentEnum).optional(),
});

export declare namespace PatchedDocumentIndexUpdateRequest {
    interface Raw {
        label?: string | null;
        status?: serializers.EntityStatus.Raw | null;
        environment?: serializers.EnvironmentEnum.Raw | null;
    }
}
