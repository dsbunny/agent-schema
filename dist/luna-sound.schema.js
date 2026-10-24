// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { lunaRegistry } from './registry.js';
export const ExternalSpeakerState = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the last time the external speaker state was updated'),
    externalSpeaker: z.boolean()
        .describe('Whether the external speaker is enabled or not'),
}).register(lunaRegistry, {
    id: 'ExternalSpeakerState',
    description: 'The external speaker configuration of the device',
});
export const MutedStateSchema = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the last time the muted state was updated'),
    muted: z.boolean()
        .describe('Whether the sound is muted or not'),
}).register(lunaRegistry, {
    id: 'MutedStateSchema',
    description: 'The sound muted state of the device',
});
export const SoundModeStateSchema = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the last time the sound mode was updated'),
    mode: z.enum([
        'standard',
        'movie',
        'news',
        'sports',
        'music',
        'game',
    ])
        .describe('The current sound mode'),
    balance: z.coerce.number().int().min(-50).max(50).optional()
        .describe('The audio balance of the sound mode, Range: [-50–50]'),
}).register(lunaRegistry, {
    id: 'SoundModeStateSchema',
    description: 'The sound mode configuration of the device',
});
export const SoundOutStateSchema = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the last time the sound output state was updated'),
    speakerType: z.enum([
        'tv_speaker',
        'bt_soundbar',
    ])
        .describe('The type of the speaker, either "tv_speaker" or "bt_soundbar"'),
}).register(lunaRegistry, {
    id: 'SoundOutStateSchema',
    description: 'The sound output configuration of the device',
});
export const VolumeStateSchema = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the last time the volume level was updated'),
    level: z.number().int().min(0).max(100)
        .describe('The sound level of the device, Range: [0–100]'),
    volOsdEnabled: z.boolean().optional()
        .describe('Whether the volume OSD (On-Screen Display) is enabled or not'),
}).register(lunaRegistry, {
    id: 'VolumeStateSchema',
    description: 'The sound volume level of the device',
});
// #region State
export const SoundStateSchema = z.object({
    muted: MutedStateSchema.optional(),
    externalSpeaker: ExternalSpeakerState.optional(),
    soundMode: SoundModeStateSchema.optional(),
    soundOut: SoundOutStateSchema.optional(),
    volumeLevel: VolumeStateSchema.optional(),
}).register(lunaRegistry, {
    id: 'SoundStateSchema',
    description: 'The state of the sound system of the device, including muted state, external speaker, sound mode, sound output, and volume level',
});
// #endregion
// #region Status
export const SoundStatusSchema = z.object({
    _debug: z.string().optional()
        .describe('SCAP debug mode output'),
}).register(lunaRegistry, {
    id: 'SoundStatusSchema',
    description: 'The status of the sound system of the device, including debug information',
});
// #endregion
//# sourceMappingURL=luna-sound.schema.js.map