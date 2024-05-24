/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const InstructorVectorizerConfigRequest: core.serialization.ObjectSchema<
    serializers.InstructorVectorizerConfigRequest.Raw,
    Vellum.InstructorVectorizerConfigRequest
> = core.serialization.object({
    instructionDomain: core.serialization.property("instruction_domain", core.serialization.string()),
    instructionQueryTextType: core.serialization.property("instruction_query_text_type", core.serialization.string()),
    instructionDocumentTextType: core.serialization.property(
        "instruction_document_text_type",
        core.serialization.string()
    ),
});

export declare namespace InstructorVectorizerConfigRequest {
    interface Raw {
        instruction_domain: string;
        instruction_query_text_type: string;
        instruction_document_text_type: string;
    }
}
