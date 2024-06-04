/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

/**
 * The final resolved function call value.
 */
export interface FunctionCallRequest {
    arguments: Record<string, unknown>;
    id?: string;
    name: string;
    state?: Vellum.FulfilledEnum;
}