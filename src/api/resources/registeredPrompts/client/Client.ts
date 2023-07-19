/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vellum from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace RegisteredPrompts {
    interface Options {
        environment?: environments.VellumEnvironment | environments.VellumEnvironmentUrls;
        apiKey: core.Supplier<string>;
    }
}

export class RegisteredPrompts {
    constructor(protected readonly options: RegisteredPrompts.Options) {}

    /**
     * <strong style="background-color:#ffc107; color:white; padding:4px; border-radius:4px">Unstable</strong>
     *
     * Registers a prompt within Vellum and creates associated Vellum entities. Intended to be used by integration
     * partners, not directly by Vellum users.
     *
     * Under the hood, this endpoint creates a new sandbox, a new model version, and a new deployment.
     * @throws {Vellum.ConflictError}
     */
    public async registerPrompt(request: Vellum.RegisterPromptRequestRequest): Promise<Vellum.RegisterPromptResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (this.options.environment ?? environments.VellumEnvironment.Production).default,
                "v1/registered-prompts/register"
            ),
            method: "POST",
            headers: {
                X_API_KEY: await core.Supplier.get(this.options.apiKey),
            },
            contentType: "application/json",
            body: await serializers.RegisterPromptRequestRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
        });
        if (_response.ok) {
            return await serializers.RegisterPromptResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 409:
                    throw new Vellum.ConflictError(
                        await serializers.RegisterPromptErrorResponse.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.VellumError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
}