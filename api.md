# Shared

Types:

- <code><a href="./src/resources/shared.ts">Argument</a></code>
- <code><a href="./src/resources/shared.ts">Input</a></code>
- <code><a href="./src/resources/shared.ts">KeyValueInput</a></code>
- <code><a href="./src/resources/shared.ts">Package</a></code>
- <code><a href="./src/resources/shared.ts">Remote</a></code>
- <code><a href="./src/resources/shared.ts">Repository</a></code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /api/v1/health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Documentation

Types:

- <code><a href="./src/resources/documentation.ts">DocumentationProxyResponse</a></code>

Methods:

- <code title="get /api/v1/documentation/proxy">client.documentation.<a href="./src/resources/documentation.ts">proxy</a>({ ...params }) -> DocumentationProxyResponse</code>

# Servers

Types:

- <code><a href="./src/resources/servers.ts">Server</a></code>
- <code><a href="./src/resources/servers.ts">ServerDetail</a></code>
- <code><a href="./src/resources/servers.ts">ServerCreateResponse</a></code>
- <code><a href="./src/resources/servers.ts">ServerRetrieveResponse</a></code>
- <code><a href="./src/resources/servers.ts">ServerUpdateResponse</a></code>
- <code><a href="./src/resources/servers.ts">ServerDeleteResponse</a></code>
- <code><a href="./src/resources/servers.ts">ServerRetrieveByPackageResponse</a></code>

Methods:

- <code title="post /api/v1/servers">client.servers.<a href="./src/resources/servers.ts">create</a>({ ...params }) -> ServerCreateResponse</code>
- <code title="get /api/v1/servers/{id}">client.servers.<a href="./src/resources/servers.ts">retrieve</a>(id) -> ServerRetrieveResponse</code>
- <code title="put /api/v1/servers/{id}">client.servers.<a href="./src/resources/servers.ts">update</a>(id, { ...params }) -> ServerUpdateResponse</code>
- <code title="get /api/v1/servers">client.servers.<a href="./src/resources/servers.ts">list</a>({ ...params }) -> ServersCursorPage</code>
- <code title="delete /api/v1/servers/{id}">client.servers.<a href="./src/resources/servers.ts">delete</a>(id) -> ServerDeleteResponse</code>
- <code title="get /api/v1/servers/{scope}/{packageName}">client.servers.<a href="./src/resources/servers.ts">retrieveByPackage</a>(packageName, { ...params }) -> ServerRetrieveByPackageResponse</code>
