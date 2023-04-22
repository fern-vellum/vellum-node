/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Vellum } from "vellum-ai";

export interface GenerateRequestBodyRequest {
    /** The ID of the deployment. Must provide either this or deployment_name. */
    deploymentId?: string;
    /** The name of the deployment. Must provide either this or deployment_id. */
    deploymentName?: string;
    /** The generation requests to make. Supplying multiple will perform a bulk request to the LLM provided when possible. */
    requests: Vellum.GenerateRequestRequest[];
    /** Additional configuration that can be used to control what's included in the response. */
    options?: Vellum.GenerateOptionsRequest;
}
