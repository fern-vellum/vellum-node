/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Vellum } from "@fern-api/vellum";
import * as core from "../../core";

export const FinishReasonEnum: core.serialization.Schema<serializers.FinishReasonEnum.Raw, Vellum.FinishReasonEnum> =
    core.serialization.enum_(["LENGTH", "STOP", "UNKNOWN"]);

export declare namespace FinishReasonEnum {
    type Raw = "LENGTH" | "STOP" | "UNKNOWN";
}
