/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `SYSTEM` - System
 * - `ASSISTANT` - Assistant
 * - `USER` - User
 * - `FUNCTION` - Function
 */
export type ChatMessageRole = "SYSTEM" | "ASSISTANT" | "USER" | "FUNCTION";
export const ChatMessageRole = {
    System: "SYSTEM",
    Assistant: "ASSISTANT",
    User: "USER",
    Function: "FUNCTION",
} as const;
