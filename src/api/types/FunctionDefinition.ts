/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * The definition of a Function (aka "Tool Call") that a Prompt/Model has access to.
 */
export interface FunctionDefinition {
    state?: Vellum.PromptBlockState;
    cacheConfig?: Vellum.EphemeralPromptCacheConfig;
    /** The name identifying the function. */
    name?: string;
    /** A description to help guide the model when to invoke this function. */
    description?: string;
    /** An OpenAPI specification of parameters that are supported by this function. */
    parameters?: Record<string, unknown>;
    /** Set this option to true to force the model to return a function call of this function. */
    forced?: boolean;
    /** Set this option to use strict schema decoding when available. */
    strict?: boolean;
}
