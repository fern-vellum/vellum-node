/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Vellum } from "vellum-ai";

export interface GenerateResultData {
    /** The generated completions. This will generally be a list of length one. */
    completions: Vellum.EnrichedNormalizedCompletion[];
}
