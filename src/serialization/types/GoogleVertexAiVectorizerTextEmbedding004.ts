/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { GoogleVertexAiVectorizerConfig } from "./GoogleVertexAiVectorizerConfig";

export const GoogleVertexAiVectorizerTextEmbedding004: core.serialization.ObjectSchema<
    serializers.GoogleVertexAiVectorizerTextEmbedding004.Raw,
    Vellum.GoogleVertexAiVectorizerTextEmbedding004
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.stringLiteral("text-embedding-004")),
    config: GoogleVertexAiVectorizerConfig,
});

export declare namespace GoogleVertexAiVectorizerTextEmbedding004 {
    interface Raw {
        model_name: "text-embedding-004";
        config: GoogleVertexAiVectorizerConfig.Raw;
    }
}