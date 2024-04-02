/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface MetadataFilterConfigRequest {
    combinator?: Vellum.MetadataFilterRuleCombinator;
    negated?: boolean;
    rules?: Vellum.MetadataFilterRuleRequest[];
    field?: string;
    operator?: Vellum.LogicalOperator;
    value?: string;
}