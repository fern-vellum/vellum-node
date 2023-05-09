/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vellum from "../../../../../api";
import * as core from "../../../../../core";

export const UpsertSandboxScenarioRequestRequest: core.serialization.Schema<
    serializers.UpsertSandboxScenarioRequestRequest.Raw,
    Vellum.UpsertSandboxScenarioRequestRequest
> = core.serialization.object({
    label: core.serialization.string().optional(),
    inputs: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../..")).SandboxInputRequest)
    ),
    metricInputParams: core.serialization.property(
        "metric_input_params",
        core.serialization
            .lazyObject(async () => (await import("../../../..")).SandboxMetricInputParamsRequest)
            .optional()
    ),
    id: core.serialization.string().optional(),
});

export declare namespace UpsertSandboxScenarioRequestRequest {
    interface Raw {
        label?: string | null;
        inputs: serializers.SandboxInputRequest.Raw[];
        metric_input_params?: serializers.SandboxMetricInputParamsRequest.Raw | null;
        id?: string | null;
    }
}
