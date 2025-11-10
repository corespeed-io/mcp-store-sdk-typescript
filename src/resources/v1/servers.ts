// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Servers extends APIResource {
  /**
   * Create a new MCP server. If iconUrl is provided, the server will fetch the icon
   * from the external URL and upload it to R2 storage. The response will contain the
   * R2 URL.
   */
  create(params: ServerCreateParams, options?: RequestOptions): APIPromise<ServerResponse> {
    const { server } = params;
    return this._client.post('/api/v1/servers', { body: server, ...options });
  }

  /**
   * Retrieve detailed information about a specific MCP server
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ServerResponse> {
    return this._client.get(path`/api/v1/servers/${id}`, options);
  }

  /**
   * Update an existing MCP server. If a new iconUrl is provided, the server will
   * fetch the icon from the external URL, upload it to R2 storage, and delete the
   * old icon. The response will contain the new R2 URL.
   */
  update(
    id: string,
    params: ServerUpdateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<ServerResponse> {
    const { server } = params ?? {};
    return this._client.put(path`/api/v1/servers/${id}`, { body: server, ...options });
  }

  /**
   * Retrieve paginated list of MCP servers with cursor-based pagination
   */
  list(
    query: ServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ServerListResponsesCursorPage, ServerListResponse> {
    return this._client.getAPIList('/api/v1/servers', CursorPage<ServerListResponse>, { query, ...options });
  }

  /**
   * Delete an existing MCP server and clean up associated resources (including icon
   * from R2 storage)
   */
  delete(id: string, options?: RequestOptions): APIPromise<ServerDeleteResponse> {
    return this._client.delete(path`/api/v1/servers/${id}`, options);
  }

  /**
   * Retrieve detailed information about a specific MCP server using its scope and
   * package name
   */
  retrieveByPackage(
    packageName: string,
    params: ServerRetrieveByPackageParams,
    options?: RequestOptions,
  ): APIPromise<ServerResponse> {
    const { scope } = params;
    return this._client.get(path`/api/v1/servers/${scope}/${packageName}`, options);
  }
}

export type ServerListResponsesCursorPage = CursorPage<ServerListResponse>;

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

export interface ServerListResponse {
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

export interface ServerDeleteResponse {
  message: string;
}

export interface ServerCreateParams {
  server: ServerCreate;
}

export interface ServerUpdateParams {
  server?: ServerUpdate;
}

export interface ServerListParams extends CursorPageParams {
  /**
   * Maximum number of servers to return
   */
  limit?: number;

  /**
   * Search term to filter servers by name or description
   */
  search?: string;

  /**
   * Field to sort by
   */
  sort?: string;
}

export interface ServerRetrieveByPackageParams {
  /**
   * The scope of the MCP server (e.g., '@modelcontextprotocol', 'github'). The @
   * symbol is optional and will be added automatically if not provided.
   */
  scope: string;
}

export declare namespace Servers {
  export {
    type Argument as Argument,
    type Input as Input,
    type KeyValueInput as KeyValueInput,
    type Package as Package,
    type Remote as Remote,
    type Repository as Repository,
    type ServerCreate as ServerCreate,
    type ServerDetail as ServerDetail,
    type ServerResponse as ServerResponse,
    type ServerUpdate as ServerUpdate,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerListResponsesCursorPage as ServerListResponsesCursorPage,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
    type ServerRetrieveByPackageParams as ServerRetrieveByPackageParams,
  };
}
