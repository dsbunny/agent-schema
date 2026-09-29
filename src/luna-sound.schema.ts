// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod/v4";

export const ExternalSpeakerState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the external speaker state was updated'),
	externalSpeaker: z.boolean()
		.describe('Whether the external speaker is enabled or not'),
})
	.describe('External speaker configuration');
export type ExternalSpeakere = z.infer<typeof ExternalSpeakerState>;

export const MutedStateSchema = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the muted state was updated'),
	muted: z.boolean()
		.describe('Whether the sound is muted or not'),
})
	.describe('Sound muted state');
export type MutedState = z.infer<typeof MutedStateSchema>;

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
})
	.describe('Sound mode configuration');
export type SoundModeState = z.infer<typeof SoundModeStateSchema>;

export const SoundOutStateSchema = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the sound output state was updated'),
	speakerType: z.enum([
		'tv_speaker',
		'bt_soundbar',
	])
		.describe('The type of the speaker, either "tv_speaker" or "bt_soundbar"'),
})
	.describe('Sound output configuration');
export type SoundOutState = z.infer<typeof SoundOutStateSchema>;

export const VolumeStateSchema = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the volume level was updated'),
	level: z.number().int().min(0).max(100)
		.describe('The sound level of the device, Range: [0–100]'),
	volOsdEnabled: z.boolean().optional()
		.describe('Whether the volume OSD (On-Screen Display) is enabled or not'),
})
	.describe('Sound volume level');
export type VolumeState = z.infer<typeof VolumeStateSchema>;

// #region State
export const SoundStateSchema = z.object({
	muted: MutedStateSchema.optional(),
	externalSpeaker: ExternalSpeakerState.optional(),
	soundMode: SoundModeStateSchema.optional(),
	soundOut: SoundOutStateSchema.optional(),
	volumeLevel: VolumeStateSchema.optional(),
});
export type SoundState = z.infer<typeof SoundStateSchema>;
// #endregion

// #region Status
export const SoundStatusSchema = z.object({
	_debug: z.string().optional()
		.describe('SCAP debug mode output'),
});
export type SoundStatus = z.infer<typeof SoundStatusSchema>;
// #endregion
