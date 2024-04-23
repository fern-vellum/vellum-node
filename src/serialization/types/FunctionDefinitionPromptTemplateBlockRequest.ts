/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { PromptTemplateBlockState } from "./PromptTemplateBlockState";
import { FunctionDefinitionPromptTemplateBlockPropertiesRequest } from "./FunctionDefinitionPromptTemplateBlockPropertiesRequest";

export const FunctionDefinitionPromptTemplateBlockRequest: core.serialization.ObjectSchema<
    serializers.FunctionDefinitionPromptTemplateBlockRequest.Raw,
    Vellum.FunctionDefinitionPromptTemplateBlockRequest
> = core.serialization.object({
    id: core.serialization.string(),
    state: PromptTemplateBlockState.optional(),
    properties: FunctionDefinitionPromptTemplateBlockPropertiesRequest,
});

export declare namespace FunctionDefinitionPromptTemplateBlockRequest {
    interface Raw {
        id: string;
        state?: PromptTemplateBlockState.Raw | null;
        properties: FunctionDefinitionPromptTemplateBlockPropertiesRequest.Raw;
    }
}