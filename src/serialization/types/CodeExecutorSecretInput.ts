/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const CodeExecutorSecretInput: core.serialization.ObjectSchema<
    serializers.CodeExecutorSecretInput.Raw,
    Vellum.CodeExecutorSecretInput
> = core.serialization.object({
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("SECRET"),
    value: core.serialization.string(),
});

export declare namespace CodeExecutorSecretInput {
    export interface Raw {
        name: string;
        type: "SECRET";
        value: string;
    }
}
