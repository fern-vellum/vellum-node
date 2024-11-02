/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace FolderEntities {
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

export class FolderEntities {
    constructor(protected readonly _options: FolderEntities.Options = {}) {}

    /**
     * List all folder entities within a specified folder.
     *
     * @param {Vellum.FolderEntitiesListRequest} request
     * @param {FolderEntities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.folderEntities.list({
     *         parentFolderId: "parent_folder_id"
     *     })
     */
    public async list(
        request: Vellum.FolderEntitiesListRequest,
        requestOptions?: FolderEntities.RequestOptions
    ): Promise<Vellum.PaginatedFolderEntityList> {
        const { entityStatus, limit, offset, ordering, parentFolderId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (entityStatus != null) {
            _queryParams["entity_status"] = entityStatus;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        if (ordering != null) {
            _queryParams["ordering"] = ordering;
        }

        _queryParams["parent_folder_id"] = parentFolderId;
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                "v1/folder-entities"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.9.2",
                "User-Agent": "vellum-ai/0.9.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PaginatedFolderEntityList.parseOrThrow(_response.body, {
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

    /**
     * Add an entity to a specific folder or root directory.
     *
     * Adding an entity to a folder will remove it from any other folders it might have been a member of.
     *
     * @param {string} folderId - The ID of the folder to which the entity should be added. This can be a UUID of a folder, or the name of a root
     *                            directory. Supported root directories include:
     *
     *                            - PROMPT_SANDBOX
     *                            - WORKFLOW_SANDBOX
     *                            - DOCUMENT_INDEX
     *                            - TEST_SUITE
     * @param {Vellum.AddEntityToFolderRequest} request
     * @param {FolderEntities.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.folderEntities.addEntityToFolder("folder_id", {
     *         entityId: "entity_id"
     *     })
     */
    public async addEntityToFolder(
        folderId: string,
        request: Vellum.AddEntityToFolderRequest,
        requestOptions?: FolderEntities.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/folders/${encodeURIComponent(folderId)}/add-entity`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.9.2",
                "User-Agent": "vellum-ai/0.9.2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.AddEntityToFolderRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
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

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { X_API_KEY: apiKeyValue };
    }
}
