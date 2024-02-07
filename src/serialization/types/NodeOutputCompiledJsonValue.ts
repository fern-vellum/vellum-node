/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NodeOutputCompiledJsonValue: core.serialization.ObjectSchema<
    serializers.NodeOutputCompiledJsonValue.Raw,
    Vellum.NodeOutputCompiledJsonValue
> = core.serialization.object({
    nodeOutputId: core.serialization.property("node_output_id", core.serialization.string()),
    value: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace NodeOutputCompiledJsonValue {
    interface Raw {
        node_output_id: string;
        value?: Record<string, unknown> | null;
    }
}
