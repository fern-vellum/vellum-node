/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const NodeOutputCompiledChatHistoryValue: core.serialization.ObjectSchema<
    serializers.NodeOutputCompiledChatHistoryValue.Raw,
    Vellum.NodeOutputCompiledChatHistoryValue
> = core.serialization.object({
    nodeOutputId: core.serialization.property("node_output_id", core.serialization.string()),
    value: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).ChatMessage))
        .optional(),
});

export declare namespace NodeOutputCompiledChatHistoryValue {
    interface Raw {
        node_output_id: string;
        value?: serializers.ChatMessage.Raw[] | null;
    }
}