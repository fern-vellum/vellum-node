/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface ModelVersionRead {
    /** Vellum-generated ID that uniquely identifies this model version. */
    id: string;
    /** Timestamp of when this model version was created. */
    created: string;
    /** Human-friendly name for this model version. <span style="white-space: nowrap">`<= 150 characters`</span> */
    label: string;
    /**
     * The type of task this model is used for.
     *
     * * `GENERATE` - Generate
     * * `CLASSIFY` - Classify
     */
    modelType: Vellum.ModelTypeEnum;
    /**
     * Which LLM provider this model version is associated with.
     *
     * * `ANTHROPIC` - Anthropic
     * * `COHERE` - Cohere
     * * `GOOGLE` - Google
     * * `HOSTED` - Hosted
     * * `MOSAICML` - MosaicML
     * * `OPENAI` - OpenAI
     * * `PYQ` - Pyq
     */
    provider: Vellum.ProviderEnum;
    /** The unique id of this model version as it exists in the above provider's system. <span style="white-space: nowrap">`<= 250 characters`</span> */
    externalId: string;
    /** Configuration used to build this model version. */
    buildConfig: Vellum.ModelVersionBuildConfig;
    /** Configuration used to execute this model version. */
    execConfig: Vellum.ModelVersionExecConfig;
    status?: Vellum.ModelVersionReadStatusEnum;
}
