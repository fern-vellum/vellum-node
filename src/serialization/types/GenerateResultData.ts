/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { EnrichedNormalizedCompletion } from "./EnrichedNormalizedCompletion";

export const GenerateResultData: core.serialization.ObjectSchema<
    serializers.GenerateResultData.Raw,
    Vellum.GenerateResultData
> = core.serialization.object({
    completions: core.serialization.list(EnrichedNormalizedCompletion),
});

export declare namespace GenerateResultData {
    export interface Raw {
        completions: EnrichedNormalizedCompletion.Raw[];
    }
}
