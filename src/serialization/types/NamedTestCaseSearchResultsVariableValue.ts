/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { SearchResult } from "./SearchResult";

export const NamedTestCaseSearchResultsVariableValue: core.serialization.ObjectSchema<
    serializers.NamedTestCaseSearchResultsVariableValue.Raw,
    Vellum.NamedTestCaseSearchResultsVariableValue
> = core.serialization.object({
    value: core.serialization.list(SearchResult).optional(),
    name: core.serialization.string(),
});

export declare namespace NamedTestCaseSearchResultsVariableValue {
    interface Raw {
        value?: SearchResult.Raw[] | null;
        name: string;
    }
}