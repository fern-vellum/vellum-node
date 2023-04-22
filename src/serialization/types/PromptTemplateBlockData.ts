/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Vellum } from "vellum-ai";
import * as core from "../../core";

export const PromptTemplateBlockData: core.serialization.ObjectSchema<
    serializers.PromptTemplateBlockData.Raw,
    Vellum.PromptTemplateBlockData
> = core.serialization.object({
    version: core.serialization.number(),
    blocks: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).PromptTemplateBlock)
    ),
});

export declare namespace PromptTemplateBlockData {
    interface Raw {
        version: number;
        blocks: serializers.PromptTemplateBlock.Raw[];
    }
}
