// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Servers extends APIResource {
  /**
   * Create a new MCP server. If iconUrl is provided, the server will fetch the icon
   * from the external URL and upload it to R2 storage. The response will contain the
   * R2 URL.
   */
  create(body: ServerCreateParams, options?: RequestOptions): APIPromise<ServerCreateResponse> {
    return this._client.post('/api/v1/servers', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific MCP server
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ServerRetrieveResponse> {
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
  ): APIPromise<ServerUpdateResponse> {
    return this._client.put(path`/api/v1/servers/${id}`, { body, ...options });
  }

  /**
   * Retrieve paginated list of MCP servers with cursor-based pagination
   */
  list(
    query: ServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ServersCursorPage, Server> {
    return this._client.getAPIList('/api/v1/servers', CursorPage<Server>, { query, ...options });
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
  ): APIPromise<ServerRetrieveByPackageResponse> {
    const { scope } = params;
    return this._client.get(path`/api/v1/servers/${scope}/${packageName}`, options);
  }
}

export type ServersCursorPage = CursorPage<Server>;

export interface Server {
  id: string;

  description: string;

  displayName: string;

  packageName: string;

  scope: string;

  updatedAt: string;

  version: string;

  author?: string;

  category?: string;

  createdAt?: string;

  developerId?: string;

  documentationUrl?: string;

  iconUrl?: string;

  repository?: Shared.Repository | null;

  source?: 'gateway' | 'api' | 'seed';

  tags?: Array<string>;
}

export interface ServerCreate {
  description: string;

  displayName: string;

  packageName: string;

  scope: string;

  version: string;

  author?: string;

  category?: string;

  /**
   * External icon URL. The server will fetch the icon from this URL and upload it to
   * R2 storage. The response will contain the R2 URL.
   */
  iconUrl?: string;

  packages?: Array<Shared.Package>;

  remotes?: Array<Shared.Remote>;

  repository?: Shared.Repository | null;

  tags?: Array<string>;
}

export interface ServerDetail {
  id: string;

  description: string;

  displayName: string;

  packageName: string;

  scope: string;

  updatedAt: string;

  version: string;

  author?: string;

  category?: string;

  createdAt?: string;

  developerId?: string;

  documentationUrl?: string;

  iconUrl?: string;

  packages?: Array<Shared.Package>;

  remotes?: Array<Shared.Remote>;

  repository?: Shared.Repository | null;

  source?: 'gateway' | 'api' | 'seed';

  tags?: Array<string>;
}

export interface ServerUpdate {
  author?: string;

  category?: string;

  description?: string;

  displayName?: string;

  documentationUrl?: string;

  /**
   * External icon URL. If provided, the server will fetch the icon from this URL,
   * upload it to R2 storage, and delete the old icon. The response will contain the
   * new R2 URL.
   */
  iconUrl?: string;

  packageName?: string;

  packages?: Array<Shared.Package>;

  remotes?: Array<Shared.Remote>;

  repository?: Shared.Repository | null;

  scope?: string;

  tags?: Array<string>;

  version?: string;
}

export interface ServerCreateResponse {
  server: ServerDetail;
}

export interface ServerRetrieveResponse {
  server: ServerDetail;
}

export interface ServerUpdateResponse {
  server: ServerDetail;
}

export interface ServerDeleteResponse {
  message: string;
}

export interface ServerRetrieveByPackageResponse {
  server: ServerDetail;
}

export interface ServerCreateParams {
  description: string;

  displayName: string;

  packageName: string;

  scope: string;

  version: string;

  author?: string;

  category?: string;

  /**
   * External icon URL. The server will fetch the icon from this URL and upload it to
   * R2 storage. The response will contain the R2 URL.
   */
  iconUrl?: string;

  packages?: Array<Shared.Package>;

  remotes?: Array<Shared.Remote>;

  repository?: Shared.Repository | null;

  tags?: Array<string>;
}

export interface ServerUpdateParams {
  author?: string;

  category?: string;

  description?: string;

  displayName?: string;

  documentationUrl?: string;

  /**
   * External icon URL. If provided, the server will fetch the icon from this URL,
   * upload it to R2 storage, and delete the old icon. The response will contain the
   * new R2 URL.
   */
  iconUrl?: string;

  packageName?: string;

  packages?: Array<Shared.Package>;

  remotes?: Array<Shared.Remote>;

  repository?: Shared.Repository | null;

  scope?: string;

  tags?: Array<string>;

  version?: string;
}

export interface ServerListParams extends CursorPageParams {
  /**
   * Filter by name or description
   */
  search?: string;

  /**
   * Sort by 'displayName' or 'updatedAt' (default)
   */
  sort?: string;
}

export interface ServerRetrieveByPackageParams {
  /**
   * The scope of the MCP server (e.g., '@modelcontextprotocol', 'github'). The @
   * symbol is optional.
   */
  scope: string;
}

export declare namespace Servers {
  export {
    type Server as Server,
    type ServerCreate as ServerCreate,
    type ServerDetail as ServerDetail,
    type ServerUpdate as ServerUpdate,
    type ServerCreateResponse as ServerCreateResponse,
    type ServerRetrieveResponse as ServerRetrieveResponse,
    type ServerUpdateResponse as ServerUpdateResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerRetrieveByPackageResponse as ServerRetrieveByPackageResponse,
    type ServersCursorPage as ServersCursorPage,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
    type ServerRetrieveByPackageParams as ServerRetrieveByPackageParams,
  };
}
