/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Vellum } from "@fern-api/vellum";
import urlJoin from "url-join";
import * as serializers from "./serialization";
import * as errors from "./errors";
import { Documents } from "./api/resources/documents/client/Client";
import { ModelVersions } from "./api/resources/modelVersions/client/Client";

export declare namespace VellumClient {
    interface Options {
        environment?: environments.VellumEnvironment | environments.VellumEnvironmentUrls;
        apiKey: core.Supplier<string>;
    }
}

export class VellumClient {
    constructor(protected readonly options: VellumClient.Options) {}

    public async generate(request: Vellum.GenerateRequestBodyRequest): Promise<Vellum.GenerateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.VellumEnvironment.Production).predict,
                "v1/generate"
            ),
            method: "POST",
            headers: {
                X_API_KEY: await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            body: await serializers.GenerateRequestBodyRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
        });
        if (_response.ok) {
            return await serializers.GenerateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VellumError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async search(request: Vellum.SearchRequestBodyRequest): Promise<Vellum.SearchResponse> {
        const _response = await core.fetcher({
            url: urlJoin((this.options.environment ?? environments.VellumEnvironment.Production).predict, "v1/search"),
            method: "POST",
            headers: {
                X_API_KEY: await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            body: await serializers.SearchRequestBodyRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.SearchResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VellumError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    public async submitCompletionActuals(request: Vellum.SubmitCompletionActualsRequestRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.VellumEnvironment.Production).predict,
                "v1/submit-completion-actuals"
            ),
            method: "POST",
            headers: {
                X_API_KEY: await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            body: await serializers.SubmitCompletionActualsRequestRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.VellumError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VellumError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VellumTimeoutError();
            case "unknown":
                throw new errors.VellumError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _documents: Documents | undefined;

    public get documents(): Documents {
        return (this._documents ??= new Documents(this.options));
    }

    protected _modelVersions: ModelVersions | undefined;

    public get modelVersions(): ModelVersions {
        return (this._modelVersions ??= new ModelVersions(this.options));
    }
}
