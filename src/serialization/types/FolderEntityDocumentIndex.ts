/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { FolderEntityDocumentIndexData } from "./FolderEntityDocumentIndexData";

export const FolderEntityDocumentIndex: core.serialization.ObjectSchema<
    serializers.FolderEntityDocumentIndex.Raw,
    Vellum.FolderEntityDocumentIndex
> = core.serialization.object({
    id: core.serialization.string(),
    type: core.serialization.stringLiteral("DOCUMENT_INDEX"),
    data: FolderEntityDocumentIndexData,
});

export declare namespace FolderEntityDocumentIndex {
    export interface Raw {
        id: string;
        type: "DOCUMENT_INDEX";
        data: FolderEntityDocumentIndexData.Raw;
    }
}
