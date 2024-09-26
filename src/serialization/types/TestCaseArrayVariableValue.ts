/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const TestCaseArrayVariableValue: core.serialization.ObjectSchema<
    serializers.TestCaseArrayVariableValue.Raw,
    Vellum.TestCaseArrayVariableValue
> = core.serialization.object({
    variableId: core.serialization.property("variable_id", core.serialization.string()),
    name: core.serialization.string(),
    type: core.serialization.stringLiteral("ARRAY"),
    value: core.serialization.list(core.serialization.lazy(() => serializers.ArrayVellumValueItem)).optional(),
});

export declare namespace TestCaseArrayVariableValue {
    interface Raw {
        variable_id: string;
        name: string;
        type: "ARRAY";
        value?: serializers.ArrayVellumValueItem.Raw[] | null;
    }
}
