/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {
 *         parentFolderId: "parent_folder_id"
 *     }
 */
export interface FolderEntitiesListRequest {
    /**
     * Filter down to only those objects whose entities have a status matching the status specified.
     *
     * - `ACTIVE` - Active
     * - `ARCHIVED` - Archived
     */
    entityStatus?: Vellum.FolderEntitiesListRequestEntityStatus;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    /**
     * Which field to use when ordering the results.
     */
    ordering?: string;
    /**
     * Filter down to only those entities whose parent folder has the specified ID.
     *
     * To filter by an entity's parent folder, provide the ID of the parent folder. To filter by the root directory, provide
     * a string representing the entity type of the root directory. Supported root directories include:
     *
     * - PROMPT_SANDBOX
     * - WORKFLOW_SANDBOX
     * - DOCUMENT_INDEX
     * - TEST_SUITE
     */
    parentFolderId: string;
}