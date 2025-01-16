/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const FunctionCallChatMessageContentValueRequest: core.serialization.ObjectSchema<
    serializers.FunctionCallChatMessageContentValueRequest.Raw,
    Vellum.FunctionCallChatMessageContentValueRequest
> = core.serialization.object({
    name: core.serialization.string(),
    arguments: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    id: core.serialization.string().optional(),
});

export declare namespace FunctionCallChatMessageContentValueRequest {
    export interface Raw {
        name: string;
        arguments: Record<string, unknown>;
        id?: string | null;
    }
}
