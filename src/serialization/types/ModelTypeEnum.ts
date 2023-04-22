/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Vellum } from "vellum-ai";
import * as core from "../../core";

export const ModelTypeEnum: core.serialization.Schema<serializers.ModelTypeEnum.Raw, Vellum.ModelTypeEnum> =
    core.serialization.enum_(["GENERATE", "CLASSIFY"]);

export declare namespace ModelTypeEnum {
    type Raw = "GENERATE" | "CLASSIFY";
}
