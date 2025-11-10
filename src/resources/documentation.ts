// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Documentation extends APIResource {
  /**
   * Fetch and proxy documentation from external URLs to bypass CORS restrictions.
   * This endpoint validates URLs against a trusted domain list and includes rate
   * limiting (60 req/15min). Responses are cached for 60 minutes to improve
   * performance. Returns plain text markdown with appropriate HTTP status codes.
   */
  proxy(query: DocumentationProxyParams, options?: RequestOptions): APIPromise<DocumentationProxyResponse> {
    return this._client.get('/api/v1/documentation/proxy', { query, ...options });
  }
}

export interface DocumentationProxyResponse {
  /**
   * The markdown/text content of the documentation
   */
  content: string;
}

export interface DocumentationProxyParams {
  /**
   * Documentation URL to fetch (must be a valid HTTP/HTTPS URL)
   */
  url: string;
}

export declare namespace Documentation {
  export {
    type DocumentationProxyResponse as DocumentationProxyResponse,
    type DocumentationProxyParams as DocumentationProxyParams,
  };
}
