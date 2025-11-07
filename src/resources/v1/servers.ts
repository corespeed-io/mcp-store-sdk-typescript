// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Servers extends APIResource {
  /**
   * Create a new MCP server. If iconUrl is provided, the server will fetch the icon
   * from the external URL and upload it to R2 storage. The response will contain the
   * R2 URL.
   */
  create(body: ServerCreateParams, options?: RequestOptions): APIPromise<ServerResponse> {
    return this._client.post('/api/v1/servers', { body, ...options });
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
    body: ServerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServerResponse> {
    return this._client.put(path`/api/v1/servers/${id}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of available MCP servers
   */
  list(
    query: ServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServerListResponse> {
    return this._client.get('/api/v1/servers', { query, ...options });
  }

  /**
   * Delete an existing MCP server and clean up associated resources (including icon
   * from R2 storage)
   */
  delete(id: string, options?: RequestOptions): APIPromise<ServerDeleteResponse> {
    return this._client.delete(path`/api/v1/servers/${id}`, options);
  }
}

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

  properties?: { [key: string]: Argument.Properties };

  template?: string;

  value?: string;

  valueHint?: string;

  variables?: { [key: string]: Argument.Variables };
}

export namespace Argument {
  export interface Properties {
    choices?: Array<string>;

    default?: string;

    description?: string;

    format?: 'string' | 'number' | 'boolean' | 'file_path';

    isRequired?: boolean;

    isSecret?: boolean;

    properties?: { [key: string]: unknown };

    template?: string;

    value?: string;
  }

  export interface Variables {
    choices?: Array<string>;

    default?: string;

    description?: string;

    format?: 'string' | 'number' | 'boolean' | 'file_path';

    isRequired?: boolean;

    isSecret?: boolean;

    properties?: { [key: string]: unknown };

    template?: string;

    value?: string;
  }
}

export interface KeyValueInput {
  name: string;

  choices?: Array<string>;

  default?: string;

  description?: string;

  format?: 'string' | 'number' | 'boolean' | 'file_path';

  isRequired?: boolean;

  isSecret?: boolean;

  properties?: { [key: string]: KeyValueInput.Properties };

  template?: string;

  value?: string;

  variables?: { [key: string]: KeyValueInput.Variables };
}

export namespace KeyValueInput {
  export interface Properties {
    choices?: Array<string>;

    default?: string;

    description?: string;

    format?: 'string' | 'number' | 'boolean' | 'file_path';

    isRequired?: boolean;

    isSecret?: boolean;

    properties?: { [key: string]: unknown };

    template?: string;

    value?: string;
  }

  export interface Variables {
    choices?: Array<string>;

    default?: string;

    description?: string;

    format?: 'string' | 'number' | 'boolean' | 'file_path';

    isRequired?: boolean;

    isSecret?: boolean;

    properties?: { [key: string]: unknown };

    template?: string;

    value?: string;
  }
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
  id: string;

  source: string;

  url: string;
}

export interface ServerDetail {
  id: string;

  description: string;

  name: string;

  repository: Repository;

  versionDetail: VersionDetail;

  documentationUrl?: string;

  iconUrl?: string;

  packages?: Array<Package>;

  remotes?: Array<Remote>;
}

export interface ServerResponse {
  server: ServerDetail;
}

export interface VersionDetail {
  isLatest: boolean;

  releaseDate: string;

  version: string;
}

export interface ServerListResponse {
  /**
   * Number of servers returned in this response
   */
  count: number;

  data: Array<ServerDetail>;

  /**
   * Maximum number of servers requested
   */
  limit: number;

  /**
   * Number of servers skipped
   */
  offset: number;

  /**
   * Total number of servers available
   */
  total: number;
}

export interface ServerDeleteResponse {
  message: string;
}

export interface ServerCreateParams {
  description: string;

  name: string;

  repository: Repository;

  versionDetail: VersionDetail;

  /**
   * External icon URL. The server will fetch the icon from this URL and upload it to
   * R2 storage. The response will contain the R2 URL.
   */
  iconUrl?: string;

  packages?: Array<Package>;

  remotes?: Array<Remote>;
}

export interface ServerUpdateParams {
  description?: string;

  documentationUrl?: string;

  /**
   * External icon URL. If provided, the server will fetch the icon from this URL,
   * upload it to R2 storage, and delete the old icon. The response will contain the
   * new R2 URL.
   */
  iconUrl?: string;

  name?: string;

  packages?: Array<Package>;

  remotes?: Array<Remote>;

  repository?: Repository;

  versionDetail?: VersionDetail;
}

export interface ServerListParams {
  /**
   * Maximum number of servers to return
   */
  limit?: number;

  /**
   * Number of servers to skip for pagination
   */
  offset?: number;

  /**
   * Search term to filter servers by name or description
   */
  search?: string;

  /**
   * Field to sort by
   */
  sort?: string;
}

export declare namespace Servers {
  export {
    type Argument as Argument,
    type KeyValueInput as KeyValueInput,
    type Package as Package,
    type Remote as Remote,
    type Repository as Repository,
    type ServerDetail as ServerDetail,
    type ServerResponse as ServerResponse,
    type VersionDetail as VersionDetail,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
  };
}
