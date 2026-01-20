// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { AgentCursorPage, type AgentCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Create a new agent. If iconUrl is provided, the server will fetch the icon from
   * the external URL and upload it to R2 storage. The response will contain the R2
   * URL.
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentCreateResponse> {
    return this._client.post('/api/v1/agents', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific agent
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AgentRetrieveResponse> {
    return this._client.get(path`/api/v1/agents/${id}`, options);
  }

  /**
   * Update an existing agent. If a new iconUrl is provided, the server will fetch
   * the icon from the external URL, upload it to R2 storage, and delete the old
   * icon. The response will contain the new R2 URL.
   */
  update(
    id: string,
    body: AgentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentUpdateResponse> {
    return this._client.put(path`/api/v1/agents/${id}`, { body, ...options });
  }

  /**
   * Retrieve paginated list of agents with cursor-based pagination
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AgentsAgentCursorPage, Agent> {
    return this._client.getAPIList('/api/v1/agents', AgentCursorPage<Agent>, { query, ...options });
  }

  /**
   * Delete an existing agent and clean up associated resources (including icon from
   * R2 storage)
   */
  delete(id: string, options?: RequestOptions): APIPromise<AgentDeleteResponse> {
    return this._client.delete(path`/api/v1/agents/${id}`, options);
  }

  /**
   * Retrieve detailed information about a specific agent using its scope and slug
   */
  retrieveBySlug(
    pathSlug: string,
    params: AgentRetrieveBySlugParams,
    options?: RequestOptions,
  ): APIPromise<AgentRetrieveBySlugResponse> {
    const { path_scope } = params;
    return this._client.get(path`/api/v1/agents/${path_scope}/${pathSlug}`, options);
  }
}

export type AgentsAgentCursorPage = AgentCursorPage<Agent>;

export interface Agent {
  id: string;

  agent: Shared.AgentPlatform;

  description: string;

  displayName: string;

  scope: string;

  slug: string;

  updatedAt: string;

  author?: string;

  category?: string;

  createdAt?: string;

  iconUrl?: string;

  tags?: Array<string>;
}

export interface AgentCreate {
  agent: Shared.AgentPlatform;

  description: string;

  displayName: string;

  scope: string;

  slug: string;

  author?: string;

  category?: string;

  iconUrl?: string;

  tags?: Array<string>;
}

export interface AgentUpdate {
  agent?: Shared.AgentPlatform;

  author?: string;

  category?: string;

  description?: string;

  displayName?: string;

  iconUrl?: string;

  scope?: string;

  slug?: string;

  tags?: Array<string>;
}

export interface AgentCreateResponse {
  agent: Agent;
}

export interface AgentRetrieveResponse {
  agent: Agent;
}

export interface AgentUpdateResponse {
  agent: Agent;
}

export interface AgentDeleteResponse {
  message: string;
}

export interface AgentRetrieveBySlugResponse {
  agent: Agent;
}

export interface AgentCreateParams {
  agent: Shared.AgentPlatform;

  description: string;

  displayName: string;

  scope: string;

  slug: string;

  author?: string;

  category?: string;

  iconUrl?: string;

  tags?: Array<string>;
}

export interface AgentUpdateParams {
  agent?: Shared.AgentPlatform;

  author?: string;

  category?: string;

  description?: string;

  displayName?: string;

  iconUrl?: string;

  scope?: string;

  slug?: string;

  tags?: Array<string>;
}

export interface AgentListParams extends AgentCursorPageParams {
  /**
   * Filter by name or description
   */
  search?: string;

  /**
   * Sort by 'displayName' or 'updatedAt' (default)
   */
  sort?: string;
}

export interface AgentRetrieveBySlugParams {
  /**
   * The scope of the agent (e.g., '@corespeed', 'openai'). The @ symbol is optional.
   */
  path_scope: string;
}

export declare namespace Agents {
  export {
    type Agent as Agent,
    type AgentCreate as AgentCreate,
    type AgentUpdate as AgentUpdate,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentRetrieveResponse as AgentRetrieveResponse,
    type AgentUpdateResponse as AgentUpdateResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentRetrieveBySlugResponse as AgentRetrieveBySlugResponse,
    type AgentsAgentCursorPage as AgentsAgentCursorPage,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentRetrieveBySlugParams as AgentRetrieveBySlugParams,
  };
}
