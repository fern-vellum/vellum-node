/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../..";

/**
 * @example
 *     {
 *         inputs: []
 *     }
 */
export interface DeploymentProviderPayloadRequest {
    /** The ID of the deployment. Must provide either this or deployment_name. */
    deploymentId?: string;
    /** The name of the deployment. Must provide either this or deployment_id. */
    deploymentName?: string;
    /** The list of inputs defined in the Prompt's deployment with their corresponding values. */
    inputs: Vellum.PromptDeploymentInputRequest[];
    /** Optionally specify a release tag if you want to pin to a specific release of the Workflow Deployment */
    releaseTag?: string;
}