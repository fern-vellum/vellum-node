/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { OpenAiVectorizerConfig } from "./OpenAiVectorizerConfig";

export const OpenAiVectorizerTextEmbeddingAda002: core.serialization.ObjectSchema<
    serializers.OpenAiVectorizerTextEmbeddingAda002.Raw,
    Vellum.OpenAiVectorizerTextEmbeddingAda002
> = core.serialization.object({
    config: OpenAiVectorizerConfig,
});

export declare namespace OpenAiVectorizerTextEmbeddingAda002 {
    interface Raw {
        config: OpenAiVectorizerConfig.Raw;
    }
}
