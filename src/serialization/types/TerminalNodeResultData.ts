/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";

export const TerminalNodeResultData: core.serialization.ObjectSchema<
    serializers.TerminalNodeResultData.Raw,
    Vellum.TerminalNodeResultData
> = core.serialization.object({
    output: core.serialization.lazy(async () => (await import("..")).TerminalNodeResultOutput),
});

export declare namespace TerminalNodeResultData {
    interface Raw {
        output: serializers.TerminalNodeResultOutput.Raw;
    }
}
