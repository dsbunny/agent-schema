# Changelog
## v6.2.16
- Replace `LunaAgentStatusDetail.errors` with per module `_debug` containers.
- Add `power`, `sound`, and `time` to _runtime-status_ to enable `_debug` propagation.
- Add `_errorFlags` for indicating API failures.
- Use a simple timestamp for `CurrentTimeStatus` to avoid BIOS time offsets.

## v6.1.15
- Update range for `colorTemperature`.
- Add `ServerProperty.autoSet` which is also supported in SCAP 1.8.

## v6.1.14
- Fix name of `digitalAudioInputMode`.
- Coerce `balance` to a `number`.
- Correct field `crossDomainSecurity.disable`.
- Update `holidayScheduleList` following _getter_ rather than _setter_.

## v6.1.13
- Make `nullable` fields that may be unsupported.

## v6.0.12
- Fix export of _CustomJS_ schema.

## v6.0.11
- Rename `DeviceInfo` to `Device` due to confusing semantics.
- Drop all usage of `Info` on _state_ based properties.
- Add `_timestamp` for all _state_ properties to track last modified time.
- Rename _states_ to `*State` and _statuses_ to `*Status` for consistency.

## v5.1.10
- Extend _Luna_ schema with _CustomJS_ module.

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
