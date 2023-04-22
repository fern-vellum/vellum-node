/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Vellum } from "vellum-ai";
import * as core from "../../core";

export const SlimDocument: core.serialization.ObjectSchema<serializers.SlimDocument.Raw, Vellum.SlimDocument> =
    core.serialization.object({
        id: core.serialization.string(),
        externalId: core.serialization.property("external_id", core.serialization.string().optional()),
        lastUploadedAt: core.serialization.property("last_uploaded_at", core.serialization.string()),
        label: core.serialization.string(),
        processingState: core.serialization.property(
            "processing_state",
            core.serialization.lazy(async () => (await import("..")).ProcessingStateEnum).optional()
        ),
        status: core.serialization.lazy(async () => (await import("..")).SlimDocumentStatusEnum).optional(),
        keywords: core.serialization.list(core.serialization.string()).optional(),
        documentToDocumentIndexes: core.serialization.property(
            "document_to_document_indexes",
            core.serialization.list(
                core.serialization.lazyObject(async () => (await import("..")).DocumentDocumentToDocumentIndex)
            )
        ),
    });

export declare namespace SlimDocument {
    interface Raw {
        id: string;
        external_id?: string | null;
        last_uploaded_at: string;
        label: string;
        processing_state?: serializers.ProcessingStateEnum.Raw | null;
        status?: serializers.SlimDocumentStatusEnum.Raw | null;
        keywords?: string[] | null;
        document_to_document_indexes: serializers.DocumentDocumentToDocumentIndex.Raw[];
    }
}
