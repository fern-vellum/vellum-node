/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const RejectedWorkflowNodeResultEvent: core.serialization.ObjectSchema<
    serializers.RejectedWorkflowNodeResultEvent.Raw,
    Vellum.RejectedWorkflowNodeResultEvent
> = core.serialization.object({
    id: core.serialization.string(),
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    nodeResultId: core.serialization.property("node_result_id", core.serialization.string()),
    ts: core.serialization.date().optional(),
    data: core.serialization.lazy(async () => (await import("..")).WorkflowNodeResultData).optional(),
    sourceExecutionId: core.serialization.property("source_execution_id", core.serialization.string().optional()),
    error: core.serialization.lazyObject(async () => (await import("..")).WorkflowEventError),
});

export declare namespace RejectedWorkflowNodeResultEvent {
    interface Raw {
        id: string;
        node_id: string;
        node_result_id: string;
        ts?: string | null;
        data?: serializers.WorkflowNodeResultData.Raw | null;
        source_execution_id?: string | null;
        error: serializers.WorkflowEventError.Raw;
    }
}
