/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";
import { WorkflowResultEventOutputData } from "./WorkflowResultEventOutputData";
import { WorkflowEventError } from "./WorkflowEventError";
import { WorkflowOutput } from "./WorkflowOutput";
import { ExecutionVellumValue } from "./ExecutionVellumValue";

export const WorkflowResultEvent: core.serialization.ObjectSchema<
    serializers.WorkflowResultEvent.Raw,
    Vellum.WorkflowResultEvent
> = core.serialization.object({
    id: core.serialization.string(),
    state: WorkflowNodeResultEventState,
    ts: core.serialization.date(),
    output: WorkflowResultEventOutputData.optional(),
    error: WorkflowEventError.optional(),
    outputs: core.serialization.list(WorkflowOutput).optional(),
    inputs: core.serialization.list(ExecutionVellumValue).optional(),
});

export declare namespace WorkflowResultEvent {
    export interface Raw {
        id: string;
        state: WorkflowNodeResultEventState.Raw;
        ts: string;
        output?: WorkflowResultEventOutputData.Raw | null;
        error?: WorkflowEventError.Raw | null;
        outputs?: WorkflowOutput.Raw[] | null;
        inputs?: ExecutionVellumValue.Raw[] | null;
    }
}
