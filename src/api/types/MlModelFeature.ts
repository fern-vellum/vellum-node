/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - `TEXT` - Text
 * - `CHAT_MESSAGE_SYSTEM` - Chat Message System
 * - `CHAT_MESSAGE_USER` - Chat Message User
 * - `CHAT_MESSAGE_ASSISTANT` - Chat Message Assistant
 * - `CHAT_MESSAGE_ASSISTANT_UNTERMINATED` - Chat Message Assistant Unterminated
 * - `CHAT_MESSAGE_FUNCTION_CALL` - Chat Message Function Call
 * - `CHAT_MESSAGE_IMAGE` - Chat Message Image
 * - `FUNCTION_DEFINITION` - Function Definition
 * - `STREAMING_SUPPORT` - Streaming Support
 * - `PROMPT_CACHING_SUPPORT` - Prompt Caching Support
 */
export type MlModelFeature =
    | "TEXT"
    | "CHAT_MESSAGE_SYSTEM"
    | "CHAT_MESSAGE_USER"
    | "CHAT_MESSAGE_ASSISTANT"
    | "CHAT_MESSAGE_ASSISTANT_UNTERMINATED"
    | "CHAT_MESSAGE_FUNCTION_CALL"
    | "CHAT_MESSAGE_IMAGE"
    | "FUNCTION_DEFINITION"
    | "STREAMING_SUPPORT"
    | "PROMPT_CACHING_SUPPORT";

export const MlModelFeature = {
    Text: "TEXT",
    ChatMessageSystem: "CHAT_MESSAGE_SYSTEM",
    ChatMessageUser: "CHAT_MESSAGE_USER",
    ChatMessageAssistant: "CHAT_MESSAGE_ASSISTANT",
    ChatMessageAssistantUnterminated: "CHAT_MESSAGE_ASSISTANT_UNTERMINATED",
    ChatMessageFunctionCall: "CHAT_MESSAGE_FUNCTION_CALL",
    ChatMessageImage: "CHAT_MESSAGE_IMAGE",
    FunctionDefinition: "FUNCTION_DEFINITION",
    StreamingSupport: "STREAMING_SUPPORT",
    PromptCachingSupport: "PROMPT_CACHING_SUPPORT",
} as const;
