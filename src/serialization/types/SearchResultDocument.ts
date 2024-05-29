/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const SearchResultDocument: core.serialization.ObjectSchema<
    serializers.SearchResultDocument.Raw,
    Vellum.SearchResultDocument
> = core.serialization.object({
    id: core.serialization.string().optional(),
    label: core.serialization.string(),
    externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace SearchResultDocument {
    interface Raw {
        id?: string | null;
        label: string;
        external_id?: string | null;
        metadata?: Record<string, unknown> | null;
    }
}
