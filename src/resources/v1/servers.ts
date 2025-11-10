// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Servers extends APIResource {
  /**
   * Create a new MCP server. If iconUrl is provided, the server will fetch the icon
   * from the external URL and upload it to R2 storage. The response will contain the
   * R2 URL.
   */
  create(params: ServerCreateParams, options?: RequestOptions): APIPromise<ServerCreateResponse> {
    const { server } = params;
    return this._client.post('/api/v1/servers', { body: server, ...options });
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
    params: ServerUpdateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<ServerUpdateResponse> {
    const { server } = params ?? {};
    return this._client.put(path`/api/v1/servers/${id}`, { body: server, ...options });
  }

  /**
   * Retrieve paginated list of MCP servers with cursor-based pagination
   */
  list(
    query: ServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ServerListResponsesCursorPage, ServerListResponse> {
    return this._client.getAPIList('/api/v1/servers', CursorPage<ServerListResponse>, { query, ...options });
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

export type ServerListResponsesCursorPage = CursorPage<ServerListResponse>;

export interface ServerCreateResponse {
  server: ServerCreateResponse.Server;
}

export namespace ServerCreateResponse {
  export interface Server {
    id: string;

    description: string;

    displayName: string;

    packageName: string;

    repository: Server.Repository;

    scope: string;

    updatedAt: string;

    version: string;

    documentationUrl?: string;

    iconUrl?: string;

    packages?: Array<Server.Package>;

    remotes?: Array<Server.Remote>;
  }

  export namespace Server {
    export interface Repository {
      source: string;

      url: string;
    }

    export interface Package {
      name: string;

      registryName: string;

      version: string;

      environmentVariables?: Array<Package.EnvironmentVariable>;

      packageArguments?: Array<Package.PackageArgument>;

      runtimeArguments?: Array<Package.RuntimeArgument>;

      runtimeHint?: string;
    }

    export namespace Package {
      export interface EnvironmentVariable {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: EnvironmentVariable.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: EnvironmentVariable.Variables };
      }

      export namespace EnvironmentVariable {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface PackageArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: PackageArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: PackageArgument.Variables };
      }

      export namespace PackageArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface RuntimeArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: RuntimeArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: RuntimeArgument.Variables };
      }

      export namespace RuntimeArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }

    export interface Remote {
      transportType: string;

      url: string;

      headers?: Array<Remote.Header>;
    }

    export namespace Remote {
      export interface Header {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: Header.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: Header.Variables };
      }

      export namespace Header {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }
  }
}

export interface ServerRetrieveResponse {
  server: ServerRetrieveResponse.Server;
}

export namespace ServerRetrieveResponse {
  export interface Server {
    id: string;

    description: string;

    displayName: string;

    packageName: string;

    repository: Server.Repository;

    scope: string;

    updatedAt: string;

    version: string;

    documentationUrl?: string;

    iconUrl?: string;

    packages?: Array<Server.Package>;

    remotes?: Array<Server.Remote>;
  }

  export namespace Server {
    export interface Repository {
      source: string;

      url: string;
    }

    export interface Package {
      name: string;

      registryName: string;

      version: string;

      environmentVariables?: Array<Package.EnvironmentVariable>;

      packageArguments?: Array<Package.PackageArgument>;

      runtimeArguments?: Array<Package.RuntimeArgument>;

      runtimeHint?: string;
    }

    export namespace Package {
      export interface EnvironmentVariable {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: EnvironmentVariable.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: EnvironmentVariable.Variables };
      }

      export namespace EnvironmentVariable {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface PackageArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: PackageArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: PackageArgument.Variables };
      }

      export namespace PackageArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface RuntimeArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: RuntimeArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: RuntimeArgument.Variables };
      }

      export namespace RuntimeArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }

    export interface Remote {
      transportType: string;

      url: string;

      headers?: Array<Remote.Header>;
    }

    export namespace Remote {
      export interface Header {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: Header.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: Header.Variables };
      }

      export namespace Header {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }
  }
}

export interface ServerUpdateResponse {
  server: ServerUpdateResponse.Server;
}

export namespace ServerUpdateResponse {
  export interface Server {
    id: string;

    description: string;

    displayName: string;

    packageName: string;

    repository: Server.Repository;

    scope: string;

    updatedAt: string;

    version: string;

    documentationUrl?: string;

    iconUrl?: string;

    packages?: Array<Server.Package>;

    remotes?: Array<Server.Remote>;
  }

  export namespace Server {
    export interface Repository {
      source: string;

      url: string;
    }

    export interface Package {
      name: string;

      registryName: string;

      version: string;

      environmentVariables?: Array<Package.EnvironmentVariable>;

      packageArguments?: Array<Package.PackageArgument>;

      runtimeArguments?: Array<Package.RuntimeArgument>;

      runtimeHint?: string;
    }

    export namespace Package {
      export interface EnvironmentVariable {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: EnvironmentVariable.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: EnvironmentVariable.Variables };
      }

      export namespace EnvironmentVariable {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface PackageArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: PackageArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: PackageArgument.Variables };
      }

      export namespace PackageArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface RuntimeArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: RuntimeArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: RuntimeArgument.Variables };
      }

      export namespace RuntimeArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }

    export interface Remote {
      transportType: string;

      url: string;

      headers?: Array<Remote.Header>;
    }

    export namespace Remote {
      export interface Header {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: Header.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: Header.Variables };
      }

      export namespace Header {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }
  }
}

export interface ServerListResponse {
  id: string;

  description: string;

  displayName: string;

  packageName: string;

  repository: ServerListResponse.Repository;

  scope: string;

  updatedAt: string;

  version: string;

  documentationUrl?: string;

  iconUrl?: string;
}

export namespace ServerListResponse {
  export interface Repository {
    source: string;

    url: string;
  }
}

export interface ServerDeleteResponse {
  message: string;
}

export interface ServerRetrieveByPackageResponse {
  server: ServerRetrieveByPackageResponse.Server;
}

export namespace ServerRetrieveByPackageResponse {
  export interface Server {
    id: string;

    description: string;

    displayName: string;

    packageName: string;

    repository: Server.Repository;

    scope: string;

    updatedAt: string;

    version: string;

    documentationUrl?: string;

    iconUrl?: string;

    packages?: Array<Server.Package>;

    remotes?: Array<Server.Remote>;
  }

  export namespace Server {
    export interface Repository {
      source: string;

      url: string;
    }

    export interface Package {
      name: string;

      registryName: string;

      version: string;

      environmentVariables?: Array<Package.EnvironmentVariable>;

      packageArguments?: Array<Package.PackageArgument>;

      runtimeArguments?: Array<Package.RuntimeArgument>;

      runtimeHint?: string;
    }

    export namespace Package {
      export interface EnvironmentVariable {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: EnvironmentVariable.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: EnvironmentVariable.Variables };
      }

      export namespace EnvironmentVariable {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface PackageArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: PackageArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: PackageArgument.Variables };
      }

      export namespace PackageArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface RuntimeArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: RuntimeArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: RuntimeArgument.Variables };
      }

      export namespace RuntimeArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }

    export interface Remote {
      transportType: string;

      url: string;

      headers?: Array<Remote.Header>;
    }

    export namespace Remote {
      export interface Header {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: Header.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: Header.Variables };
      }

      export namespace Header {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }
  }
}

export interface ServerCreateParams {
  server: ServerCreateParams.Server;
}

export namespace ServerCreateParams {
  export interface Server {
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

    repository: Server.Repository;

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
    packages?: Array<Server.Package>;

    /**
     * Remote configurations
     */
    remotes?: Array<Server.Remote>;
  }

  export namespace Server {
    export interface Repository {
      source: string;

      url: string;
    }

    export interface Package {
      name: string;

      registryName: string;

      version: string;

      environmentVariables?: Array<Package.EnvironmentVariable>;

      packageArguments?: Array<Package.PackageArgument>;

      runtimeArguments?: Array<Package.RuntimeArgument>;

      runtimeHint?: string;
    }

    export namespace Package {
      export interface EnvironmentVariable {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: EnvironmentVariable.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: EnvironmentVariable.Variables };
      }

      export namespace EnvironmentVariable {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface PackageArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: PackageArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: PackageArgument.Variables };
      }

      export namespace PackageArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface RuntimeArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: RuntimeArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: RuntimeArgument.Variables };
      }

      export namespace RuntimeArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }

    export interface Remote {
      transportType: string;

      url: string;

      headers?: Array<Remote.Header>;
    }

    export namespace Remote {
      export interface Header {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: Header.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: Header.Variables };
      }

      export namespace Header {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }
  }
}

export interface ServerUpdateParams {
  server?: ServerUpdateParams.Server;
}

export namespace ServerUpdateParams {
  export interface Server {
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
    packages?: Array<Server.Package>;

    /**
     * Remote configurations
     */
    remotes?: Array<Server.Remote>;

    repository?: Server.Repository;

    /**
     * The scope of the MCP server
     */
    scope?: string;

    /**
     * Version of the MCP server
     */
    version?: string;
  }

  export namespace Server {
    export interface Package {
      name: string;

      registryName: string;

      version: string;

      environmentVariables?: Array<Package.EnvironmentVariable>;

      packageArguments?: Array<Package.PackageArgument>;

      runtimeArguments?: Array<Package.RuntimeArgument>;

      runtimeHint?: string;
    }

    export namespace Package {
      export interface EnvironmentVariable {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: EnvironmentVariable.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: EnvironmentVariable.Variables };
      }

      export namespace EnvironmentVariable {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface PackageArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: PackageArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: PackageArgument.Variables };
      }

      export namespace PackageArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }

      export interface RuntimeArgument {
        type: 'positional' | 'named';

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRepeated?: boolean;

        isRequired?: boolean;

        isSecret?: boolean;

        name?: string;

        properties?: { [key: string]: RuntimeArgument.Properties };

        template?: string;

        value?: string;

        valueHint?: string;

        variables?: { [key: string]: RuntimeArgument.Variables };
      }

      export namespace RuntimeArgument {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }

    export interface Remote {
      transportType: string;

      url: string;

      headers?: Array<Remote.Header>;
    }

    export namespace Remote {
      export interface Header {
        name: string;

        choices?: Array<string>;

        default?: string;

        description?: string;

        format?: 'string' | 'number' | 'boolean' | 'file_path';

        isRequired?: boolean;

        isSecret?: boolean;

        properties?: { [key: string]: Header.Properties };

        template?: string;

        value?: string;

        variables?: { [key: string]: Header.Variables };
      }

      export namespace Header {
        export interface Properties {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }

        export interface Variables {
          choices?: Array<string>;

          default?: string;

          description?: string;

          format?: 'string' | 'number' | 'boolean' | 'file_path';

          isRequired?: boolean;

          isSecret?: boolean;

          properties?: { [key: string]: unknown };

          template?: string;

          value?: string;
        }
      }
    }

    export interface Repository {
      source: string;

      url: string;
    }
  }
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
    type ServerCreateResponse as ServerCreateResponse,
    type ServerRetrieveResponse as ServerRetrieveResponse,
    type ServerUpdateResponse as ServerUpdateResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerRetrieveByPackageResponse as ServerRetrieveByPackageResponse,
    type ServerListResponsesCursorPage as ServerListResponsesCursorPage,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
    type ServerRetrieveByPackageParams as ServerRetrieveByPackageParams,
  };
}
