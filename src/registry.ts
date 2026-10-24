// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { LayeredRegistry, dsbunnyRegistry } from '@dsbunny/zod-registry';

// Dedicated registry to avoid schema ID conflicts with other packages.
// Lookups fall back to the common `dsbunnyRegistry` and then the global
// registry so that metadata from `.describe()` is preserved by
// `z.toJSONSchema()`.
// Usage: `z.toJSONSchema(schema, { metadata: lunaRegistry })`.
export const lunaRegistry = new LayeredRegistry(dsbunnyRegistry);
