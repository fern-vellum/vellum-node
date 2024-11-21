/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vellum from "../../../../../api/index";
import * as core from "../../../../../core";
import { PromptRequestInput } from "../../../../types/PromptRequestInput";
import { VellumVariable } from "../../../../types/VellumVariable";
import { PromptParameters } from "../../../../types/PromptParameters";
import { PromptSettings } from "../../../../types/PromptSettings";
import { FunctionDefinition } from "../../../../types/FunctionDefinition";
import { AdHocExpandMeta } from "../../../../types/AdHocExpandMeta";

export const AdHocExecutePromptStream: core.serialization.Schema<
    serializers.AdHocExecutePromptStream.Raw,
    Vellum.AdHocExecutePromptStream
> = core.serialization.object({
    mlModel: core.serialization.property("ml_model", core.serialization.string()),
    inputValues: core.serialization.property("input_values", core.serialization.list(PromptRequestInput)),
    inputVariables: core.serialization.property("input_variables", core.serialization.list(VellumVariable)),
    parameters: PromptParameters,
    settings: PromptSettings.optional(),
    blocks: core.serialization.list(core.serialization.lazy(() => serializers.PromptBlock)),
    functions: core.serialization.list(FunctionDefinition).optional(),
    expandMeta: core.serialization.property("expand_meta", AdHocExpandMeta.optional()),
});

export declare namespace AdHocExecutePromptStream {
    interface Raw {
        ml_model: string;
        input_values: PromptRequestInput.Raw[];
        input_variables: VellumVariable.Raw[];
        parameters: PromptParameters.Raw;
        settings?: PromptSettings.Raw | null;
        blocks: serializers.PromptBlock.Raw[];
        functions?: FunctionDefinition.Raw[] | null;
        expand_meta?: AdHocExpandMeta.Raw | null;
    }
}
