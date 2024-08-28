/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vellum from "../../../../../api/index";
import * as core from "../../../../../core";
import { NamedScenarioInputRequest } from "../../../../types/NamedScenarioInputRequest";

export const UpsertSandboxScenarioRequest: core.serialization.Schema<
    serializers.UpsertSandboxScenarioRequest.Raw,
    Vellum.UpsertSandboxScenarioRequest
> = core.serialization.object({
    label: core.serialization.string().optional(),
    inputs: core.serialization.list(NamedScenarioInputRequest),
    scenarioId: core.serialization.property("scenario_id", core.serialization.string().optional()),
});

export declare namespace UpsertSandboxScenarioRequest {
    interface Raw {
        label?: string | null;
        inputs: NamedScenarioInputRequest.Raw[];
        scenario_id?: string | null;
    }
}