/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { ReductoChunkerConfig } from "./ReductoChunkerConfig";

export const ReductoChunking: core.serialization.ObjectSchema<serializers.ReductoChunking.Raw, Vellum.ReductoChunking> =
    core.serialization.object({
        chunkerConfig: core.serialization.property("chunker_config", ReductoChunkerConfig.optional()),
    });

export declare namespace ReductoChunking {
    interface Raw {
        chunker_config?: ReductoChunkerConfig.Raw | null;
    }
}
