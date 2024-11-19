/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../../index";

/**
 * @example
 *     {
 *         mlModel: "string",
 *         inputValues: [{
 *                 key: "string",
 *                 type: "STRING",
 *                 value: "string"
 *             }],
 *         inputVariables: [{
 *                 id: "string",
 *                 key: "string",
 *                 type: "STRING",
 *                 required: true,
 *                 default: {
 *                     type: "STRING",
 *                     value: {
 *                         "key": "value"
 *                     }
 *                 },
 *                 extensions: {
 *                     color: {
 *                         "key": "value"
 *                     }
 *                 }
 *             }],
 *         parameters: {
 *             stop: ["string"],
 *             temperature: 1.1,
 *             maxTokens: 1,
 *             topP: 1.1,
 *             topK: 1,
 *             frequencyPenalty: 1.1,
 *             presencePenalty: 1.1,
 *             logitBias: {
 *                 "string": {
 *                     "key": "value"
 *                 }
 *             },
 *             customParameters: {
 *                 "string": {
 *                     "key": "value"
 *                 }
 *             }
 *         },
 *         settings: {
 *             timeout: 1.1
 *         },
 *         blocks: [{
 *                 "key": "value"
 *             }],
 *         expandMeta: {
 *             cost: true,
 *             modelName: true,
 *             usage: true,
 *             finishReason: true
 *         }
 *     }
 */
export interface AdHocExecutePromptStream {
    mlModel: string;
    inputValues: Vellum.PromptRequestInput[];
    inputVariables: Vellum.VellumVariable[];
    parameters: Vellum.PromptParameters;
    settings?: Vellum.PromptSettings;
    blocks: unknown[];
    expandMeta?: Vellum.AdHocExpandMeta;
}