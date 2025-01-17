/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { DocumentIndexRead } from "./DocumentIndexRead";

export const PaginatedDocumentIndexReadList: core.serialization.ObjectSchema<
    serializers.PaginatedDocumentIndexReadList.Raw,
    Vellum.PaginatedDocumentIndexReadList
> = core.serialization.object({
    count: core.serialization.number().optional(),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization.list(DocumentIndexRead).optional(),
});

export declare namespace PaginatedDocumentIndexReadList {
    export interface Raw {
        count?: number | null;
        next?: string | null;
        previous?: string | null;
        results?: DocumentIndexRead.Raw[] | null;
    }
}
