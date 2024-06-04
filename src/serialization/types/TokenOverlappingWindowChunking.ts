/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { TokenOverlappingWindowChunkerConfig } from "./TokenOverlappingWindowChunkerConfig";

export const TokenOverlappingWindowChunking: core.serialization.ObjectSchema<
    serializers.TokenOverlappingWindowChunking.Raw,
    Vellum.TokenOverlappingWindowChunking
> = core.serialization.object({
    chunkerConfig: core.serialization.property("chunker_config", TokenOverlappingWindowChunkerConfig.optional()),
});

export declare namespace TokenOverlappingWindowChunking {
    interface Raw {
        chunker_config?: TokenOverlappingWindowChunkerConfig.Raw | null;
    }
}