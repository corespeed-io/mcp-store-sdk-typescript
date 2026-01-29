// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SkillCursorPage, type SkillCursorPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Skills extends APIResource {
  /**
   * Creates a new skill in the registry (admin only)
   */
  create(body: SkillCreateParams, options?: RequestOptions): APIPromise<SkillCreateResponse> {
    return this._client.post('/api/v1/skills', { body, ...options });
  }

  /**
   * Returns a single skill by its unique identifier
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SkillRetrieveResponse> {
    return this._client.get(path`/api/v1/skills/${id}`, options);
  }

  /**
   * Updates an existing skill (admin only)
   */
  update(
    id: string,
    body: SkillUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SkillUpdateResponse> {
    return this._client.put(path`/api/v1/skills/${id}`, { body, ...options });
  }

  /**
   * Returns a paginated list of skills with optional filtering
   */
  list(
    query: SkillListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SkillsSkillCursorPage, Skill> {
    return this._client.getAPIList('/api/v1/skills', SkillCursorPage<Skill>, { query, ...options });
  }

  /**
   * Deletes a skill from the registry (admin only)
   */
  delete(id: string, options?: RequestOptions): APIPromise<SkillDeleteResponse> {
    return this._client.delete(path`/api/v1/skills/${id}`, options);
  }

  /**
   * Returns a single skill by its scope, repository name, and skill name
   */
  retrieveByIdentifier(
    skillName: string,
    params: SkillRetrieveByIdentifierParams,
    options?: RequestOptions,
  ): APIPromise<SkillRetrieveByIdentifierResponse> {
    const { scope, repoName } = params;
    return this._client.get(path`/api/v1/skills/${scope}/${repoName}/${skillName}`, options);
  }
}

export type SkillsSkillCursorPage = SkillCursorPage<Skill>;

export interface Skill {
  id: string;

  description: string;

  repoName: string;

  scope: string;

  skillName: string;

  sourceUrl: string;

  updatedAt: string;

  author?: string;

  category?: string;

  createdAt?: string;

  dependencies?: Array<string>;

  developerId?: string;

  tags?: Array<string>;

  totalInstalls?: number;

  triggerConditions?: Array<string>;

  version?: string;
}

export interface SkillCreate {
  description: string;

  repoName: string;

  scope: string;

  skillName: string;

  sourceUrl: string;

  author?: string;

  category?: string;

  dependencies?: Array<string>;

  tags?: Array<string>;

  triggerConditions?: Array<string>;

  version?: string;
}

export interface SkillUpdate {
  author?: string;

  category?: string;

  dependencies?: Array<string>;

  description?: string;

  repoName?: string;

  scope?: string;

  skillName?: string;

  sourceUrl?: string;

  tags?: Array<string>;

  triggerConditions?: Array<string>;

  version?: string;
}

export interface SkillCreateResponse {
  skill: Skill;
}

export interface SkillRetrieveResponse {
  skill: Skill;
}

export interface SkillUpdateResponse {
  skill: Skill;
}

export interface SkillDeleteResponse {
  message: string;
}

export interface SkillRetrieveByIdentifierResponse {
  skill: Skill;
}

export interface SkillCreateParams {
  description: string;

  repoName: string;

  scope: string;

  skillName: string;

  sourceUrl: string;

  author?: string;

  category?: string;

  dependencies?: Array<string>;

  tags?: Array<string>;

  triggerConditions?: Array<string>;

  version?: string;
}

export interface SkillUpdateParams {
  author?: string;

  category?: string;

  dependencies?: Array<string>;

  description?: string;

  repoName?: string;

  scope?: string;

  skillName?: string;

  sourceUrl?: string;

  tags?: Array<string>;

  triggerConditions?: Array<string>;

  version?: string;
}

export interface SkillListParams extends SkillCursorPageParams {
  /**
   * Filter by publisher scope
   */
  scope?: string;

  /**
   * Filter by name or description
   */
  search?: string;

  /**
   * Sort by 'skillName' or 'updatedAt' (default)
   */
  sort?: string;

  /**
   * Filter by tag
   */
  tag?: string;
}

export interface SkillRetrieveByIdentifierParams {
  /**
   * The scope of the skill (publisher namespace)
   */
  scope: string;

  /**
   * The repository name
   */
  repoName: string;
}

export declare namespace Skills {
  export {
    type Skill as Skill,
    type SkillCreate as SkillCreate,
    type SkillUpdate as SkillUpdate,
    type SkillCreateResponse as SkillCreateResponse,
    type SkillRetrieveResponse as SkillRetrieveResponse,
    type SkillUpdateResponse as SkillUpdateResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillRetrieveByIdentifierResponse as SkillRetrieveByIdentifierResponse,
    type SkillsSkillCursorPage as SkillsSkillCursorPage,
    type SkillCreateParams as SkillCreateParams,
    type SkillUpdateParams as SkillUpdateParams,
    type SkillListParams as SkillListParams,
    type SkillRetrieveByIdentifierParams as SkillRetrieveByIdentifierParams,
  };
}
