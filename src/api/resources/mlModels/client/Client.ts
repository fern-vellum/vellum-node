/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace MlModels {
    interface Options {
        environment?: core.Supplier<environments.VellumEnvironment | environments.VellumEnvironmentUrls>;
        apiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class MlModels {
    constructor(protected readonly _options: MlModels.Options = {}) {}

    /**
     * Retrieve details about an ML Model
     *
     * @param {string} id - Either the ML Model's ID, its unique name, or its ID in the workspace.
     * @param {MlModels.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.mlModels.retrieve("id")
     */
    public async retrieve(id: string, requestOptions?: MlModels.RequestOptions): Promise<Vellum.MlModelRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/ml-models/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "v0.10.9",
                "User-Agent": "vellum-ai/v0.10.9",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.MlModelRead.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
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

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { X_API_KEY: apiKeyValue };
    }
}
