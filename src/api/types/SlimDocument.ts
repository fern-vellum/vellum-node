/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface SlimDocument {
    /** Vellum-generated ID that uniquely identifies this document. */
    id: string;
    /** The external ID that was originally provided when uploading the document. */
    externalId?: string;
    /** A timestamp representing when this document was most recently uploaded. */
    lastUploadedAt: Date;
    /** Human-friendly name for this document. */
    label: string;
    processingState: Vellum.DocumentProcessingState;
    /**
     * An enum value representing why the document could not be processed. Is null unless processing_state is FAILED.
     *
     * - `EXCEEDED_CHARACTER_LIMIT` - Exceeded Character Limit
     * - `INVALID_FILE` - Invalid File
     */
    processingFailureReason?: Vellum.ProcessingFailureReasonEnum;
    /**
     * The document's current status.
     *
     * - `ACTIVE` - Active
     */
    status?: Vellum.DocumentStatus;
    /** A list of keywords associated with this document. Originally provided when uploading the document. */
    keywords?: string[];
    /** A previously supplied JSON object containing metadata that can be filtered on when searching. */
    metadata?: Record<string, unknown>;
    documentToDocumentIndexes: Vellum.SlimDocumentDocumentToDocumentIndex[];
}
