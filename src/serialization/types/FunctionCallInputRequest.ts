/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FunctionCallRequest } from "./FunctionCallRequest";

export const FunctionCallInputRequest: core.serialization.ObjectSchema<
    serializers.FunctionCallInputRequest.Raw,
    Vellum.FunctionCallInputRequest
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("FUNCTION_CALL"),
    value: FunctionCallRequest,
});

export declare namespace FunctionCallInputRequest {
    interface Raw {
        name: string;
        type: "FUNCTION_CALL";
        value: FunctionCallRequest.Raw;
    }
}