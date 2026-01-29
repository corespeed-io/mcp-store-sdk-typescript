# Shared

Types:

- <code><a href="./src/resources/shared.ts">AgentPlatform</a></code>
- <code><a href="./src/resources/shared.ts">Argument</a></code>
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

# Me

Types:

- <code><a href="./src/resources/me.ts">MeResponse</a></code>

Methods:

- <code title="get /api/v1/me">client.me.<a href="./src/resources/me.ts">retrieve</a>() -> MeResponse</code>
- <code title="get /api/v1/me/agents">client.me.<a href="./src/resources/me.ts">listAgents</a>({ ...params }) -> AgentsAgentCursorPage</code>
- <code title="get /api/v1/me/servers">client.me.<a href="./src/resources/me.ts">listServers</a>({ ...params }) -> ServersCursorPage</code>
- <code title="get /api/v1/me/skills">client.me.<a href="./src/resources/me.ts">listSkills</a>({ ...params }) -> SkillsSkillCursorPage</code>

# Servers

Types:

- <code><a href="./src/resources/servers.ts">Server</a></code>
- <code><a href="./src/resources/servers.ts">ServerCreate</a></code>
- <code><a href="./src/resources/servers.ts">ServerDetail</a></code>
- <code><a href="./src/resources/servers.ts">ServerUpdate</a></code>
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

# Agents

Types:

- <code><a href="./src/resources/agents.ts">Agent</a></code>
- <code><a href="./src/resources/agents.ts">AgentCreate</a></code>
- <code><a href="./src/resources/agents.ts">AgentUpdate</a></code>
- <code><a href="./src/resources/agents.ts">AgentCreateResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentRetrieveResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents.ts">AgentRetrieveBySlugResponse</a></code>

Methods:

- <code title="post /api/v1/agents">client.agents.<a href="./src/resources/agents.ts">create</a>({ ...params }) -> AgentCreateResponse</code>
- <code title="get /api/v1/agents/{id}">client.agents.<a href="./src/resources/agents.ts">retrieve</a>(id) -> AgentRetrieveResponse</code>
- <code title="put /api/v1/agents/{id}">client.agents.<a href="./src/resources/agents.ts">update</a>(id, { ...params }) -> AgentUpdateResponse</code>
- <code title="get /api/v1/agents">client.agents.<a href="./src/resources/agents.ts">list</a>({ ...params }) -> AgentsAgentCursorPage</code>
- <code title="delete /api/v1/agents/{id}">client.agents.<a href="./src/resources/agents.ts">delete</a>(id) -> AgentDeleteResponse</code>
- <code title="get /api/v1/agents/{scope}/{slug}">client.agents.<a href="./src/resources/agents.ts">retrieveBySlug</a>(slug, { ...params }) -> AgentRetrieveBySlugResponse</code>

# Gateway

Types:

- <code><a href="./src/resources/gateway.ts">GatewayPublishServerResponse</a></code>
- <code><a href="./src/resources/gateway.ts">GatewayUnpublishServerResponse</a></code>
- <code><a href="./src/resources/gateway.ts">GatewayUpdateServerResponse</a></code>

Methods:

- <code title="post /api/v1/gateway/servers">client.gateway.<a href="./src/resources/gateway.ts">publishServer</a>({ ...params }) -> GatewayPublishServerResponse</code>
- <code title="delete /api/v1/gateway/servers/{scope}/{packageName}">client.gateway.<a href="./src/resources/gateway.ts">unpublishServer</a>(packageName, { ...params }) -> GatewayUnpublishServerResponse</code>
- <code title="put /api/v1/gateway/servers/{scope}/{packageName}">client.gateway.<a href="./src/resources/gateway.ts">updateServer</a>(packageName, { ...params }) -> GatewayUpdateServerResponse</code>

# Skills

Types:

- <code><a href="./src/resources/skills.ts">Skill</a></code>
- <code><a href="./src/resources/skills.ts">SkillCreate</a></code>
- <code><a href="./src/resources/skills.ts">SkillUpdate</a></code>
- <code><a href="./src/resources/skills.ts">SkillCreateResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillRetrieveResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillUpdateResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillDeleteResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillRetrieveByIdentifierResponse</a></code>

Methods:

- <code title="post /api/v1/skills">client.skills.<a href="./src/resources/skills.ts">create</a>({ ...params }) -> SkillCreateResponse</code>
- <code title="get /api/v1/skills/{id}">client.skills.<a href="./src/resources/skills.ts">retrieve</a>(id) -> SkillRetrieveResponse</code>
- <code title="put /api/v1/skills/{id}">client.skills.<a href="./src/resources/skills.ts">update</a>(id, { ...params }) -> SkillUpdateResponse</code>
- <code title="get /api/v1/skills">client.skills.<a href="./src/resources/skills.ts">list</a>({ ...params }) -> SkillsSkillCursorPage</code>
- <code title="delete /api/v1/skills/{id}">client.skills.<a href="./src/resources/skills.ts">delete</a>(id) -> SkillDeleteResponse</code>
- <code title="get /api/v1/skills/{scope}/{repoName}/{skillName}">client.skills.<a href="./src/resources/skills.ts">retrieveByIdentifier</a>(skillName, { ...params }) -> SkillRetrieveByIdentifierResponse</code>
