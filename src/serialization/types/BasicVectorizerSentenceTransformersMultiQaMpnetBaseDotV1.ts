/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1: core.serialization.ObjectSchema<
    serializers.BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1.Raw,
    Vellum.BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1
> = core.serialization.object({
    config: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1 {
    interface Raw {
        config?: Record<string, unknown> | null;
    }
}
