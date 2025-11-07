// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<ServerDetailsOffsetPage, ServerDetail> {
    return this._client.getAPIList('/api/v1/servers', OffsetPage<ServerDetail>, { query, ...options });
  }

  /**
   * Delete an existing MCP server and clean up associated resources (including icon
   * from R2 storage)
   */
  delete(id: string, options?: RequestOptions): APIPromise<ServerDeleteResponse> {
    return this._client.delete(path`/api/v1/servers/${id}`, options);
  }
}

export type ServerDetailsOffsetPage = OffsetPage<ServerDetail>;

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

export interface ServerListParams extends OffsetPageParams {
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
