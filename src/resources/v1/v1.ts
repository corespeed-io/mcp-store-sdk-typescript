// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentationAPI from './documentation';
import { Documentation, DocumentationProxyParams, DocumentationProxyResponse } from './documentation';
import * as ServersAPI from './servers';
import {
  ServerCreateParams,
  ServerDeleteResponse,
  ServerListParams,
  ServerRetrieveByPackageParams,
  ServerUpdateParams,
  Servers,
} from './servers';
import { APIPromise } from '../../core/api-promise';
import { CursorPage } from '../../core/pagination';
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

export type ServersCursorPage = CursorPage<Server>;

export interface Argument {
  type: 'positional' | 'named';

  choices?: Array<string>;

  default?: string;

  description?: string;

  format?: 'string' | 'number' | 'boolean' | 'file_path';

  isRepeated?: boolean;

  isRequired?: boolean;

  isSecret?: boolean;

  name?: string;

  properties?: { [key: string]: Input };

  template?: string;

  value?: string;

  valueHint?: string;

  variables?: { [key: string]: Input };
}

export interface Input {
  choices?: Array<string>;

  default?: string;

  description?: string;

  format?: 'string' | 'number' | 'boolean' | 'file_path';

  isRequired?: boolean;

  isSecret?: boolean;

  properties?: { [key: string]: Input };

  template?: string;

  value?: string;
}

export interface KeyValueInput {
  name: string;

  choices?: Array<string>;

  default?: string;

  description?: string;

  format?: 'string' | 'number' | 'boolean' | 'file_path';

  isRequired?: boolean;

  isSecret?: boolean;

  properties?: { [key: string]: Input };

  template?: string;

  value?: string;

  variables?: { [key: string]: Input };
}

export interface Package {
  name: string;

  registryName: string;

  version: string;

  environmentVariables?: Array<KeyValueInput>;

  packageArguments?: Array<Argument>;

  runtimeArguments?: Array<Argument>;

  runtimeHint?: string;
}

export interface Remote {
  transportType: string;

  url: string;

  headers?: Array<KeyValueInput>;
}

export interface Repository {
  source: string;

  url: string;
}

export interface Server {
  id: string;

  description: string;

  displayName: string;

  packageName: string;

  repository: Repository;

  scope: string;

  updatedAt: string;

  version: string;

  documentationUrl?: string;

  iconUrl?: string;
}

export interface ServerCreate {
  /**
   * Description of the MCP server
   */
  description: string;

  /**
   * The display name of the MCP server
   */
  displayName: string;

  /**
   * The package name of the MCP server
   */
  packageName: string;

  repository: Repository;

  /**
   * The scope of the MCP server
   */
  scope: string;

  /**
   * Version of the MCP server
   */
  version: string;

  /**
   * URL to the documentation
   */
  documentationUrl?: string;

  /**
   * External icon URL (will be fetched and stored in R2)
   */
  iconUrl?: string;

  /**
   * Package configurations
   */
  packages?: Array<Package>;

  /**
   * Remote configurations
   */
  remotes?: Array<Remote>;
}

export interface ServerDetail {
  id: string;

  description: string;

  displayName: string;

  packageName: string;

  repository: Repository;

  scope: string;

  updatedAt: string;

  version: string;

  documentationUrl?: string;

  iconUrl?: string;

  packages?: Array<Package>;

  remotes?: Array<Remote>;
}

export interface ServerListResponse {
  /**
   * List of servers (without packages/remotes)
   */
  servers: Array<Server>;

  /**
   * Total number of servers
   */
  totalCount: number;

  /**
   * Cursor for next page. Undefined when no more results.
   */
  next?: string;
}

export interface ServerResponse {
  server: ServerDetail;
}

export interface ServerUpdate {
  /**
   * Description of the MCP server
   */
  description?: string;

  /**
   * The display name of the MCP server
   */
  displayName?: string;

  /**
   * URL to the documentation
   */
  documentationUrl?: string;

  /**
   * External icon URL (will be fetched and stored in R2, replacing old icon)
   */
  iconUrl?: string;

  /**
   * The package name of the MCP server
   */
  packageName?: string;

  /**
   * Package configurations
   */
  packages?: Array<Package>;

  /**
   * Remote configurations
   */
  remotes?: Array<Remote>;

  repository?: Repository;

  /**
   * The scope of the MCP server
   */
  scope?: string;

  /**
   * Version of the MCP server
   */
  version?: string;
}

export interface V1CheckHealthResponse {
  message: string;

  status: string;
}

V1.Documentation = Documentation;
V1.Servers = Servers;

export declare namespace V1 {
  export {
    type Argument as Argument,
    type Input as Input,
    type KeyValueInput as KeyValueInput,
    type Package as Package,
    type Remote as Remote,
    type Repository as Repository,
    type Server as Server,
    type ServerCreate as ServerCreate,
    type ServerDetail as ServerDetail,
    type ServerListResponse as ServerListResponse,
    type ServerResponse as ServerResponse,
    type ServerUpdate as ServerUpdate,
    type V1CheckHealthResponse as V1CheckHealthResponse,
  };

  export {
    Documentation as Documentation,
    type DocumentationProxyResponse as DocumentationProxyResponse,
    type DocumentationProxyParams as DocumentationProxyParams,
  };

  export {
    Servers as Servers,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
    type ServerRetrieveByPackageParams as ServerRetrieveByPackageParams,
  };
}
