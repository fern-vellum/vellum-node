/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptBlockState } from "./PromptBlockState";
import { EphemeralPromptCacheConfig } from "./EphemeralPromptCacheConfig";

export const FunctionCallPromptBlock: core.serialization.ObjectSchema<
    serializers.FunctionCallPromptBlock.Raw,
    Vellum.FunctionCallPromptBlock
> = core.serialization.object({
    blockType: core.serialization.property("block_type", core.serialization.stringLiteral("FUNCTION_CALL")),
    state: PromptBlockState.optional(),
    cacheConfig: core.serialization.property("cache_config", EphemeralPromptCacheConfig.optional()),
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    arguments: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
});

export declare namespace FunctionCallPromptBlock {
    interface Raw {
        block_type: "FUNCTION_CALL";
        state?: PromptBlockState.Raw | null;
        cache_config?: EphemeralPromptCacheConfig.Raw | null;
        id?: string | null;
        name: string;
        arguments: Record<string, unknown>;
    }
}