/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunDeploymentReleaseTagExecConfig: core.serialization.ObjectSchema<
    serializers.TestSuiteRunDeploymentReleaseTagExecConfig.Raw,
    Vellum.TestSuiteRunDeploymentReleaseTagExecConfig
> = core.serialization.object({
    data: core.serialization.lazyObject(
        async () => (await import("..")).TestSuiteRunDeploymentReleaseTagExecConfigData
    ),
    testCaseIds: core.serialization.property(
        "test_case_ids",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace TestSuiteRunDeploymentReleaseTagExecConfig {
    interface Raw {
        data: serializers.TestSuiteRunDeploymentReleaseTagExecConfigData.Raw;
        test_case_ids?: string[] | null;
    }
}