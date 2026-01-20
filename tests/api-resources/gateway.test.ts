// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import McpStoreClient from '@corespeed/mcp-store-client';

const client = new McpStoreClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource gateway', () => {
  // Prism tests are disabled
  test.skip('publishServer: only required params', async () => {
    const responsePromise = client.gateway.publishServer({
      description: 'description',
      displayName: 'displayName',
      packageName: 'packageName',
      scope: 'scope',
      version: 'version',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('publishServer: required and optional params', async () => {
    const response = await client.gateway.publishServer({
      description: 'description',
      displayName: 'displayName',
      packageName: 'packageName',
      scope: 'scope',
      version: 'version',
      author: 'author',
      category: 'category',
      iconUrl: 'https://example.com',
      packages: [
        {
          name: 'name',
          registryName: 'registryName',
          version: 'version',
          environmentVariables: [
            {
              name: 'name',
              choices: ['string'],
              default: 'default',
              description: 'description',
              format: 'string',
              isRequired: true,
              isSecret: true,
              properties: { foo: 'bar' },
              template: 'template',
              value: 'value',
              variables: { foo: 'bar' },
            },
          ],
          packageArguments: [
            {
              type: 'positional',
              choices: ['string'],
              default: 'default',
              description: 'description',
              format: 'string',
              isRepeated: true,
              isRequired: true,
              isSecret: true,
              name: 'name',
              properties: { foo: 'bar' },
              template: 'template',
              value: 'value',
              valueHint: 'valueHint',
              variables: { foo: 'bar' },
            },
          ],
          runtimeArguments: [
            {
              type: 'positional',
              choices: ['string'],
              default: 'default',
              description: 'description',
              format: 'string',
              isRepeated: true,
              isRequired: true,
              isSecret: true,
              name: 'name',
              properties: { foo: 'bar' },
              template: 'template',
              value: 'value',
              valueHint: 'valueHint',
              variables: { foo: 'bar' },
            },
          ],
          runtimeHint: 'runtimeHint',
        },
      ],
      remotes: [
        {
          transportType: 'transportType',
          url: 'https://example.com',
          headers: [
            {
              name: 'name',
              choices: ['string'],
              default: 'default',
              description: 'description',
              format: 'string',
              isRequired: true,
              isSecret: true,
              properties: { foo: 'bar' },
              template: 'template',
              value: 'value',
              variables: { foo: 'bar' },
            },
          ],
        },
      ],
      repository: { source: 'source', url: 'https://example.com' },
      tags: ['string'],
    });
  });

  // Prism tests are disabled
  test.skip('unpublishServer: only required params', async () => {
    const responsePromise = client.gateway.unpublishServer('server-github', {
      path_scope: '@modelcontextprotocol',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unpublishServer: required and optional params', async () => {
    const response = await client.gateway.unpublishServer('server-github', {
      path_scope: '@modelcontextprotocol',
    });
  });

  // Prism tests are disabled
  test.skip('updateServer: only required params', async () => {
    const responsePromise = client.gateway.updateServer('server-github', {
      path_scope: '@modelcontextprotocol',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateServer: required and optional params', async () => {
    const response = await client.gateway.updateServer('server-github', {
      path_scope: '@modelcontextprotocol',
      author: 'author',
      category: 'category',
      description: 'description',
      displayName: 'displayName',
      documentationUrl: 'https://example.com',
      iconUrl: 'https://example.com',
      packages: [
        {
          name: 'name',
          registryName: 'registryName',
          version: 'version',
          environmentVariables: [
            {
              name: 'name',
              choices: ['string'],
              default: 'default',
              description: 'description',
              format: 'string',
              isRequired: true,
              isSecret: true,
              properties: { foo: 'bar' },
              template: 'template',
              value: 'value',
              variables: { foo: 'bar' },
            },
          ],
          packageArguments: [
            {
              type: 'positional',
              choices: ['string'],
              default: 'default',
              description: 'description',
              format: 'string',
              isRepeated: true,
              isRequired: true,
              isSecret: true,
              name: 'name',
              properties: { foo: 'bar' },
              template: 'template',
              value: 'value',
              valueHint: 'valueHint',
              variables: { foo: 'bar' },
            },
          ],
          runtimeArguments: [
            {
              type: 'positional',
              choices: ['string'],
              default: 'default',
              description: 'description',
              format: 'string',
              isRepeated: true,
              isRequired: true,
              isSecret: true,
              name: 'name',
              properties: { foo: 'bar' },
              template: 'template',
              value: 'value',
              valueHint: 'valueHint',
              variables: { foo: 'bar' },
            },
          ],
          runtimeHint: 'runtimeHint',
        },
      ],
      remotes: [
        {
          transportType: 'transportType',
          url: 'https://example.com',
          headers: [
            {
              name: 'name',
              choices: ['string'],
              default: 'default',
              description: 'description',
              format: 'string',
              isRequired: true,
              isSecret: true,
              properties: { foo: 'bar' },
              template: 'template',
              value: 'value',
              variables: { foo: 'bar' },
            },
          ],
        },
      ],
      repository: { source: 'source', url: 'https://example.com' },
      tags: ['string'],
      version: 'version',
    });
  });
});
