/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const FulfilledExecuteWorkflowWorkflowResultEvent: core.serialization.ObjectSchema<
    serializers.FulfilledExecuteWorkflowWorkflowResultEvent.Raw,
    Vellum.FulfilledExecuteWorkflowWorkflowResultEvent
> = core.serialization.object({
    id: core.serialization.string(),
    ts: core.serialization.date(),
    outputs: core.serialization.list(core.serialization.lazy(async () => (await import("..")).WorkflowOutput)),
});

export declare namespace FulfilledExecuteWorkflowWorkflowResultEvent {
    interface Raw {
        id: string;
        ts: string;
        outputs: serializers.WorkflowOutput.Raw[];
    }
}
