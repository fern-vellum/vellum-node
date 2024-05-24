/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { AddOpenaiApiKeyEnum } from "./AddOpenaiApiKeyEnum";

export const OpenAiVectorizerConfigRequest: core.serialization.ObjectSchema<
    serializers.OpenAiVectorizerConfigRequest.Raw,
    Vellum.OpenAiVectorizerConfigRequest
> = core.serialization.object({
    addOpenaiApiKey: core.serialization.property("add_openai_api_key", AddOpenaiApiKeyEnum.optional()),
});

export declare namespace OpenAiVectorizerConfigRequest {
    interface Raw {
        add_openai_api_key?: AddOpenaiApiKeyEnum.Raw | null;
    }
}
