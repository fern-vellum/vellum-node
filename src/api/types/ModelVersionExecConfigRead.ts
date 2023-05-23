/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface ModelVersionExecConfigRead {
    /** The generation parameters that are passed to the LLM provider at runtime. */
    parameters: Vellum.ModelVersionExecConfigParameters;
    /** Names of the input variables specified in the prompt template. */
    inputVariables: Vellum.PromptTemplateInputVariable[];
    /** The template used to generate prompts for this model version. */
    promptTemplate?: string;
    promptBlockData?: Vellum.PromptTemplateBlockData;
    promptSyntaxVersion: number;
}
