/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../..";

/**
 * @example
 *     {
 *         query: "string",
 *         options: {
 *             weights: {},
 *             resultMerging: {},
 *             filters: {
 *                 metadata: {
 *                     combinator: Vellum.MetadataFilterRuleCombinator.And,
 *                     operator: Vellum.LogicalOperator.Equals
 *                 }
 *             }
 *         }
 *     }
 */
export interface SearchRequestBodyRequest {
    /** The ID of the index to search against. Must provide either this or index_name. */
    indexId?: string;
    /** The name of the index to search against. Must provide either this or index_id. */
    indexName?: string;
    /** The query to search for. */
    query: string;
    /** Configuration options for the search. */
    options?: Vellum.SearchRequestOptionsRequest;
}
