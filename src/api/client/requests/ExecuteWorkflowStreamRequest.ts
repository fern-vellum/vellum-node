/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../index";

/**
 * @example
 *     {
 *         inputs: [{
 *                 name: "name",
 *                 type: "STRING",
 *                 value: "value"
 *             }]
 *     }
 */
export interface ExecuteWorkflowStreamRequest {
    /** The list of inputs defined in the Workflow's Deployment with their corresponding values. */
    inputs: Vellum.WorkflowRequestInputRequest[];
    /** An optionally specified configuration used to opt in to including additional metadata about this workflow execution in the API response. Corresponding values will be returned under the `execution_meta` key within NODE events in the response stream. */
    expandMeta?: Vellum.WorkflowExpandMetaRequest;
    /** The ID of the Workflow Deployment. Must provide either this or workflow_deployment_name. */
    workflowDeploymentId?: string;
    /** The name of the Workflow Deployment. Must provide either this or workflow_deployment_id. */
    workflowDeploymentName?: string;
    /** Optionally specify a release tag if you want to pin to a specific release of the Workflow Deployment */
    releaseTag?: string;
    /** Optionally include a unique identifier for tracking purposes. Must be unique for a given workflow deployment. */
    externalId?: string;
    /** Optionally specify which events you want to receive. Defaults to only WORKFLOW events. Note that the schema of non-WORKFLOW events is unstable and should be used with caution. */
    eventTypes?: Vellum.WorkflowExecutionEventType[];
    /** Arbitrary JSON metadata associated with this request. Can be used to capture additional monitoring data such as user id, session id, etc. for future analysis. */
    metadata?: Record<string, unknown>;
}
