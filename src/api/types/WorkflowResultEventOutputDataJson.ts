/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

/**
 * A JSON output streamed from a Workflow execution.
 */
export interface WorkflowResultEventOutputDataJson {
    id?: string;
    name: string;
    state: Vellum.WorkflowNodeResultEventState;
    nodeId: string;
    /** The newly output string value. Only relevant for string outputs with a state of STREAMING. */
    delta?: string;
    value?: Record<string, unknown>;
}
