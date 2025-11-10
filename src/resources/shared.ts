// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { CursorPage } from '../core/pagination';

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
  source: string;

  url: string;
}

export interface Server {
  id: string;

  description: string;

  displayName: string;

  packageName: string;

  repository: Repository;

  scope: string;

  updatedAt: string;

  version: string;

  documentationUrl?: string;

  iconUrl?: string;
}

export interface ServerCreate {
  /**
   * Description of the MCP server
   */
  description: string;

  /**
   * The display name of the MCP server
   */
  displayName: string;

  /**
   * The package name of the MCP server
   */
  packageName: string;

  repository: Repository;

  /**
   * The scope of the MCP server
   */
  scope: string;

  /**
   * Version of the MCP server
   */
  version: string;

  /**
   * URL to the documentation
   */
  documentationUrl?: string;

  /**
   * External icon URL (will be fetched and stored in R2)
   */
  iconUrl?: string;

  /**
   * Package configurations
   */
  packages?: Array<Package>;

  /**
   * Remote configurations
   */
  remotes?: Array<Remote>;
}

export interface ServerDetail {
  id: string;

  description: string;

  displayName: string;

  packageName: string;

  repository: Repository;

  scope: string;

  updatedAt: string;

  version: string;

  documentationUrl?: string;

  iconUrl?: string;

  packages?: Array<Package>;

  remotes?: Array<Remote>;
}

export interface ServerListResponse {
  /**
   * List of servers (without packages/remotes)
   */
  servers: Array<Server>;

  /**
   * Total number of servers
   */
  totalCount: number;

  /**
   * Cursor for next page. Undefined when no more results.
   */
  next?: string;
}

export interface ServerResponse {
  server: ServerDetail;
}

export interface ServerUpdate {
  /**
   * Description of the MCP server
   */
  description?: string;

  /**
   * The display name of the MCP server
   */
  displayName?: string;

  /**
   * URL to the documentation
   */
  documentationUrl?: string;

  /**
   * External icon URL (will be fetched and stored in R2, replacing old icon)
   */
  iconUrl?: string;

  /**
   * The package name of the MCP server
   */
  packageName?: string;

  /**
   * Package configurations
   */
  packages?: Array<Package>;

  /**
   * Remote configurations
   */
  remotes?: Array<Remote>;

  repository?: Repository;

  /**
   * The scope of the MCP server
   */
  scope?: string;

  /**
   * Version of the MCP server
   */
  version?: string;
}

export type ServersCursorPage = CursorPage<Server>;
