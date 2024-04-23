/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ChatMessageEnum: core.serialization.Schema<serializers.ChatMessageEnum.Raw, Vellum.ChatMessageEnum> =
    core.serialization.stringLiteral("CHAT_MESSAGE");

export declare namespace ChatMessageEnum {
    type Raw = "CHAT_MESSAGE";
}