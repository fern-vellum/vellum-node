/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { PromptOutput } from "./PromptOutput";
import { AdHocStreamingPromptExecutionMeta } from "./AdHocStreamingPromptExecutionMeta";

export const StreamingAdHocExecutePromptEvent: core.serialization.ObjectSchema<
    serializers.StreamingAdHocExecutePromptEvent.Raw,
    Vellum.StreamingAdHocExecutePromptEvent
> = core.serialization.object({
    state: core.serialization.stringLiteral("STREAMING"),
    output: PromptOutput,
    outputIndex: core.serialization.property("output_index", core.serialization.number()),
    executionId: core.serialization.property("execution_id", core.serialization.string()),
    meta: AdHocStreamingPromptExecutionMeta.optional(),
    raw: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace StreamingAdHocExecutePromptEvent {
    export interface Raw {
        state: "STREAMING";
        output: PromptOutput.Raw;
        output_index: number;
        execution_id: string;
        meta?: AdHocStreamingPromptExecutionMeta.Raw | null;
        raw?: Record<string, unknown> | null;
    }
}
