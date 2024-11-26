# Reference

<details><summary><code>client.<a href="/src/Client.ts">submitWorkflowExecutionActuals</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

    Used to submit feedback regarding the quality of previous workflow execution and its outputs.

    **Note:** Uses a base url of `https://predict.vellum.ai`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.submitWorkflowExecutionActuals({
    actuals: [
        {
            outputType: "STRING",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.SubmitWorkflowExecutionActualsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VellumClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

## AdHoc

<details><summary><code>client.adHoc.<a href="/src/api/resources/adHoc/client/Client.ts">adhocExecutePromptStream</a>({ ...params }) -> core.Stream<Vellum.AdHocExecutePromptEvent></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

An internal-only endpoint that's subject to breaking changes without notice. Not intended for public use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.adHoc.adhocExecutePromptStream({
    mlModel: "string",
    inputValues: [
        {
            key: "string",
            type: "STRING",
            value: "string",
        },
    ],
    inputVariables: [
        {
            id: "string",
            key: "string",
            type: "STRING",
            required: true,
            default: {
                type: "STRING",
                value: "string",
            },
            extensions: {
                color: {
                    key: "value",
                },
            },
        },
    ],
    parameters: {
        stop: ["string"],
        temperature: 1.1,
        maxTokens: 1,
        topP: 1.1,
        topK: 1,
        frequencyPenalty: 1.1,
        presencePenalty: 1.1,
        logitBias: {
            string: {
                key: "value",
            },
        },
        customParameters: {
            string: {
                key: "value",
            },
        },
    },
    settings: {
        timeout: 1.1,
    },
    blocks: [
        {
            state: "ENABLED",
            cacheConfig: {
                type: "EPHEMERAL",
            },
            blockType: "JINJA",
            template: "string",
        },
    ],
    functions: [
        {
            state: "ENABLED",
            cacheConfig: {
                type: "EPHEMERAL",
            },
            name: "string",
            description: "string",
            parameters: {
                string: {
                    key: "value",
                },
            },
            forced: true,
            strict: true,
        },
    ],
    expandMeta: {
        cost: true,
        modelName: true,
        usage: true,
        finishReason: true,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.AdHocExecutePromptStream`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdHoc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ContainerImages

<details><summary><code>client.containerImages.<a href="/src/api/resources/containerImages/client/Client.ts">list</a>({ ...params }) -> Vellum.PaginatedContainerImageReadList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a list of container images for the organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.containerImages.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.ContainerImagesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContainerImages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.containerImages.<a href="/src/api/resources/containerImages/client/Client.ts">retrieve</a>(id) -> Vellum.ContainerImageRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a Container Image by its ID or name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.containerImages.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Container Image's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContainerImages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.containerImages.<a href="/src/api/resources/containerImages/client/Client.ts">dockerServiceToken</a>() -> Vellum.DockerServiceToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

An internal-only endpoint that's subject to breaking changes without notice. Not intended for public use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.containerImages.dockerServiceToken();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ContainerImages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.containerImages.<a href="/src/api/resources/containerImages/client/Client.ts">pushContainerImage</a>({ ...params }) -> Vellum.ContainerImageRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

An internal-only endpoint that's subject to breaking changes without notice. Not intended for public use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.containerImages.pushContainerImage({
    name: "name",
    sha: "sha",
    tags: ["tags"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.PushContainerImageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContainerImages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Deployments

<details><summary><code>client.deployments.<a href="/src/api/resources/deployments/client/Client.ts">list</a>({ ...params }) -> Vellum.PaginatedSlimDeploymentReadList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to list all Prompt Deployments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deployments.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.DeploymentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Deployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deployments.<a href="/src/api/resources/deployments/client/Client.ts">retrieve</a>(id) -> Vellum.DeploymentRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to retrieve a Prompt Deployment given its ID or name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deployments.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Deployment's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Deployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deployments.<a href="/src/api/resources/deployments/client/Client.ts">deploymentHistoryItemRetrieve</a>(historyIdOrReleaseTag, id) -> Vellum.DeploymentHistoryItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific Deployment History Item by either its UUID or the name of a Release Tag that points to it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deployments.deploymentHistoryItemRetrieve("history_id_or_release_tag", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**historyIdOrReleaseTag:** `string` — Either the UUID of Deployment History Item you'd like to retrieve, or the name of a Release Tag that's pointing to the Deployment History Item you'd like to retrieve.

</dd>
</dl>

<dl>
<dd>

**id:** `string` — A UUID string identifying this deployment.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Deployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deployments.<a href="/src/api/resources/deployments/client/Client.ts">listDeploymentReleaseTags</a>(id, { ...params }) -> Vellum.PaginatedDeploymentReleaseTagReadList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Release Tags associated with the specified Prompt Deployment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deployments.listDeploymentReleaseTags("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Prompt Deployment's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.ListDeploymentReleaseTagsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Deployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deployments.<a href="/src/api/resources/deployments/client/Client.ts">retrieveDeploymentReleaseTag</a>(id, name) -> Vellum.DeploymentReleaseTagRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a Deployment Release Tag by tag name, associated with a specified Deployment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deployments.retrieveDeploymentReleaseTag("id", "name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this deployment.

</dd>
</dl>

<dl>
<dd>

**name:** `string` — The name of the Release Tag associated with this Deployment that you'd like to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Deployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deployments.<a href="/src/api/resources/deployments/client/Client.ts">updateDeploymentReleaseTag</a>(id, name, { ...params }) -> Vellum.DeploymentReleaseTagRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing Release Tag associated with the specified Prompt Deployment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deployments.updateDeploymentReleaseTag("id", "name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this deployment.

</dd>
</dl>

<dl>
<dd>

**name:** `string` — The name of the Release Tag associated with this Deployment that you'd like to update.

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.PatchedDeploymentReleaseTagUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Deployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.deployments.<a href="/src/api/resources/deployments/client/Client.ts">retrieveProviderPayload</a>({ ...params }) -> Vellum.DeploymentProviderPayloadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Given a set of input variable values, compile the exact payload that Vellum would send to the configured model provider
for execution if the execute-prompt endpoint had been invoked. Note that this endpoint does not actually execute the
prompt or make an API call to the model provider.

This endpoint is useful if you don't want to proxy LLM provider requests through Vellum and prefer to send them directly
to the provider yourself. Note that no guarantees are made on the format of this API's response schema, other than
that it will be a valid payload for the configured model provider. It's not recommended that you try to parse or
derive meaning from the response body and instead, should simply pass it directly to the model provider as is.

We encourage you to seek advise from Vellum Support before integrating with this API for production use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.deployments.retrieveProviderPayload({
    inputs: [
        {
            name: "name",
            type: "STRING",
            value: "value",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.DeploymentProviderPayloadRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Deployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## DocumentIndexes

<details><summary><code>client.documentIndexes.<a href="/src/api/resources/documentIndexes/client/Client.ts">list</a>({ ...params }) -> Vellum.PaginatedDocumentIndexReadList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to retrieve a list of Document Indexes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentIndexes.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.DocumentIndexesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentIndexes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documentIndexes.<a href="/src/api/resources/documentIndexes/client/Client.ts">create</a>({ ...params }) -> Vellum.DocumentIndexRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new document index.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentIndexes.create({
    label: "My Document Index",
    name: "my-document-index",
    indexingConfig: {
        vectorizer: {
            modelName: "hkunlp/instructor-xl",
            config: {
                instructionDomain: "",
                instructionQueryTextType: "plain_text",
                instructionDocumentTextType: "plain_text",
            },
        },
        chunking: {
            chunkerName: "sentence-chunker",
            chunkerConfig: {
                characterLimit: 1000,
                minOverlapRatio: 0.5,
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.DocumentIndexCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentIndexes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documentIndexes.<a href="/src/api/resources/documentIndexes/client/Client.ts">retrieve</a>(id) -> Vellum.DocumentIndexRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to retrieve a Document Index given its ID or name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentIndexes.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Document Index's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentIndexes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documentIndexes.<a href="/src/api/resources/documentIndexes/client/Client.ts">update</a>(id, { ...params }) -> Vellum.DocumentIndexRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to fully update a Document Index given its ID or name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentIndexes.update("id", {
    label: "label",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Document Index's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.DocumentIndexUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentIndexes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documentIndexes.<a href="/src/api/resources/documentIndexes/client/Client.ts">destroy</a>(id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to delete a Document Index given its ID or name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentIndexes.destroy("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Document Index's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentIndexes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documentIndexes.<a href="/src/api/resources/documentIndexes/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Vellum.DocumentIndexRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to partial update a Document Index given its ID or name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentIndexes.partialUpdate("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Document Index's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.PatchedDocumentIndexUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentIndexes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documentIndexes.<a href="/src/api/resources/documentIndexes/client/Client.ts">addDocument</a>(documentId, id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a previously uploaded Document to the specified Document Index.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentIndexes.addDocument("document_id", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `string` — Either the Vellum-generated ID or the originally supplied external_id that uniquely identifies the Document you'd like to add.

</dd>
</dl>

<dl>
<dd>

**id:** `string` — Either the Vellum-generated ID or the originally specified name that uniquely identifies the Document Index to which you'd like to add the Document.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentIndexes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documentIndexes.<a href="/src/api/resources/documentIndexes/client/Client.ts">removeDocument</a>(documentId, id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a Document from a Document Index without deleting the Document itself.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documentIndexes.removeDocument("document_id", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**documentId:** `string` — Either the Vellum-generated ID or the originally supplied external_id that uniquely identifies the Document you'd like to remove.

</dd>
</dl>

<dl>
<dd>

**id:** `string` — Either the Vellum-generated ID or the originally specified name that uniquely identifies the Document Index from which you'd like to remove a Document.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DocumentIndexes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Documents

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">list</a>({ ...params }) -> Vellum.PaginatedSlimDocumentList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to list documents. Optionally filter on supported fields.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.DocumentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">retrieve</a>(id) -> Vellum.DocumentRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a Document, keying off of either its Vellum-generated ID or its external ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this document.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">destroy</a>(id) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a Document, keying off of either its Vellum-generated ID or its external ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.destroy("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this document.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Vellum.DocumentRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a Document, keying off of either its Vellum-generated ID or its external ID. Particularly useful for updating its metadata.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.partialUpdate("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this document.

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.PatchedDocumentUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.documents.<a href="/src/api/resources/documents/client/Client.ts">upload</a>(contents, { ...params }) -> Vellum.UploadDocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a document to be indexed and used for search.

**Note:** Uses a base url of `https://documents.vellum.ai`.

This is a multipart/form-data request. The `contents` field should be a file upload. It also expects a JSON body with the following fields:

-   `add_to_index_names: list[str]` - Optionally include the names of all indexes that you'd like this document to be included in
-   `external_id: str | None` - Optionally include an external ID for this document. This is useful if you want to re-upload the same document later when its contents change and would like it to be re-indexed.
-   `label: str` - A human-friendly name for this document. Typically the filename.
-   `keywords: list[str] | None` - Optionally include a list of keywords that'll be associated with this document. Used when performing keyword searches.
-   `metadata: dict[str, Any]` - A stringified JSON object containing any metadata associated with the document that you'd like to filter upon later.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.documents.upload(fs.createReadStream("/path/to/your/file"), {
    label: "label",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**contents:** `File | fs.ReadStream | Blob`

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.UploadDocumentBodyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Documents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## FolderEntities

<details><summary><code>client.folderEntities.<a href="/src/api/resources/folderEntities/client/Client.ts">list</a>({ ...params }) -> Vellum.PaginatedFolderEntityList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all folder entities within a specified folder.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.folderEntities.list({
    parentFolderId: "parent_folder_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.FolderEntitiesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FolderEntities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.folderEntities.<a href="/src/api/resources/folderEntities/client/Client.ts">addEntityToFolder</a>(folderId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add an entity to a specific folder or root directory.

Adding an entity to a folder will remove it from any other folders it might have been a member of.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.folderEntities.addEntityToFolder("folder_id", {
    entityId: "entity_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**folderId:** `string`

The ID of the folder to which the entity should be added. This can be a UUID of a folder, or the name of a root
directory. Supported root directories include:

-   PROMPT_SANDBOX
-   WORKFLOW_SANDBOX
-   DOCUMENT_INDEX
-   TEST_SUITE

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.AddEntityToFolderRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FolderEntities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## MetricDefinitions

<details><summary><code>client.metricDefinitions.<a href="/src/api/resources/metricDefinitions/client/Client.ts">executeMetricDefinition</a>(id, { ...params }) -> Vellum.MetricDefinitionExecution</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

An internal-only endpoint that's subject to breaking changes without notice. Not intended for public use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.metricDefinitions.executeMetricDefinition("id", {
    inputs: [
        {
            name: "name",
            type: "STRING",
            value: "value",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Metric Definition's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.ExecuteMetricDefinition`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MetricDefinitions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## MlModels

<details><summary><code>client.mlModels.<a href="/src/api/resources/mlModels/client/Client.ts">retrieve</a>(id) -> Vellum.MlModelRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve details about an ML Model

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.mlModels.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the ML Model's ID, its unique name, or its ID in the workspace.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MlModels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sandboxes

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">deployPrompt</a>(id, promptVariantId, { ...params }) -> Vellum.DeploymentRead</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.deployPrompt("id", "prompt_variant_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this sandbox.

</dd>
</dl>

<dl>
<dd>

**promptVariantId:** `string` — An ID identifying the Prompt you'd like to deploy.

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.DeploySandboxPromptRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sandboxes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">upsertSandboxScenario</a>(id, { ...params }) -> Vellum.SandboxScenario</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upserts a new scenario for a sandbox, keying off of the optionally provided scenario id.

If an id is provided and has a match, the scenario will be updated. If no id is provided or no match
is found, a new scenario will be appended to the end.

Note that a full replacement of the scenario is performed, so any fields not provided will be removed
or overwritten with default values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.upsertSandboxScenario("id", {
    label: "Scenario 1",
    inputs: [
        {
            type: "STRING",
            value: "Hello, world!",
            name: "var_1",
        },
        {
            type: "STRING",
            value: "Why hello, there!",
            name: "var_2",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this sandbox.

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.UpsertSandboxScenarioRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sandboxes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sandboxes.<a href="/src/api/resources/sandboxes/client/Client.ts">deleteSandboxScenario</a>(id, scenarioId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an existing scenario from a sandbox, keying off of the provided scenario id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sandboxes.deleteSandboxScenario("id", "scenario_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this sandbox.

</dd>
</dl>

<dl>
<dd>

**scenarioId:** `string` — An id identifying the scenario that you'd like to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sandboxes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TestSuiteRuns

<details><summary><code>client.testSuiteRuns.<a href="/src/api/resources/testSuiteRuns/client/Client.ts">create</a>({ ...params }) -> Vellum.TestSuiteRunRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger a Test Suite and create a new Test Suite Run

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testSuiteRuns.create({
    execConfig: {
        type: "DEPLOYMENT_RELEASE_TAG",
        data: {
            deploymentId: "deployment_id",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.TestSuiteRunCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestSuiteRuns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testSuiteRuns.<a href="/src/api/resources/testSuiteRuns/client/Client.ts">retrieve</a>(id) -> Vellum.TestSuiteRunRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific Test Suite Run by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testSuiteRuns.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this test suite run.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestSuiteRuns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testSuiteRuns.<a href="/src/api/resources/testSuiteRuns/client/Client.ts">listExecutions</a>(id, { ...params }) -> Vellum.PaginatedTestSuiteRunExecutionList</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testSuiteRuns.listExecutions("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this test suite run.

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.TestSuiteRunsListExecutionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestSuiteRuns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## TestSuites

<details><summary><code>client.testSuites.<a href="/src/api/resources/testSuites/client/Client.ts">listTestSuiteTestCases</a>(id, { ...params }) -> Vellum.PaginatedTestSuiteTestCaseList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the Test Cases associated with a Test Suite

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testSuites.listTestSuiteTestCases("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Test Suites' ID or its unique name

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.ListTestSuiteTestCasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestSuites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testSuites.<a href="/src/api/resources/testSuites/client/Client.ts">upsertTestSuiteTestCase</a>(id, { ...params }) -> Vellum.TestSuiteTestCase</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upserts a new test case for a test suite, keying off of the optionally provided test case id.

If an id is provided and has a match, the test case will be updated. If no id is provided or no match
is found, a new test case will be appended to the end.

Note that a full replacement of the test case is performed, so any fields not provided will be removed
or overwritten with default values.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testSuites.upsertTestSuiteTestCase("id", {
    inputValues: [
        {
            type: "STRING",
            name: "name",
        },
    ],
    evaluationValues: [
        {
            type: "STRING",
            name: "name",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Test Suites' ID or its unique name

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.UpsertTestSuiteTestCaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestSuites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testSuites.<a href="/src/api/resources/testSuites/client/Client.ts">testSuiteTestCasesBulk</a>(id, { ...params }) -> core.Stream<Vellum.TestSuiteTestCaseBulkResult[]></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Created, replace, and delete Test Cases within the specified Test Suite in bulk

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testSuites.testSuiteTestCasesBulk("string", [
    {
        id: "string",
        type: "CREATE",
        data: {
            label: "string",
            inputValues: [
                {
                    type: "STRING",
                    value: "string",
                    name: "string",
                },
            ],
            evaluationValues: [
                {
                    type: "STRING",
                    value: "string",
                    name: "string",
                },
            ],
            externalId: "string",
        },
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Test Suites' ID or its unique name

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.TestSuiteTestCaseBulkOperationRequest[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestSuites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.testSuites.<a href="/src/api/resources/testSuites/client/Client.ts">deleteTestSuiteTestCase</a>(id, testCaseId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an existing test case for a test suite, keying off of the test case id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.testSuites.deleteTestSuiteTestCase("id", "test_case_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Test Suites' ID or its unique name

</dd>
</dl>

<dl>
<dd>

**testCaseId:** `string` — An id identifying the test case that you'd like to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TestSuites.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## WorkflowDeployments

<details><summary><code>client.workflowDeployments.<a href="/src/api/resources/workflowDeployments/client/Client.ts">list</a>({ ...params }) -> Vellum.PaginatedSlimWorkflowDeploymentList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to list all Workflow Deployments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowDeployments.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vellum.WorkflowDeploymentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowDeployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workflowDeployments.<a href="/src/api/resources/workflowDeployments/client/Client.ts">retrieve</a>(id) -> Vellum.WorkflowDeploymentRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to retrieve a workflow deployment given its ID or name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowDeployments.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Workflow Deployment's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowDeployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workflowDeployments.<a href="/src/api/resources/workflowDeployments/client/Client.ts">workflowDeploymentHistoryItemRetrieve</a>(historyIdOrReleaseTag, id) -> Vellum.WorkflowDeploymentHistoryItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a specific Workflow Deployment History Item by either its UUID or the name of a Release Tag that points to it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowDeployments.workflowDeploymentHistoryItemRetrieve("history_id_or_release_tag", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**historyIdOrReleaseTag:** `string` — Either the UUID of Workflow Deployment History Item you'd like to retrieve, or the name of a Release Tag that's pointing to the Workflow Deployment History Item you'd like to retrieve.

</dd>
</dl>

<dl>
<dd>

**id:** `string` — A UUID string identifying this workflow deployment.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowDeployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workflowDeployments.<a href="/src/api/resources/workflowDeployments/client/Client.ts">listWorkflowReleaseTags</a>(id, { ...params }) -> Vellum.PaginatedWorkflowReleaseTagReadList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List Release Tags associated with the specified Workflow Deployment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowDeployments.listWorkflowReleaseTags("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Workflow Deployment's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.ListWorkflowReleaseTagsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowDeployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workflowDeployments.<a href="/src/api/resources/workflowDeployments/client/Client.ts">retrieveWorkflowReleaseTag</a>(id, name) -> Vellum.WorkflowReleaseTagRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a Workflow Release Tag by tag name, associated with a specified Workflow Deployment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowDeployments.retrieveWorkflowReleaseTag("id", "name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this workflow deployment.

</dd>
</dl>

<dl>
<dd>

**name:** `string` — The name of the Release Tag associated with this Workflow Deployment that you'd like to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowDeployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workflowDeployments.<a href="/src/api/resources/workflowDeployments/client/Client.ts">updateWorkflowReleaseTag</a>(id, name, { ...params }) -> Vellum.WorkflowReleaseTagRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing Release Tag associated with the specified Workflow Deployment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowDeployments.updateWorkflowReleaseTag("id", "name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this workflow deployment.

</dd>
</dl>

<dl>
<dd>

**name:** `string` — The name of the Release Tag associated with this Workflow Deployment that you'd like to update.

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.PatchedWorkflowReleaseTagUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowDeployments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## WorkflowSandboxes

<details><summary><code>client.workflowSandboxes.<a href="/src/api/resources/workflowSandboxes/client/Client.ts">deployWorkflow</a>(id, workflowId, { ...params }) -> Vellum.WorkflowDeploymentRead</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflowSandboxes.deployWorkflow("id", "workflow_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — A UUID string identifying this workflow sandbox.

</dd>
</dl>

<dl>
<dd>

**workflowId:** `string` — An ID identifying the Workflow you'd like to deploy.

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.DeploySandboxWorkflowRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkflowSandboxes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Workflows

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">pull</a>(id, { ...params }) -> stream.Readable</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

An internal-only endpoint that's subject to breaking changes without notice. Not intended for public use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.pull("string", {
    format: "json",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — The ID of the Workflow to pull from

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.WorkflowsPullRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workflows.<a href="/src/api/resources/workflows/client/Client.ts">push</a>(artifact, { ...params }) -> Vellum.WorkflowPushResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

An internal-only endpoint that's subject to breaking changes without notice. Not intended for public use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workflows.push(fs.createReadStream("/path/to/your/file"), {
    execConfig: "exec_config",
    label: "label",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**artifact:** `File | fs.ReadStream | Blob | undefined`

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.WorkflowPushRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Workflows.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## WorkspaceSecrets

<details><summary><code>client.workspaceSecrets.<a href="/src/api/resources/workspaceSecrets/client/Client.ts">retrieve</a>(id) -> Vellum.WorkspaceSecretRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to retrieve a Workspace Secret given its ID or name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workspaceSecrets.retrieve("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Workspace Secret's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkspaceSecrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.workspaceSecrets.<a href="/src/api/resources/workspaceSecrets/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Vellum.WorkspaceSecretRead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Used to update a Workspace Secret given its ID or name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.workspaceSecrets.partialUpdate("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Either the Workspace Secret's ID or its unique name

</dd>
</dl>

<dl>
<dd>

**request:** `Vellum.PatchedWorkspaceSecretUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WorkspaceSecrets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
