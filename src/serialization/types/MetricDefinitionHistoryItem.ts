/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumVariable } from "./VellumVariable";

export const MetricDefinitionHistoryItem: core.serialization.ObjectSchema<
    serializers.MetricDefinitionHistoryItem.Raw,
    Vellum.MetricDefinitionHistoryItem
> = core.serialization.object({
    id: core.serialization.string(),
    label: core.serialization.string(),
    name: core.serialization.string(),
    description: core.serialization.string(),
    inputVariables: core.serialization.property("input_variables", core.serialization.list(VellumVariable)),
    outputVariables: core.serialization.property("output_variables", core.serialization.list(VellumVariable)),
});

export declare namespace MetricDefinitionHistoryItem {
    export interface Raw {
        id: string;
        label: string;
        name: string;
        description: string;
        input_variables: VellumVariable.Raw[];
        output_variables: VellumVariable.Raw[];
    }
}
