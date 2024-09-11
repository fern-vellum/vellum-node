/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { ChatMessageRequest } from "./ChatMessageRequest";

export const ChatHistoryVellumValueRequest: core.serialization.ObjectSchema<
    serializers.ChatHistoryVellumValueRequest.Raw,
    Vellum.ChatHistoryVellumValueRequest
> = core.serialization.object({
    type: core.serialization.stringLiteral("CHAT_HISTORY"),
    value: core.serialization.list(ChatMessageRequest).optional(),
});

export declare namespace ChatHistoryVellumValueRequest {
    interface Raw {
        type: "CHAT_HISTORY";
        value?: ChatMessageRequest.Raw[] | null;
    }
}
