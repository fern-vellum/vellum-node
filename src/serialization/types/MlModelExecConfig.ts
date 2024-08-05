/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { MlModelFeature } from "./MlModelFeature";
import { MlModelTokenizerConfig } from "./MlModelTokenizerConfig";
import { MlModelRequestConfig } from "./MlModelRequestConfig";
import { MlModelResponseConfig } from "./MlModelResponseConfig";

export const MlModelExecConfig: core.serialization.ObjectSchema<
    serializers.MlModelExecConfig.Raw,
    Vellum.MlModelExecConfig
> = core.serialization.object({
    modelIdentifier: core.serialization.property("model_identifier", core.serialization.string()),
    baseUrl: core.serialization.property("base_url", core.serialization.string()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    features: core.serialization.list(MlModelFeature),
    tokenizerConfig: core.serialization.property("tokenizer_config", MlModelTokenizerConfig.optional()),
    requestConfig: core.serialization.property("request_config", MlModelRequestConfig.optional()),
    responseConfig: core.serialization.property("response_config", MlModelResponseConfig.optional()),
});

export declare namespace MlModelExecConfig {
    interface Raw {
        model_identifier: string;
        base_url: string;
        metadata: Record<string, unknown>;
        features: MlModelFeature.Raw[];
        tokenizer_config?: MlModelTokenizerConfig.Raw | null;
        request_config?: MlModelRequestConfig.Raw | null;
        response_config?: MlModelResponseConfig.Raw | null;
    }
}
