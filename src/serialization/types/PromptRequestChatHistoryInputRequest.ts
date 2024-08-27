/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessageRequest } from "./ChatMessageRequest";

export const PromptRequestChatHistoryInputRequest: core.serialization.ObjectSchema<
    serializers.PromptRequestChatHistoryInputRequest.Raw,
    Vellum.PromptRequestChatHistoryInputRequest
> = core.serialization.object({
    key: core.serialization.string(),
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessageRequest),
});

export declare namespace PromptRequestChatHistoryInputRequest {
    interface Raw {
        key: string;
        type: "CHAT_HISTORY";
        value: ChatMessageRequest.Raw[];
    }
}