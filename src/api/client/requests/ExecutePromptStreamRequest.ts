/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../..";

export interface ExecutePromptStreamRequest {
    /** The list of inputs defined in the Prompt's deployment with their corresponding values. */
    inputs: Vellum.PromptDeploymentInputRequest[];
    /** The ID of the Prompt Deployment. Must provide either this or prompt_deployment_name. */
    promptDeploymentId?: string;
    /** The name of the Prompt Deployment. Must provide either this or prompt_deployment_id. */
    promptDeploymentName?: string;
    /** Optionally specify a release tag if you want to pin to a specific release of the Prompt Deployment */
    releaseTag?: string;
    /** "Optionally include a unique identifier for tracking purposes. Must be unique for a given prompt deployment. */
    externalId?: string;
    /** The name of the Prompt Deployment. Must provide either this or prompt_deployment_id. */
    expandMeta?: Vellum.PromptDeploymentExpandMetaRequestRequest;
    rawOverrides?: Vellum.RawPromptExecutionOverridesRequest;
    /** Returns the raw API response data sent from the model host. Combined with `raw_overrides`, it can be used to access new features from models. */
    expandRaw?: string[];
    metadata?: Record<string, unknown>;
}
