/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * Execution output of an entity evaluated during a Test Suite Run that is of type ARRAY
 */
export interface TestSuiteRunExecutionArrayOutput {
    name: string;
    value?: Vellum.ArrayVellumValueItem[];
    outputVariableId: string;
}
