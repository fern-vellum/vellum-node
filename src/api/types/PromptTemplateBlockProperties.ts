/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

export interface PromptTemplateBlockProperties {
    chatRole?: Vellum.ChatMessageRole;
    chatMessageUnterminated?: boolean;
    template?: string;
    templateType?: Vellum.ContentType;
    functionName?: string;
    functionDescription?: string;
    functionParameters?: Record<string, unknown>;
    blocks?: Vellum.PromptTemplateBlock[];
}
