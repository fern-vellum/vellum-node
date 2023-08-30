/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TemplatingNodeResultData: core.serialization.ObjectSchema<
    serializers.TemplatingNodeResultData.Raw,
    Vellum.TemplatingNodeResultData
> = core.serialization.object({
    output: core.serialization.lazy(async () => (await import("..")).TemplatingNodeResultOutput),
});

export declare namespace TemplatingNodeResultData {
    interface Raw {
        output: serializers.TemplatingNodeResultOutput.Raw;
    }
}
