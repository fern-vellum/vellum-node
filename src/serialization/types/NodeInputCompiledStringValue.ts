/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NodeInputCompiledStringValue: core.serialization.ObjectSchema<
    serializers.NodeInputCompiledStringValue.Raw,
    Vellum.NodeInputCompiledStringValue
> = core.serialization.object({
    nodeInputId: core.serialization.property("node_input_id", core.serialization.string()),
    key: core.serialization.string(),
    value: core.serialization.string().optional(),
});

export declare namespace NodeInputCompiledStringValue {
    interface Raw {
        node_input_id: string;
        key: string;
        value?: string | null;
    }
}
