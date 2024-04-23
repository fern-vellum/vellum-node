/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { PromptTemplateBlockState } from "./PromptTemplateBlockState";
import { JinjaPromptTemplateBlockPropertiesRequest } from "./JinjaPromptTemplateBlockPropertiesRequest";

export const JinjaPromptTemplateBlockRequest: core.serialization.ObjectSchema<
    serializers.JinjaPromptTemplateBlockRequest.Raw,
    Vellum.JinjaPromptTemplateBlockRequest
> = core.serialization.object({
    id: core.serialization.string(),
    state: PromptTemplateBlockState.optional(),
    properties: JinjaPromptTemplateBlockPropertiesRequest,
});

export declare namespace JinjaPromptTemplateBlockRequest {
    interface Raw {
        id: string;
        state?: PromptTemplateBlockState.Raw | null;
        properties: JinjaPromptTemplateBlockPropertiesRequest.Raw;
    }
}