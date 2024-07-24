/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type TestSuiteRunExecutionOutput =
    | Vellum.TestSuiteRunExecutionOutput.String
    | Vellum.TestSuiteRunExecutionOutput.Number
    | Vellum.TestSuiteRunExecutionOutput.Json
    | Vellum.TestSuiteRunExecutionOutput.ChatHistory
    | Vellum.TestSuiteRunExecutionOutput.SearchResults
    | Vellum.TestSuiteRunExecutionOutput.Error_
    | Vellum.TestSuiteRunExecutionOutput.FunctionCall
    | Vellum.TestSuiteRunExecutionOutput.Array;

export declare namespace TestSuiteRunExecutionOutput {
    interface String extends Vellum.TestSuiteRunExecutionStringOutput {
        type: "STRING";
    }

    interface Number extends Vellum.TestSuiteRunExecutionNumberOutput {
        type: "NUMBER";
    }

    interface Json extends Vellum.TestSuiteRunExecutionJsonOutput {
        type: "JSON";
    }

    interface ChatHistory extends Vellum.TestSuiteRunExecutionChatHistoryOutput {
        type: "CHAT_HISTORY";
    }

    interface SearchResults extends Vellum.TestSuiteRunExecutionSearchResultsOutput {
        type: "SEARCH_RESULTS";
    }

    interface Error_ extends Vellum.TestSuiteRunExecutionErrorOutput {
        type: "ERROR";
    }

    interface FunctionCall extends Vellum.TestSuiteRunExecutionFunctionCallOutput {
        type: "FUNCTION_CALL";
    }

    interface Array extends Vellum.TestSuiteRunExecutionArrayOutput {
        type: "ARRAY";
    }
}
