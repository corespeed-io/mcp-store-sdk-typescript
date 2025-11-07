// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentationAPI from './documentation';
import { Documentation, DocumentationProxyParams, DocumentationProxyResponse } from './documentation';
import * as ServersAPI from './servers';
import {
  Argument,
  Input,
  KeyValueInput,
  Package,
  Remote,
  Repository,
  ServerCreateParams,
  ServerDeleteResponse,
  ServerDetail,
  ServerDetailsOffsetPage,
  ServerListParams,
  ServerResponse,
  ServerUpdateParams,
  Servers,
  VersionDetail,
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
    type Argument as Argument,
    type Input as Input,
    type KeyValueInput as KeyValueInput,
    type Package as Package,
    type Remote as Remote,
    type Repository as Repository,
    type ServerDetail as ServerDetail,
    type ServerResponse as ServerResponse,
    type VersionDetail as VersionDetail,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerDetailsOffsetPage as ServerDetailsOffsetPage,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
  };
}
