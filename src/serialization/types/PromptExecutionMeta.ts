/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FinishReasonEnum } from "./FinishReasonEnum";
import { MlModelUsage } from "./MlModelUsage";

export const PromptExecutionMeta: core.serialization.ObjectSchema<
    serializers.PromptExecutionMeta.Raw,
    Vellum.PromptExecutionMeta
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string().optional()),
    latency: core.serialization.number().optional(),
    deploymentReleaseTag: core.serialization.property("deployment_release_tag", core.serialization.string().optional()),
    promptVersionId: core.serialization.property("prompt_version_id", core.serialization.string().optional()),
    finishReason: core.serialization.property("finish_reason", FinishReasonEnum.optional()),
    usage: MlModelUsage.optional(),
});

export declare namespace PromptExecutionMeta {
    interface Raw {
        model_name?: string | null;
        latency?: number | null;
        deployment_release_tag?: string | null;
        prompt_version_id?: string | null;
        finish_reason?: FinishReasonEnum.Raw | null;
        usage?: MlModelUsage.Raw | null;
    }
}
