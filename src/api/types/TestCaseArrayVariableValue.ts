/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

/**
 * An Array value for a variable in a Test Case.
 */
export interface TestCaseArrayVariableValue {
    variableId: string;
    name: string;
    value?: Vellum.ArrayVellumValueItem[];
}