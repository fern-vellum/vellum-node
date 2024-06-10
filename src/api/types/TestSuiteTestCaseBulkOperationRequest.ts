/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export type TestSuiteTestCaseBulkOperationRequest =
    | Vellum.TestSuiteTestCaseBulkOperationRequest.Create
    | Vellum.TestSuiteTestCaseBulkOperationRequest.Replace
    | Vellum.TestSuiteTestCaseBulkOperationRequest.Delete;

export declare namespace TestSuiteTestCaseBulkOperationRequest {
    interface Create extends Vellum.TestSuiteTestCaseCreateBulkOperationRequest {
        type: "CREATE";
    }

    interface Replace extends Vellum.TestSuiteTestCaseReplaceBulkOperationRequest {
        type: "REPLACE";
    }

    interface Delete extends Vellum.TestSuiteTestCaseDeleteBulkOperationRequest {
        type: "DELETE";
    }
}