// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentationAPI from './documentation';
import { Documentation, DocumentationProxyParams, DocumentationProxyResponse } from './documentation';
import * as ServersAPI from './servers';
import {
  ServerCreateParams,
  ServerCreateResponse,
  ServerDeleteResponse,
  ServerListParams,
  ServerListResponse,
  ServerListResponsesCursorPage,
  ServerRetrieveByPackageParams,
  ServerRetrieveByPackageResponse,
  ServerRetrieveResponse,
  ServerUpdateParams,
  ServerUpdateResponse,
  Servers,
} from './servers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class V1 extends APIResource {
  documentation: DocumentationAPI.Documentation = new DocumentationAPI.Documentation(this._client);
  servers: ServersAPI.Servers = new ServersAPI.Servers(this._client);

  /**
   * Check the health and status of the MCP Store API
   */
  checkHealth(options?: RequestOptions): APIPromise<V1CheckHealthResponse> {
    return this._client.get('/api/v1/health', options);
  }
}

export interface V1CheckHealthResponse {
  message: string;

  status: string;
}

V1.Documentation = Documentation;
V1.Servers = Servers;

export declare namespace V1 {
  export { type V1CheckHealthResponse as V1CheckHealthResponse };

  export {
    Documentation as Documentation,
    type DocumentationProxyResponse as DocumentationProxyResponse,
    type DocumentationProxyParams as DocumentationProxyParams,
  };

  export {
    Servers as Servers,
    type ServerCreateResponse as ServerCreateResponse,
    type ServerRetrieveResponse as ServerRetrieveResponse,
    type ServerUpdateResponse as ServerUpdateResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerRetrieveByPackageResponse as ServerRetrieveByPackageResponse,
    type ServerListResponsesCursorPage as ServerListResponsesCursorPage,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
    type ServerRetrieveByPackageParams as ServerRetrieveByPackageParams,
  };
}
