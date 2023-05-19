/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ScenarioInputRequest: core.serialization.ObjectSchema<
    serializers.ScenarioInputRequest.Raw,
    Vellum.ScenarioInputRequest
> = core.serialization.object({
    key: core.serialization.string(),
    type: core.serialization.lazy(async () => (await import("..")).TypeEnum).optional(),
    value: core.serialization.string().optional(),
    chatHistory: core.serialization.property(
        "chat_history",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).ChatMessageRequest))
            .optional()
    ),
});

export declare namespace ScenarioInputRequest {
    interface Raw {
        key: string;
        type?: serializers.TypeEnum.Raw | null;
        value?: string | null;
        chat_history?: serializers.ChatMessageRequest.Raw[] | null;
    }
}