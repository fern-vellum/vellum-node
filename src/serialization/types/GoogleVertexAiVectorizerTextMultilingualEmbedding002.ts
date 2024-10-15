/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { GoogleVertexAiVectorizerConfig } from "./GoogleVertexAiVectorizerConfig";

export const GoogleVertexAiVectorizerTextMultilingualEmbedding002: core.serialization.ObjectSchema<
    serializers.GoogleVertexAiVectorizerTextMultilingualEmbedding002.Raw,
    Vellum.GoogleVertexAiVectorizerTextMultilingualEmbedding002
> = core.serialization.object({
    modelName: core.serialization.property(
        "model_name",
        core.serialization.stringLiteral("text-multilingual-embedding-002")
    ),
    config: GoogleVertexAiVectorizerConfig,
});

export declare namespace GoogleVertexAiVectorizerTextMultilingualEmbedding002 {
    interface Raw {
        model_name: "text-multilingual-embedding-002";
        config: GoogleVertexAiVectorizerConfig.Raw;
    }
}