// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AgentsAPI from './agents';
import { AgentsAgentCursorPage } from './agents';
import * as ServersAPI from './servers';
import { ServersCursorPage } from './servers';
import * as SkillsAPI from './skills';
import { SkillsSkillCursorPage } from './skills';
import { APIPromise } from '../core/api-promise';
import {
  AgentCursorPage,
  type AgentCursorPageParams,
  CursorPage,
  type CursorPageParams,
  PagePromise,
  SkillCursorPage,
  type SkillCursorPageParams,
} from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Me extends APIResource {
  /**
   * Get information about the currently authenticated user
   */
  retrieve(options?: RequestOptions): APIPromise<MeResponse> {
    return this._client.get('/api/v1/me', options);
  }

  /**
   * Get all agents owned by the currently authenticated user
   */
  listAgents(
    query: MeListAgentsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AgentsAgentCursorPage, AgentsAPI.Agent> {
    return this._client.getAPIList('/api/v1/me/agents', AgentCursorPage<AgentsAPI.Agent>, {
      query,
      ...options,
    });
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

  /**
   * Get all skills owned by the currently authenticated user
   */
  listSkills(
    query: MeListSkillsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SkillsSkillCursorPage, SkillsAPI.Skill> {
    return this._client.getAPIList('/api/v1/me/skills', SkillCursorPage<SkillsAPI.Skill>, {
      query,
      ...options,
    });
  }
}

export interface MeResponse {
  id: string;

  isAdmin: boolean;
}

export interface MeListAgentsParams extends AgentCursorPageParams {
  /**
   * Filter by name or description
   */
  search?: string;

  /**
   * Sort by 'displayName' or 'updatedAt' (default)
   */
  sort?: string;
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

export interface MeListSkillsParams extends SkillCursorPageParams {
  /**
   * Filter by publisher scope
   */
  scope?: string;

  /**
   * Filter by name or description
   */
  search?: string;

  /**
   * Sort by 'displayName' or 'updatedAt' (default)
   */
  sort?: string;

  /**
   * Filter by tag
   */
  tag?: string;
}

export declare namespace Me {
  export {
    type MeResponse as MeResponse,
    type MeListAgentsParams as MeListAgentsParams,
    type MeListServersParams as MeListServersParams,
    type MeListSkillsParams as MeListSkillsParams,
  };
}

export { type AgentsAgentCursorPage, type ServersCursorPage, type SkillsSkillCursorPage };
