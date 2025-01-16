/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { SearchResult } from "./SearchResult";

export const NamedTestCaseSearchResultsVariableValue: core.serialization.ObjectSchema<
    serializers.NamedTestCaseSearchResultsVariableValue.Raw,
    Vellum.NamedTestCaseSearchResultsVariableValue
> = core.serialization.object({
    type: core.serialization.stringLiteral("SEARCH_RESULTS"),
    value: core.serialization.list(SearchResult).optional(),
    name: core.serialization.string(),
});

export declare namespace NamedTestCaseSearchResultsVariableValue {
    export interface Raw {
        type: "SEARCH_RESULTS";
        value?: SearchResult.Raw[] | null;
        name: string;
    }
}
