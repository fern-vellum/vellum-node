/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vellum from "../../api/index";
import * as core from "../../core";
import { TerminalNodeStringResult } from "./TerminalNodeStringResult";
import { TerminalNodeNumberResult } from "./TerminalNodeNumberResult";
import { TerminalNodeJsonResult } from "./TerminalNodeJsonResult";
import { TerminalNodeChatHistoryResult } from "./TerminalNodeChatHistoryResult";
import { TerminalNodeSearchResultsResult } from "./TerminalNodeSearchResultsResult";
import { TerminalNodeErrorResult } from "./TerminalNodeErrorResult";
import { TerminalNodeArrayResult } from "./TerminalNodeArrayResult";
import { TerminalNodeFunctionCallResult } from "./TerminalNodeFunctionCallResult";

export const TerminalNodeResultOutput: core.serialization.Schema<
    serializers.TerminalNodeResultOutput.Raw,
    Vellum.TerminalNodeResultOutput
> = core.serialization.undiscriminatedUnion([
    TerminalNodeStringResult,
    TerminalNodeNumberResult,
    TerminalNodeJsonResult,
    TerminalNodeChatHistoryResult,
    TerminalNodeSearchResultsResult,
    TerminalNodeErrorResult,
    TerminalNodeArrayResult,
    TerminalNodeFunctionCallResult,
]);

export declare namespace TerminalNodeResultOutput {
    export type Raw =
        | TerminalNodeStringResult.Raw
        | TerminalNodeNumberResult.Raw
        | TerminalNodeJsonResult.Raw
        | TerminalNodeChatHistoryResult.Raw
        | TerminalNodeSearchResultsResult.Raw
        | TerminalNodeErrorResult.Raw
        | TerminalNodeArrayResult.Raw
        | TerminalNodeFunctionCallResult.Raw;
}
