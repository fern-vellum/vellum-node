/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { ChatMessageRole } from "./ChatMessageRole";

export const ChatMessagePromptTemplateBlockProperties: core.serialization.ObjectSchema<
    serializers.ChatMessagePromptTemplateBlockProperties.Raw,
    Vellum.ChatMessagePromptTemplateBlockProperties
> = core.serialization.object({
    blocks: core.serialization.list(core.serialization.lazy(async () => (await import("..")).PromptTemplateBlock)),
    chatRole: core.serialization.property("chat_role", ChatMessageRole.optional()),
    chatSource: core.serialization.property("chat_source", core.serialization.string().optional()),
    chatMessageUnterminated: core.serialization.property(
        "chat_message_unterminated",
        core.serialization.boolean().optional()
    ),
});

export declare namespace ChatMessagePromptTemplateBlockProperties {
    interface Raw {
        blocks: serializers.PromptTemplateBlock.Raw[];
        chat_role?: ChatMessageRole.Raw | null;
        chat_source?: string | null;
        chat_message_unterminated?: boolean | null;
    }
}