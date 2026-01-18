// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ServersAPI from './servers';
import { ServersCursorPage } from './servers';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Me extends APIResource {
  /**
   * Get information about the currently authenticated user
   */
  retrieve(options?: RequestOptions): APIPromise<MeResponse> {
    return this._client.get('/api/v1/me', options);
  }

  /**
   * Get all servers owned by the currently authenticated user
   */
  listServers(
    query: MeListServersParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ServersCursorPage, ServersAPI.Server> {
    return this._client.getAPIList('/api/v1/me/servers', CursorPage<ServersAPI.Server>, {
      query,
      ...options,
    });
  }
}

export interface MeResponse {
  id: string;

  isAdmin: boolean;
}

export interface MeListServersParams extends CursorPageParams {
  /**
   * Filter by name or description
   */
  search?: string;

  /**
   * Sort by 'displayName' or 'updatedAt' (default)
   */
  sort?: string;
}

export declare namespace Me {
  export { type MeResponse as MeResponse, type MeListServersParams as MeListServersParams };
}

export { type ServersCursorPage };
