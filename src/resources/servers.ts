// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { ServersCursorPage } from './shared';
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
  create(params: ServerCreateParams, options?: RequestOptions): APIPromise<Shared.ServerResponse> {
    const { server } = params;
    return this._client.post('/api/v1/servers', { body: server, ...options });
  }

  /**
   * Retrieve detailed information about a specific MCP server
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.ServerResponse> {
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
  ): APIPromise<Shared.ServerResponse> {
    const { server } = params ?? {};
    return this._client.put(path`/api/v1/servers/${id}`, { body: server, ...options });
  }

  /**
   * Retrieve paginated list of MCP servers with cursor-based pagination
   */
  list(
    query: ServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ServersCursorPage, Shared.Server> {
    return this._client.getAPIList('/api/v1/servers', CursorPage<Shared.Server>, { query, ...options });
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
  ): APIPromise<Shared.ServerResponse> {
    const { scope } = params;
    return this._client.get(path`/api/v1/servers/${scope}/${packageName}`, options);
  }
}

export interface ServerDeleteResponse {
  message: string;
}

export interface ServerCreateParams {
  server: Shared.ServerCreate;
}

export interface ServerUpdateParams {
  server?: Shared.ServerUpdate;
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
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
    type ServerRetrieveByPackageParams as ServerRetrieveByPackageParams,
  };
}

export { type ServersCursorPage };
