// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ServersAPI from './servers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Gateway extends APIResource {
  /**
   * Publish a new MCP server from the gateway. Requires gateway service token.
   */
  publishServer(options?: RequestOptions): APIPromise<GatewayPublishServerResponse> {
    return this._client.post('/api/v1/gateway/servers', options);
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
    const { scope } = params;
    return this._client.put(path`/api/v1/gateway/servers/${scope}/${packageName}`, options);
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

export interface GatewayUnpublishServerParams {
  scope: string;
}

export interface GatewayUpdateServerParams {
  scope: string;
}

export declare namespace Gateway {
  export {
    type GatewayPublishServerResponse as GatewayPublishServerResponse,
    type GatewayUnpublishServerResponse as GatewayUnpublishServerResponse,
    type GatewayUpdateServerResponse as GatewayUpdateServerResponse,
    type GatewayUnpublishServerParams as GatewayUnpublishServerParams,
    type GatewayUpdateServerParams as GatewayUpdateServerParams,
  };
}
