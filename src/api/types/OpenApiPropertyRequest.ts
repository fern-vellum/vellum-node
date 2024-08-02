/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vellum from "../index";

export type OpenApiPropertyRequest =
    | Vellum.OpenApiPropertyRequest.Array
    | Vellum.OpenApiPropertyRequest.Object_
    | Vellum.OpenApiPropertyRequest.Integer
    | Vellum.OpenApiPropertyRequest.Number
    | Vellum.OpenApiPropertyRequest.String
    | Vellum.OpenApiPropertyRequest.Boolean
    | Vellum.OpenApiPropertyRequest.OneOf
    | Vellum.OpenApiPropertyRequest.Const;

export declare namespace OpenApiPropertyRequest {
    interface Array extends Vellum.OpenApiArrayPropertyRequest {
        type: "array";
    }

    interface Object_ extends Vellum.OpenApiObjectPropertyRequest {
        type: "object";
    }

    interface Integer extends Vellum.OpenApiIntegerPropertyRequest {
        type: "integer";
    }

    interface Number extends Vellum.OpenApiNumberPropertyRequest {
        type: "number";
    }

    interface String extends Vellum.OpenApiStringPropertyRequest {
        type: "string";
    }

    interface Boolean extends Vellum.OpenApiBooleanPropertyRequest {
        type: "boolean";
    }

    interface OneOf extends Vellum.OpenApiOneOfPropertyRequest {
        type: "oneOf";
    }

    interface Const extends Vellum.OpenApiConstPropertyRequest {
        type: "const";
    }
}
