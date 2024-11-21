/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptBlockState } from "./PromptBlockState";
import { EphemeralPromptCacheConfig } from "./EphemeralPromptCacheConfig";

export const FunctionDefinition: core.serialization.ObjectSchema<
    serializers.FunctionDefinition.Raw,
    Vellum.FunctionDefinition
> = core.serialization.object({
    state: PromptBlockState.optional(),
    cacheConfig: core.serialization.property("cache_config", EphemeralPromptCacheConfig.optional()),
    name: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    parameters: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    forced: core.serialization.boolean().optional(),
    strict: core.serialization.boolean().optional(),
});

export declare namespace FunctionDefinition {
    interface Raw {
        state?: PromptBlockState.Raw | null;
        cache_config?: EphemeralPromptCacheConfig.Raw | null;
        name?: string | null;
        description?: string | null;
        parameters?: Record<string, unknown> | null;
        forced?: boolean | null;
        strict?: boolean | null;
    }
}
