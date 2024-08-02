/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { MlModelFamilyEnumValueLabel } from "./MlModelFamilyEnumValueLabel";
import { HostedByEnum } from "./HostedByEnum";
import { MlModelDeveloperEnumValueLabel } from "./MlModelDeveloperEnumValueLabel";
import { VisibilityEnum } from "./VisibilityEnum";
import { MlModelExecConfig } from "./MlModelExecConfig";
import { MlModelParameterConfig } from "./MlModelParameterConfig";
import { MlModelDisplayConfigLabelled } from "./MlModelDisplayConfigLabelled";

export const MlModelRead: core.serialization.ObjectSchema<serializers.MlModelRead.Raw, Vellum.MlModelRead> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        family: MlModelFamilyEnumValueLabel,
        hostedBy: core.serialization.property("hosted_by", HostedByEnum),
        developedBy: core.serialization.property("developed_by", MlModelDeveloperEnumValueLabel),
        visibility: VisibilityEnum.optional(),
        execConfig: core.serialization.property("exec_config", MlModelExecConfig),
        parameterConfig: core.serialization.property("parameter_config", MlModelParameterConfig),
        displayConfig: core.serialization.property("display_config", MlModelDisplayConfigLabelled),
    });

export declare namespace MlModelRead {
    interface Raw {
        id: string;
        name: string;
        family: MlModelFamilyEnumValueLabel.Raw;
        hosted_by: HostedByEnum.Raw;
        developed_by: MlModelDeveloperEnumValueLabel.Raw;
        visibility?: VisibilityEnum.Raw | null;
        exec_config: MlModelExecConfig.Raw;
        parameter_config: MlModelParameterConfig.Raw;
        display_config: MlModelDisplayConfigLabelled.Raw;
    }
}
