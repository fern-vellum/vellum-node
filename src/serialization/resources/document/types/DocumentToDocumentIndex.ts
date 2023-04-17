/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Vellum } from "@fern-api/vellum";
import * as core from "../../../../core";

export const DocumentToDocumentIndex: core.serialization.ObjectSchema<
    serializers.DocumentToDocumentIndex.Raw,
    Vellum.DocumentToDocumentIndex
> = core.serialization.object({
    id: core.serialization.string(),
    documentIndexId: core.serialization.property("document_index_id", core.serialization.string()),
    indexingState: core.serialization.property(
        "indexing_state",
        core.serialization.lazy(async () => (await import("../../..")).IndexingStateEnum).optional()
    ),
});

export declare namespace DocumentToDocumentIndex {
    interface Raw {
        id: string;
        document_index_id: string;
        indexing_state?: serializers.IndexingStateEnum.Raw | null;
    }
}
