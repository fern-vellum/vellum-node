/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Vellum } from "vellum-ai";
import * as core from "../../core";

export const NormalizedLogProbs: core.serialization.ObjectSchema<
    serializers.NormalizedLogProbs.Raw,
    Vellum.NormalizedLogProbs
> = core.serialization.object({
    tokens: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).NormalizedTokenLogProbs)
    ),
    likelihood: core.serialization.number(),
});

export declare namespace NormalizedLogProbs {
    interface Raw {
        tokens: serializers.NormalizedTokenLogProbs.Raw[];
        likelihood: number;
    }
}
