/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptBlockState } from "./PromptBlockState";
import { EphemeralPromptCacheConfig } from "./EphemeralPromptCacheConfig";

export const VariablePromptBlock: core.serialization.ObjectSchema<
    serializers.VariablePromptBlock.Raw,
    Vellum.VariablePromptBlock
> = core.serialization.object({
    blockType: core.serialization.property("block_type", core.serialization.stringLiteral("VARIABLE")),
    state: PromptBlockState.optional(),
    cacheConfig: core.serialization.property("cache_config", EphemeralPromptCacheConfig.optional()),
    inputVariable: core.serialization.property("input_variable", core.serialization.string()),
});

export declare namespace VariablePromptBlock {
    interface Raw {
        block_type: "VARIABLE";
        state?: PromptBlockState.Raw | null;
        cache_config?: EphemeralPromptCacheConfig.Raw | null;
        input_variable: string;
    }
}
