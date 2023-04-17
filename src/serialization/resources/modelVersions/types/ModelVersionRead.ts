/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Vellum } from "@fern-api/vellum";
import * as core from "../../../../core";

export const ModelVersionRead: core.serialization.ObjectSchema<
    serializers.ModelVersionRead.Raw,
    Vellum.ModelVersionRead
> = core.serialization.object({
    id: core.serialization.string(),
    created: core.serialization.string(),
    label: core.serialization.string(),
    modelType: core.serialization.property(
        "model_type",
        core.serialization.lazy(async () => (await import("../../..")).ModelTypeEnum)
    ),
    provider: core.serialization.lazy(async () => (await import("../../..")).ProviderEnum),
    externalId: core.serialization.property("external_id", core.serialization.string()),
    buildConfig: core.serialization.property(
        "build_config",
        core.serialization.lazyObject(async () => (await import("../../..")).ModelVersionBuildConfig)
    ),
    execConfig: core.serialization.property(
        "exec_config",
        core.serialization.lazyObject(async () => (await import("../../..")).ModelVersionExecConfigRead)
    ),
});

export declare namespace ModelVersionRead {
    interface Raw {
        id: string;
        created: string;
        label: string;
        model_type: serializers.ModelTypeEnum.Raw;
        provider: serializers.ProviderEnum.Raw;
        external_id: string;
        build_config: serializers.ModelVersionBuildConfig.Raw;
        exec_config: serializers.ModelVersionExecConfigRead.Raw;
    }
}
