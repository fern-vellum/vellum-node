/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface MlModelDisplayConfigLabelled {
    label: string;
    description: string;
    tags: Vellum.MlModelDisplayTagEnumValueLabel[];
    /** For internal use only. */
    defaultDisplayPriority?: number;
}
