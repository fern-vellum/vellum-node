/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "..";

/**
 * A user input representing a list of chat messages
 */
export interface ChatHistoryInputRequest {
    /** The variable's name, as defined in the deployment. */
    name: string;
    value: Vellum.ChatMessageRequest[];
}