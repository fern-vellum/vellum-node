/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { WorkflowNodeResultEventState } from "./WorkflowNodeResultEventState";

export const WorkflowResultEventOutputDataArray: core.serialization.ObjectSchema<
    serializers.WorkflowResultEventOutputDataArray.Raw,
    Vellum.WorkflowResultEventOutputDataArray
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    state: WorkflowNodeResultEventState,
    nodeId: core.serialization.property("node_id", core.serialization.string()),
    delta: core.serialization.string().optional(),
    type: core.serialization.stringLiteral("ARRAY"),
    value: core.serialization.list(core.serialization.lazy(() => serializers.ArrayVariableValueItem)).optional(),
});

export declare namespace WorkflowResultEventOutputDataArray {
    interface Raw {
        id?: string | null;
        name: string;
        state: WorkflowNodeResultEventState.Raw;
        node_id: string;
        delta?: string | null;
        type: "ARRAY";
        value?: serializers.ArrayVariableValueItem.Raw[] | null;
    }
}
