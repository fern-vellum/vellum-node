/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface WorkflowResultEvent {
    id: string;
    state: Vellum.WorkflowResultEventStateEnum;
    ts: string;
    error?: string;
}