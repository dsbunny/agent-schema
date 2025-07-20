// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const ExternalSpeakerState = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the last time the external speaker state was updated'),
    externalSpeaker: z.boolean()
        .describe('Whether the external speaker is enabled or not'),
})
    .describe('External speaker configuration');
export const MutedState = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the last time the muted state was updated'),
    muted: z.boolean()
        .describe('Whether the sound is muted or not'),
})
    .describe('Sound muted state');
export const SoundModeState = z.object({
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
})
    .describe('Sound mode configuration');
export const SoundOutState = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the last time the sound output state was updated'),
    speakerType: z.enum([
        'tv_speaker',
        'bt_soundbar',
    ])
        .describe('The type of the speaker, either "tv_speaker" or "bt_soundbar"'),
})
    .describe('Sound output configuration');
export const VolumeState = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the last time the volume level was updated'),
    level: z.number().int().min(0).max(100)
        .describe('The sound level of the device, Range: [0–100]'),
    volOsdEnabled: z.boolean().optional()
        .describe('Whether the volume OSD (On-Screen Display) is enabled or not'),
})
    .describe('Sound volume level');
// #region State
export const SoundState = z.object({
    muted: MutedState.optional(),
    externalSpeaker: ExternalSpeakerState.optional(),
    soundMode: SoundModeState.optional(),
    soundOut: SoundOutState.optional(),
    volumeLevel: VolumeState.optional(),
});
// #endregion
//# sourceMappingURL=luna-sound.schema.js.map