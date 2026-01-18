// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface AgentPlatform {
  platform: string;

  url: string;
}

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

  properties?: { [key: string]: unknown };

  template?: string;

  value?: string;

  valueHint?: string;

  variables?: { [key: string]: unknown };
}

export interface KeyValueInput {
  name: string;

  choices?: Array<string>;

  default?: string;

  description?: string;

  format?: 'string' | 'number' | 'boolean' | 'file_path';

  isRequired?: boolean;

  isSecret?: boolean;

  properties?: { [key: string]: unknown };

  template?: string;

  value?: string;

  variables?: { [key: string]: unknown };
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
