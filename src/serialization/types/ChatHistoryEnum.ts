/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const ChatHistoryEnum: core.serialization.Schema<serializers.ChatHistoryEnum.Raw, Vellum.ChatHistoryEnum> =
    core.serialization.stringLiteral("CHAT_HISTORY");

export declare namespace ChatHistoryEnum {
    type Raw = "CHAT_HISTORY";
}
