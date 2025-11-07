// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { McpStoreSDK } from '../client';

export abstract class APIResource {
  protected _client: McpStoreSDK;

  constructor(client: McpStoreSDK) {
    this._client = client;
  }
}
