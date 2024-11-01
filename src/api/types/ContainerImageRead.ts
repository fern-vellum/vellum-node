/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export interface ContainerImageRead {
    id: string;
    name: string;
    visibility: Vellum.EntityVisibility;
    created: Date;
    modified: Date;
    repository: string;
    sha: string;
    tags: string[];
}
