# Changelog
## v5.0.9
- Replace _Luna_ agent detail with per-module schema.

## v4.2.8
- Add a BrightSign WebGL playlist for latest generation of devices.

## v4.1.7
- Extend playlist support to Android, BrightSign, and WebGPU platforms.
- Rename `css` platform to `web`.

## v4.0.6
- Change `url` to `uri` per `@dsbunny/rmm-schema` changes.

## v3.0.5
- Bump to `zod@next` with `zod/v4` imports.

## v3.0.4
- Bump to `zod@4.0.0-beta`.

## v3.0.3
- Add new `LunaAgent`.
- Fix `playlist_element_name` to either _luna_, _css_, or _webgl_.
- Add `storage` and `usb` to `RendererAgentStateDetail`.
- Replace `type` in `detail` with `url` for fixed URNs.

## v2.0.2
- Replace `CapabilityBase` with `CapabilityTypes` as a set of all types.

## v1.0.1
- `RendererScreenCapability` is now obsolete with upstream changes to `CapabilityBase`.

## v1.0.0
- Initial release.
