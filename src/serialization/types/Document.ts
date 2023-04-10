/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Vellum } from "@fern-api/vellum";
import * as core from "../../core";

export const Document: core.serialization.ObjectSchema<serializers.Document.Raw, Vellum.Document> =
    core.serialization.object({
        id: core.serialization.string(),
        label: core.serialization.string(),
        externalId: core.serialization.property("external_id", core.serialization.string().optional()),
    });

export declare namespace Document {
    interface Raw {
        id: string;
        label: string;
        external_id?: string | null;
    }
}
