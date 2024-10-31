/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { VellumVariableType } from "./VellumVariableType";
import { VellumVariableExtensions } from "./VellumVariableExtensions";

export const VellumVariable: core.serialization.ObjectSchema<serializers.VellumVariable.Raw, Vellum.VellumVariable> =
    core.serialization.object({
        id: core.serialization.string(),
        key: core.serialization.string(),
        type: VellumVariableType,
        required: core.serialization.boolean().optional(),
        default: core.serialization.lazy(() => serializers.VellumValue).optional(),
        extensions: VellumVariableExtensions.optional(),
    });

export declare namespace VellumVariable {
    interface Raw {
        id: string;
        key: string;
        type: VellumVariableType.Raw;
        required?: boolean | null;
        default?: serializers.VellumValue.Raw | null;
        extensions?: VellumVariableExtensions.Raw | null;
    }
}
