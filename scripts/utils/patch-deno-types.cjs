// @ts-check
/**
 * Patches dist-deno/internal/types.ts to remove node_modules type imports
 * that cause `deno check` to fail.
 *
 * This is needed because Stainless generates type compatibility code for
 * node-fetch/undici that doesn't work with Deno's type checker.
 */

const fs = require('fs');
const path = require('path');

const TYPES_FILE = path.resolve(__dirname, '../../dist-deno/internal/types.ts');

const PATCHED_CONTENT = `// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.
// Patched for Deno compatibility - removed node_modules type imports

export type PromiseOrValue<T> = T | Promise<T>;
export type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type KeysEnum<T> = { [P in keyof Required<T>]: true };

export type FinalizedRequestInit = RequestInit & { headers: Headers };

/**
 * This type contains \`RequestInit\` options that may be available on the current runtime.
 * Uses the standard global fetch RequestInit type for maximum compatibility.
 */
export type MergedRequestInit = RequestInit &
  /** We don't include these in the types as they'll be overridden for every request. */
  Partial<Record<'body' | 'headers' | 'method' | 'signal', never>>;
`;

function main() {
  if (!fs.existsSync(TYPES_FILE)) {
    console.error(`File not found: ${TYPES_FILE}`);
    console.error('Make sure to run this after copying src to dist-deno');
    process.exit(1);
  }

  fs.writeFileSync(TYPES_FILE, PATCHED_CONTENT, 'utf8');
  console.log(`Patched ${path.relative(process.cwd(), TYPES_FILE)} for Deno compatibility`);
}

main();
