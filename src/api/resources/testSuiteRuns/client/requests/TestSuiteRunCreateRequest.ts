/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {
 *         execConfig: {
 *             type: "DEPLOYMENT_RELEASE_TAG",
 *             data: {
 *                 deploymentId: "deployment_id"
 *             }
 *         }
 *     }
 */
export interface TestSuiteRunCreateRequest {
    /** The ID of the Test Suite to run. Must provide either this or test_suite_id. */
    testSuiteId?: string;
    /** The name of the Test Suite to run. Must provide either this or test_suite_id. */
    testSuiteName?: string;
    /** Configuration that defines how the Test Suite should be run */
    execConfig: Vellum.TestSuiteRunExecConfigRequest;
}
