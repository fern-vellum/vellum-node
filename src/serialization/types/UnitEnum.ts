/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";

export const UnitEnum: core.serialization.Schema<serializers.UnitEnum.Raw, Vellum.UnitEnum> =
    core.serialization.stringLiteral("USD");

export declare namespace UnitEnum {
    type Raw = "USD";
}
