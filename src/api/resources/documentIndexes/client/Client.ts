/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace DocumentIndexes {
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

export class DocumentIndexes {
    constructor(protected readonly _options: DocumentIndexes.Options = {}) {}

    /**
     * Used to retrieve a list of Document Indexes.
     *
     * @param {Vellum.DocumentIndexesListRequest} request
     * @param {DocumentIndexes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentIndexes.list()
     */
    public async list(
        request: Vellum.DocumentIndexesListRequest = {},
        requestOptions?: DocumentIndexes.RequestOptions
    ): Promise<Vellum.PaginatedDocumentIndexReadList> {
        const { limit, offset, ordering, search, status } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (offset != null) {
            _queryParams["offset"] = offset.toString();
        }

        if (ordering != null) {
            _queryParams["ordering"] = ordering;
        }

        if (search != null) {
            _queryParams["search"] = search;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                "v1/document-indexes"
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
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
            return serializers.PaginatedDocumentIndexReadList.parseOrThrow(_response.body, {
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
     * Creates a new document index.
     *
     * @param {Vellum.DocumentIndexCreateRequest} request
     * @param {DocumentIndexes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentIndexes.create({
     *         label: "My Document Index",
     *         name: "my-document-index",
     *         indexingConfig: {
     *             vectorizer: {
     *                 modelName: "hkunlp/instructor-xl",
     *                 config: {
     *                     instructionDomain: "",
     *                     instructionQueryTextType: "plain_text",
     *                     instructionDocumentTextType: "plain_text"
     *                 }
     *             },
     *             chunking: {
     *                 chunkerName: "sentence-chunker",
     *                 chunkerConfig: {
     *                     characterLimit: 1000,
     *                     minOverlapRatio: 0.5
     *                 }
     *             }
     *         }
     *     })
     *
     * @example
     *     await client.documentIndexes.create({
     *         label: "My Document Index",
     *         name: "my-document-index",
     *         indexingConfig: {
     *             vectorizer: {
     *                 modelName: "sentence-transformers/multi-qa-mpnet-base-dot-v1",
     *                 config: {
     *                     "key": "value"
     *                 }
     *             },
     *             chunking: {
     *                 chunkerName: "sentence-chunker",
     *                 chunkerConfig: {
     *                     characterLimit: 1000,
     *                     minOverlapRatio: 0.5
     *                 }
     *             }
     *         }
     *     })
     *
     * @example
     *     await client.documentIndexes.create({
     *         label: "My Document Index",
     *         name: "my-document-index",
     *         indexingConfig: {
     *             vectorizer: {
     *                 config: {
     *                     addOpenaiApiKey: true
     *                 },
     *                 modelName: "text-embedding-ada-002"
     *             },
     *             chunking: {
     *                 chunkerName: "sentence-chunker",
     *                 chunkerConfig: {
     *                     characterLimit: 1000,
     *                     minOverlapRatio: 0.5
     *                 }
     *             }
     *         }
     *     })
     */
    public async create(
        request: Vellum.DocumentIndexCreateRequest,
        requestOptions?: DocumentIndexes.RequestOptions
    ): Promise<Vellum.DocumentIndexRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                "v1/document-indexes"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DocumentIndexCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DocumentIndexRead.parseOrThrow(_response.body, {
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
     * Used to retrieve a Document Index given its ID or name.
     *
     * @param {string} id - Either the Document Index's ID or its unique name
     * @param {DocumentIndexes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentIndexes.retrieve("id")
     */
    public async retrieve(
        id: string,
        requestOptions?: DocumentIndexes.RequestOptions
    ): Promise<Vellum.DocumentIndexRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/document-indexes/${encodeURIComponent(id)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
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
            return serializers.DocumentIndexRead.parseOrThrow(_response.body, {
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
     * Used to fully update a Document Index given its ID or name.
     *
     * @param {string} id - Either the Document Index's ID or its unique name
     * @param {Vellum.DocumentIndexUpdateRequest} request
     * @param {DocumentIndexes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentIndexes.update("id", {
     *         label: "label"
     *     })
     */
    public async update(
        id: string,
        request: Vellum.DocumentIndexUpdateRequest,
        requestOptions?: DocumentIndexes.RequestOptions
    ): Promise<Vellum.DocumentIndexRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/document-indexes/${encodeURIComponent(id)}`
            ),
            method: "PUT",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.DocumentIndexUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DocumentIndexRead.parseOrThrow(_response.body, {
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
     * Used to delete a Document Index given its ID or name.
     *
     * @param {string} id - Either the Document Index's ID or its unique name
     * @param {DocumentIndexes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentIndexes.destroy("id")
     */
    public async destroy(id: string, requestOptions?: DocumentIndexes.RequestOptions): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .documents,
                `v1/document-indexes/${encodeURIComponent(id)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
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

    /**
     * Used to partial update a Document Index given its ID or name.
     *
     * @param {string} id - Either the Document Index's ID or its unique name
     * @param {Vellum.PatchedDocumentIndexUpdateRequest} request
     * @param {DocumentIndexes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentIndexes.partialUpdate("id")
     */
    public async partialUpdate(
        id: string,
        request: Vellum.PatchedDocumentIndexUpdateRequest = {},
        requestOptions?: DocumentIndexes.RequestOptions
    ): Promise<Vellum.DocumentIndexRead> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/document-indexes/${encodeURIComponent(id)}`
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.PatchedDocumentIndexUpdateRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : undefined,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.DocumentIndexRead.parseOrThrow(_response.body, {
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
     * Adds a previously uploaded Document to the specified Document Index.
     *
     * @param {string} documentId - Either the Vellum-generated ID or the originally supplied external_id that uniquely identifies the Document you'd like to add.
     * @param {string} id - Either the Vellum-generated ID or the originally specified name that uniquely identifies the Document Index to which you'd like to add the Document.
     * @param {DocumentIndexes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentIndexes.addDocument("document_id", "id")
     */
    public async addDocument(
        documentId: string,
        id: string,
        requestOptions?: DocumentIndexes.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .default,
                `v1/document-indexes/${encodeURIComponent(id)}/documents/${encodeURIComponent(documentId)}`
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
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

    /**
     * Removes a Document from a Document Index without deleting the Document itself.
     *
     * @param {string} documentId - Either the Vellum-generated ID or the originally supplied external_id that uniquely identifies the Document you'd like to remove.
     * @param {string} id - Either the Vellum-generated ID or the originally specified name that uniquely identifies the Document Index from which you'd like to remove a Document.
     * @param {DocumentIndexes.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.documentIndexes.removeDocument("document_id", "id")
     */
    public async removeDocument(
        documentId: string,
        id: string,
        requestOptions?: DocumentIndexes.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.VellumEnvironment.Production)
                    .documents,
                `v1/document-indexes/${encodeURIComponent(id)}/documents/${encodeURIComponent(documentId)}`
            ),
            method: "DELETE",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "vellum-ai",
                "X-Fern-SDK-Version": "0.12.13",
                "User-Agent": "vellum-ai/0.12.13",
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
