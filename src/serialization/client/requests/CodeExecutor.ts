/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../index";
import * as Vellum from "../../../api/index";
import * as core from "../../../core";
import { CodeExecutionRuntime } from "../../types/CodeExecutionRuntime";
import { CodeExecutorInput } from "../../types/CodeExecutorInput";
import { CodeExecutionPackage } from "../../types/CodeExecutionPackage";
import { VellumVariableType } from "../../types/VellumVariableType";

export const CodeExecutor: core.serialization.Schema<serializers.CodeExecutor.Raw, Vellum.CodeExecutor> =
    core.serialization.object({
        code: core.serialization.string(),
        runtime: CodeExecutionRuntime,
        inputValues: core.serialization.property("input_values", core.serialization.list(CodeExecutorInput)),
        packages: core.serialization.list(CodeExecutionPackage),
        outputType: core.serialization.property("output_type", VellumVariableType),
    });

export declare namespace CodeExecutor {
    interface Raw {
        code: string;
        runtime: CodeExecutionRuntime.Raw;
        input_values: CodeExecutorInput.Raw[];
        packages: CodeExecutionPackage.Raw[];
        output_type: VellumVariableType.Raw;
    }
}