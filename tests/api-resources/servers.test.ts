// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import McpStoreClient from '@corespeed/mcp-store-client';

const client = new McpStoreClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource servers', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.servers.create({
      description: 'description',
      displayName: 'displayName',
      packageName: 'packageName',
      repository: { source: 'source', url: 'https://example.com' },
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
  test.skip('create: required and optional params', async () => {
    const response = await client.servers.create({
      description: 'description',
      displayName: 'displayName',
      packageName: 'packageName',
      repository: { source: 'source', url: 'https://example.com' },
      scope: 'scope',
      version: 'version',
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
              properties: {
                foo: {
                  choices: ['string'],
                  default: 'default',
                  description: 'description',
                  format: 'string',
                  isRequired: true,
                  isSecret: true,
                  properties: {},
                  template: 'template',
                  value: 'value',
                },
              },
              template: 'template',
              value: 'value',
              variables: {
                foo: {
                  choices: ['string'],
                  default: 'default',
                  description: 'description',
                  format: 'string',
                  isRequired: true,
                  isSecret: true,
                  properties: {},
                  template: 'template',
                  value: 'value',
                },
              },
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
              properties: {
                foo: {
                  choices: ['string'],
                  default: 'default',
                  description: 'description',
                  format: 'string',
                  isRequired: true,
                  isSecret: true,
                  properties: {},
                  template: 'template',
                  value: 'value',
                },
              },
              template: 'template',
              value: 'value',
              valueHint: 'valueHint',
              variables: {
                foo: {
                  choices: ['string'],
                  default: 'default',
                  description: 'description',
                  format: 'string',
                  isRequired: true,
                  isSecret: true,
                  properties: {},
                  template: 'template',
                  value: 'value',
                },
              },
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
              properties: {
                foo: {
                  choices: ['string'],
                  default: 'default',
                  description: 'description',
                  format: 'string',
                  isRequired: true,
                  isSecret: true,
                  properties: {},
                  template: 'template',
                  value: 'value',
                },
              },
              template: 'template',
              value: 'value',
              valueHint: 'valueHint',
              variables: {
                foo: {
                  choices: ['string'],
                  default: 'default',
                  description: 'description',
                  format: 'string',
                  isRequired: true,
                  isSecret: true,
                  properties: {},
                  template: 'template',
                  value: 'value',
                },
              },
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
              properties: {
                foo: {
                  choices: ['string'],
                  default: 'default',
                  description: 'description',
                  format: 'string',
                  isRequired: true,
                  isSecret: true,
                  properties: {},
                  template: 'template',
                  value: 'value',
                },
              },
              template: 'template',
              value: 'value',
              variables: {
                foo: {
                  choices: ['string'],
                  default: 'default',
                  description: 'description',
                  format: 'string',
                  isRequired: true,
                  isSecret: true,
                  properties: {},
                  template: 'template',
                  value: 'value',
                },
              },
            },
          ],
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.servers.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.servers.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.servers.update(
        'id',
        {
          description: 'description',
          displayName: 'displayName',
          documentationUrl: 'https://example.com',
          iconUrl: 'https://example.com',
          packageName: 'packageName',
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
                  properties: {
                    foo: {
                      choices: ['string'],
                      default: 'default',
                      description: 'description',
                      format: 'string',
                      isRequired: true,
                      isSecret: true,
                      properties: {},
                      template: 'template',
                      value: 'value',
                    },
                  },
                  template: 'template',
                  value: 'value',
                  variables: {
                    foo: {
                      choices: ['string'],
                      default: 'default',
                      description: 'description',
                      format: 'string',
                      isRequired: true,
                      isSecret: true,
                      properties: {},
                      template: 'template',
                      value: 'value',
                    },
                  },
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
                  properties: {
                    foo: {
                      choices: ['string'],
                      default: 'default',
                      description: 'description',
                      format: 'string',
                      isRequired: true,
                      isSecret: true,
                      properties: {},
                      template: 'template',
                      value: 'value',
                    },
                  },
                  template: 'template',
                  value: 'value',
                  valueHint: 'valueHint',
                  variables: {
                    foo: {
                      choices: ['string'],
                      default: 'default',
                      description: 'description',
                      format: 'string',
                      isRequired: true,
                      isSecret: true,
                      properties: {},
                      template: 'template',
                      value: 'value',
                    },
                  },
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
                  properties: {
                    foo: {
                      choices: ['string'],
                      default: 'default',
                      description: 'description',
                      format: 'string',
                      isRequired: true,
                      isSecret: true,
                      properties: {},
                      template: 'template',
                      value: 'value',
                    },
                  },
                  template: 'template',
                  value: 'value',
                  valueHint: 'valueHint',
                  variables: {
                    foo: {
                      choices: ['string'],
                      default: 'default',
                      description: 'description',
                      format: 'string',
                      isRequired: true,
                      isSecret: true,
                      properties: {},
                      template: 'template',
                      value: 'value',
                    },
                  },
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
                  properties: {
                    foo: {
                      choices: ['string'],
                      default: 'default',
                      description: 'description',
                      format: 'string',
                      isRequired: true,
                      isSecret: true,
                      properties: {},
                      template: 'template',
                      value: 'value',
                    },
                  },
                  template: 'template',
                  value: 'value',
                  variables: {
                    foo: {
                      choices: ['string'],
                      default: 'default',
                      description: 'description',
                      format: 'string',
                      isRequired: true,
                      isSecret: true,
                      properties: {},
                      template: 'template',
                      value: 'value',
                    },
                  },
                },
              ],
            },
          ],
          repository: { source: 'source', url: 'https://example.com' },
          scope: 'scope',
          version: 'version',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(McpStoreClient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.servers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.servers.list(
        { cursor: 'eyJpZCI6IjEyMyJ9', limit: 12, search: 'serverName', sort: 'updatedAt' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(McpStoreClient.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.servers.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveByPackage: only required params', async () => {
    const responsePromise = client.servers.retrieveByPackage('packageName', { scope: 'scope' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveByPackage: required and optional params', async () => {
    const response = await client.servers.retrieveByPackage('packageName', { scope: 'scope' });
  });
});
