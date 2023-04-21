/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UploadDocumentRequestBodyRequest {
    /** Optionally include the names of all indexes that you'd like this document to be included in */
    addToIndexNames: string[];
    /** Optionally include an external ID for this document. This is useful if you want to re-upload the same document later when its contents change and would like it to be re-indexed. */
    externalId: string;
    /** A human-friendly name for this document. Typically the filename. */
    label: string;
    /** Optionally include a list of keywords that'll be associated with this document. Used when performing keyword searches. */
    keywords: string[];
}