// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const SoundState = z.object({
	mode: z.enum([
		'standard',
		'movie',
		'news',
		'sports',
		'music',
		'game',
	]).default('standard')
		.describe('The current sound mode and the audio balance.'),
	balance: z.number().int().min(-50).max(50).optional()
		.describe('The audio balance of the sound mode, Range: [-50–50]'),
	level: z.number().int().min(0).max(100).optional()
		.describe('The sound level of the device, Range: [0–100]'),
	muted: z.boolean().default(false)
		.describe('Whether the sound is muted or not'),
	externalSpeaker: z.boolean().default(false)
		.describe('Whether the external speaker is enabled or not'),
	speakerType: z.enum([
		'tv_speaker',
		'bt_soundbar',
	]).optional()
		.describe('The type of the speaker, either "tv_speaker" or "bt_soundbar"'),
});
export type SoundState = z.infer<typeof SoundState>;
