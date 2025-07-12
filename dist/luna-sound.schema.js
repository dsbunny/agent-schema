// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const ExternalSpeaker = z.object({
    externalSpeaker: z.boolean()
        .describe('Whether the external speaker is enabled or not'),
})
    .describe('External speaker configuration');
export const Muted = z.object({
    muted: z.boolean()
        .describe('Whether the sound is muted or not'),
})
    .describe('Sound muted state');
export const SoundMode = z.object({
    mode: z.enum([
        'standard',
        'movie',
        'news',
        'sports',
        'music',
        'game',
    ])
        .describe('The current sound mode'),
    balance: z.number().int().min(-50).max(50).optional()
        .describe('The audio balance of the sound mode, Range: [-50–50]'),
})
    .describe('Sound mode configuration');
export const SoundOut = z.object({
    speakerType: z.enum([
        'tv_speaker',
        'bt_soundbar',
    ])
        .describe('The type of the speaker, either "tv_speaker" or "bt_soundbar"'),
})
    .describe('Sound output configuration');
export const VolumeLevel = z.object({
    level: z.number().int().min(0).max(100)
        .describe('The sound level of the device, Range: [0–100]'),
    volOsdEnabled: z.boolean().optional()
        .describe('Whether the volume OSD (On-Screen Display) is enabled or not'),
})
    .describe('Sound volume level');
// #region State
export const SoundState = z.object({
    muted: Muted.optional(),
    externalSpeaker: ExternalSpeaker.optional(),
    soundMode: SoundMode.optional(),
    soundOut: SoundOut.optional(),
    volumeLevel: VolumeLevel.optional(),
});
// #endregion
//# sourceMappingURL=luna-sound.schema.js.map