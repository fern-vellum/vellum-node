/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vellum from "../../api";
import * as core from "../../core";
import { OpenAiVectorizerTextEmbedding3SmallRequest } from "./OpenAiVectorizerTextEmbedding3SmallRequest";
import { OpenAiVectorizerTextEmbedding3LargeRequest } from "./OpenAiVectorizerTextEmbedding3LargeRequest";
import { OpenAiVectorizerTextEmbeddingAda002Request } from "./OpenAiVectorizerTextEmbeddingAda002Request";
import { BasicVectorizerIntfloatMultilingualE5LargeRequest } from "./BasicVectorizerIntfloatMultilingualE5LargeRequest";
import { BasicVectorizerSentenceTransformersMultiQaMpnetBaseCosV1Request } from "./BasicVectorizerSentenceTransformersMultiQaMpnetBaseCosV1Request";
import { BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1Request } from "./BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1Request";
import { HkunlpInstructorXlVectorizerRequest } from "./HkunlpInstructorXlVectorizerRequest";

export const IndexingConfigVectorizerRequest: core.serialization.Schema<
    serializers.IndexingConfigVectorizerRequest.Raw,
    Vellum.IndexingConfigVectorizerRequest
> = core.serialization
    .union(core.serialization.discriminant("modelName", "model_name"), {
        "text-embedding-3-small": OpenAiVectorizerTextEmbedding3SmallRequest,
        "text-embedding-3-large": OpenAiVectorizerTextEmbedding3LargeRequest,
        "text-embedding-ada-002": OpenAiVectorizerTextEmbeddingAda002Request,
        "intfloat/multilingual-e5-large": BasicVectorizerIntfloatMultilingualE5LargeRequest,
        "sentence-transformers/multi-qa-mpnet-base-cos-v1":
            BasicVectorizerSentenceTransformersMultiQaMpnetBaseCosV1Request,
        "sentence-transformers/multi-qa-mpnet-base-dot-v1":
            BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1Request,
        "hkunlp/instructor-xl": HkunlpInstructorXlVectorizerRequest,
    })
    .transform<Vellum.IndexingConfigVectorizerRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace IndexingConfigVectorizerRequest {
    type Raw =
        | IndexingConfigVectorizerRequest.TextEmbedding3Small
        | IndexingConfigVectorizerRequest.TextEmbedding3Large
        | IndexingConfigVectorizerRequest.TextEmbeddingAda002
        | IndexingConfigVectorizerRequest.IntfloatMultilingualE5Large
        | IndexingConfigVectorizerRequest.SentenceTransformersMultiQaMpnetBaseCosV1
        | IndexingConfigVectorizerRequest.SentenceTransformersMultiQaMpnetBaseDotV1
        | IndexingConfigVectorizerRequest.HkunlpInstructorXl;

    interface TextEmbedding3Small extends OpenAiVectorizerTextEmbedding3SmallRequest.Raw {
        model_name: "text-embedding-3-small";
    }

    interface TextEmbedding3Large extends OpenAiVectorizerTextEmbedding3LargeRequest.Raw {
        model_name: "text-embedding-3-large";
    }

    interface TextEmbeddingAda002 extends OpenAiVectorizerTextEmbeddingAda002Request.Raw {
        model_name: "text-embedding-ada-002";
    }

    interface IntfloatMultilingualE5Large extends BasicVectorizerIntfloatMultilingualE5LargeRequest.Raw {
        model_name: "intfloat/multilingual-e5-large";
    }

    interface SentenceTransformersMultiQaMpnetBaseCosV1
        extends BasicVectorizerSentenceTransformersMultiQaMpnetBaseCosV1Request.Raw {
        model_name: "sentence-transformers/multi-qa-mpnet-base-cos-v1";
    }

    interface SentenceTransformersMultiQaMpnetBaseDotV1
        extends BasicVectorizerSentenceTransformersMultiQaMpnetBaseDotV1Request.Raw {
        model_name: "sentence-transformers/multi-qa-mpnet-base-dot-v1";
    }

    interface HkunlpInstructorXl extends HkunlpInstructorXlVectorizerRequest.Raw {
        model_name: "hkunlp/instructor-xl";
    }
}
