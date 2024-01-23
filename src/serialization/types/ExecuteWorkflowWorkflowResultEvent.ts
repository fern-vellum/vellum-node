/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ExecuteWorkflowWorkflowResultEvent: core.serialization.Schema<
    serializers.ExecuteWorkflowWorkflowResultEvent.Raw,
    Vellum.ExecuteWorkflowWorkflowResultEvent
> = core.serialization
    .union("state", {
        FULFILLED: core.serialization.lazyObject(
            async () => (await import("..")).FulfilledExecuteWorkflowWorkflowResultEvent
        ),
        REJECTED: core.serialization.lazyObject(
            async () => (await import("..")).RejectedExecuteWorkflowWorkflowResultEvent
        ),
    })
    .transform<Vellum.ExecuteWorkflowWorkflowResultEvent>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ExecuteWorkflowWorkflowResultEvent {
    type Raw = ExecuteWorkflowWorkflowResultEvent.Fulfilled | ExecuteWorkflowWorkflowResultEvent.Rejected;

    interface Fulfilled extends serializers.FulfilledExecuteWorkflowWorkflowResultEvent.Raw {
        state: "FULFILLED";
    }

    interface Rejected extends serializers.RejectedExecuteWorkflowWorkflowResultEvent.Raw {
        state: "REJECTED";
    }
}
