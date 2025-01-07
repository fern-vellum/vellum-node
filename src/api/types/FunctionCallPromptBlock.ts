/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * A block that represents a function call in a prompt template.
 */
export interface FunctionCallPromptBlock {
    blockType: "FUNCTION_CALL";
    state?: Vellum.PromptBlockState;
    cacheConfig?: Vellum.EphemeralPromptCacheConfig;
    id?: string;
    name: string;
    arguments: Record<string, unknown>;
}
