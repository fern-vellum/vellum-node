/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TestSuiteRunWorkflowReleaseTagExecConfig: core.serialization.ObjectSchema<
    serializers.TestSuiteRunWorkflowReleaseTagExecConfig.Raw,
    Vellum.TestSuiteRunWorkflowReleaseTagExecConfig
> = core.serialization.object({
    data: core.serialization.lazyObject(async () => (await import("..")).TestSuiteRunWorkflowReleaseTagExecConfigData),
    testCaseIds: core.serialization.property(
        "test_case_ids",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace TestSuiteRunWorkflowReleaseTagExecConfig {
    interface Raw {
        data: serializers.TestSuiteRunWorkflowReleaseTagExecConfigData.Raw;
        test_case_ids?: string[] | null;
    }
}