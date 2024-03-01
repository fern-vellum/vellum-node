/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NodeInputCompiledArrayValue: core.serialization.ObjectSchema<
    serializers.NodeInputCompiledArrayValue.Raw,
    Vellum.NodeInputCompiledArrayValue
> = core.serialization.object({
    nodeInputId: core.serialization.property("node_input_id", core.serialization.string()),
    key: core.serialization.string(),
    value: core.serialization.list(core.serialization.lazy(async () => (await import("..")).ArrayVariableValueItem)),
});

export declare namespace NodeInputCompiledArrayValue {
    interface Raw {
        node_input_id: string;
        key: string;
        value: serializers.ArrayVariableValueItem.Raw[];
    }
}
