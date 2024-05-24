/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TextEmbeddingAda002Enum: core.serialization.Schema<
    serializers.TextEmbeddingAda002Enum.Raw,
    Vellum.TextEmbeddingAda002Enum
> = core.serialization.stringLiteral("text-embedding-ada-002");

export declare namespace TextEmbeddingAda002Enum {
    type Raw = "text-embedding-ada-002";
}
