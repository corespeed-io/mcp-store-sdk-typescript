// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ServersAPI from './servers';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Gateway extends APIResource {
  /**
   * Publish a new MCP server from the gateway. Requires gateway service token.
   */
  publishServer(
    body: GatewayPublishServerParams,
    options?: RequestOptions,
  ): APIPromise<GatewayPublishServerResponse> {
    return this._client.post('/api/v1/gateway/servers', { body, ...options });
  }

  /**
   * Remove an MCP server from the store. Requires gateway service token.
   */
  unpublishServer(
    packageName: string,
    params: GatewayUnpublishServerParams,
    options?: RequestOptions,
  ): APIPromise<GatewayUnpublishServerResponse> {
    const { scope } = params;
    return this._client.delete(path`/api/v1/gateway/servers/${scope}/${packageName}`, options);
  }

  /**
   * Update an existing MCP server from the gateway. Requires gateway service token.
   */
  updateServer(
    packageName: string,
    params: GatewayUpdateServerParams,
    options?: RequestOptions,
  ): APIPromise<GatewayUpdateServerResponse> {
    const { scope, ...body } = params;
    return this._client.put(path`/api/v1/gateway/servers/${scope}/${packageName}`, { body, ...options });
  }
}

export interface GatewayPublishServerResponse {
  server: ServersAPI.ServerDetail;
}

export interface GatewayUnpublishServerResponse {
  message: string;
}

export interface GatewayUpdateServerResponse {
  server: ServersAPI.ServerDetail;
}

export interface GatewayPublishServerParams {
  description: string;

  displayName: string;

  packageName: string;

  scope: string;

  author?: string;

  category?: string;

  detailedDescription?: string;

  /**
   * External icon URL. The server will fetch the icon from this URL and upload it to
   * R2 storage. The response will contain the R2 URL.
   */
  iconUrl?: string;

  packages?: Array<Shared.Package>;

  remotes?: Array<Shared.Remote>;

  repository?: Shared.Repository | null;

  tags?: Array<string>;

  version?: string;
}

export interface GatewayUnpublishServerParams {
  /**
   * The scope of the MCP server (e.g., '@modelcontextprotocol', 'github'). The @
   * symbol is optional.
   */
  scope: string;
}

export interface GatewayUpdateServerParams {
  /**
   * Path param: The scope of the MCP server (e.g., '@modelcontextprotocol',
   * 'github'). The @ symbol is optional.
   */
  scope: string;

  /**
   * Body param
   */
  author?: string;

  /**
   * Body param
   */
  category?: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  detailedDescription?: string;

  /**
   * Body param
   */
  displayName?: string;

  /**
   * Body param: External icon URL. If provided, the server will fetch the icon from
   * this URL, upload it to R2 storage, and delete the old icon. The response will
   * contain the new R2 URL.
   */
  iconUrl?: string;

  /**
   * Body param
   */
  packages?: Array<Shared.Package>;

  /**
   * Body param
   */
  remotes?: Array<Shared.Remote>;

  /**
   * Body param
   */
  repository?: Shared.Repository | null;

  /**
   * Body param
   */
  tags?: Array<string>;

  /**
   * Body param
   */
  version?: string;
}

export declare namespace Gateway {
  export {
    type GatewayPublishServerResponse as GatewayPublishServerResponse,
    type GatewayUnpublishServerResponse as GatewayUnpublishServerResponse,
    type GatewayUpdateServerResponse as GatewayUpdateServerResponse,
    type GatewayPublishServerParams as GatewayPublishServerParams,
    type GatewayUnpublishServerParams as GatewayUnpublishServerParams,
    type GatewayUpdateServerParams as GatewayUpdateServerParams,
  };
}
