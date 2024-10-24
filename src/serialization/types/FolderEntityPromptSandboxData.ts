/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { EntityStatus } from "./EntityStatus";

export const FolderEntityPromptSandboxData: core.serialization.ObjectSchema<
    serializers.FolderEntityPromptSandboxData.Raw,
    Vellum.FolderEntityPromptSandboxData
> = core.serialization.object({
    id: core.serialization.string(),
    label: core.serialization.string(),
    created: core.serialization.date(),
    modified: core.serialization.date(),
    status: EntityStatus,
    lastDeployedOn: core.serialization.property("last_deployed_on", core.serialization.date().optional()),
});

export declare namespace FolderEntityPromptSandboxData {
    interface Raw {
        id: string;
        label: string;
        created: string;
        modified: string;
        status: EntityStatus.Raw;
        last_deployed_on?: string | null;
    }
}