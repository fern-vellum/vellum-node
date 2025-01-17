/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const WorkflowExecutionEventType: core.serialization.Schema<
    serializers.WorkflowExecutionEventType.Raw,
    Vellum.WorkflowExecutionEventType
> = core.serialization.enum_(["NODE", "WORKFLOW"]);

export declare namespace WorkflowExecutionEventType {
    export type Raw = "NODE" | "WORKFLOW";
}
