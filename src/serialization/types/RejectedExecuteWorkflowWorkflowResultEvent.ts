/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const RejectedExecuteWorkflowWorkflowResultEvent: core.serialization.ObjectSchema<
    serializers.RejectedExecuteWorkflowWorkflowResultEvent.Raw,
    Vellum.RejectedExecuteWorkflowWorkflowResultEvent
> = core.serialization.object({
    id: core.serialization.string(),
    ts: core.serialization.date(),
    error: core.serialization.lazyObject(async () => (await import("..")).WorkflowEventError),
});

export declare namespace RejectedExecuteWorkflowWorkflowResultEvent {
    interface Raw {
        id: string;
        ts: string;
        error: serializers.WorkflowEventError.Raw;
    }
}