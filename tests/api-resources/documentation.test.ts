// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import McpStoreClient from 'mcp-store-client';

const client = new McpStoreClient({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documentation', () => {
  // Prism tests are disabled
  test.skip('proxy: only required params', async () => {
    const responsePromise = client.documentation.proxy({
      url: 'https://github.com/owner/repo/blob/main/README.md',
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
  test.skip('proxy: required and optional params', async () => {
    const response = await client.documentation.proxy({
      url: 'https://github.com/owner/repo/blob/main/README.md',
    });
  });
});
