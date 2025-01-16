/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { JinjaPromptBlock } from "./JinjaPromptBlock";
import { VariablePromptBlock } from "./VariablePromptBlock";
import { RichTextPromptBlock } from "./RichTextPromptBlock";
import { AudioPromptBlock } from "./AudioPromptBlock";
import { FunctionCallPromptBlock } from "./FunctionCallPromptBlock";
import { ImagePromptBlock } from "./ImagePromptBlock";

export const PromptBlock: core.serialization.Schema<serializers.PromptBlock.Raw, Vellum.PromptBlock> =
    core.serialization.undiscriminatedUnion([
        JinjaPromptBlock,
        core.serialization.lazyObject(() => serializers.ChatMessagePromptBlock),
        VariablePromptBlock,
        RichTextPromptBlock,
        AudioPromptBlock,
        FunctionCallPromptBlock,
        ImagePromptBlock,
    ]);

export declare namespace PromptBlock {
    export type Raw =
        | JinjaPromptBlock.Raw
        | serializers.ChatMessagePromptBlock.Raw
        | VariablePromptBlock.Raw
        | RichTextPromptBlock.Raw
        | AudioPromptBlock.Raw
        | FunctionCallPromptBlock.Raw
        | ImagePromptBlock.Raw;
}
