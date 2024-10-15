/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const NumberInputRequest: core.serialization.ObjectSchema<
    serializers.NumberInputRequest.Raw,
    Vellum.NumberInputRequest
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("NUMBER"),
    value: core.serialization.number(),
});

export declare namespace NumberInputRequest {
    interface Raw {
        name: string;
        type: "NUMBER";
        value: number;
    }
}