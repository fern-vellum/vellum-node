/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An OpenAPI specification of a property that is a URI-reference to another schema
 */
export interface OpenApiRefPropertyRequest {
    type: "ref";
    title?: string;
    description?: string;
    ref: string;
}