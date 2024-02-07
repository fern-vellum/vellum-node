/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../../../..";

/**
 * @example
 *     {
 *         label: "Scenario 1",
 *         inputs: [{
 *                 key: "var_1",
 *                 type: Vellum.ScenarioInputTypeEnum.Text,
 *                 value: "Hello, world!"
 *             }, {
 *                 key: "var_2",
 *                 type: Vellum.ScenarioInputTypeEnum.Text,
 *                 value: "Why hello, there!"
 *             }]
 *     }
 */
export interface UpsertSandboxScenarioRequestRequest {
    label?: string;
    /** The inputs for the scenario */
    inputs: Vellum.ScenarioInputRequest[];
    /** The id of the scenario to update. If none is provided, an id will be generated and a new scenario will be appended. */
    scenarioId?: string;
}
