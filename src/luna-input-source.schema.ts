// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

// #region State
export const InputSourceState = z.object({
	currentInputSource: z.string()
		.describe('The current input source, e.g. "ext://hdmi:1"'),
});
export type InputSourceState = z.infer<typeof InputSourceState>;
// #endregion

// #region Status
export const InputSourceStatus = z.object({
	externalInputList: z.array(z.object({
		inputPort: z.string()
			.describe('The input source label, e.g. "ext://hdmi:1"'),
		signalDetection: z.boolean()
			.describe('Indicates whether the input source is detected or not'),
		vendorID: z.string().optional()
			.describe('The vendor ID of the input source when SIMPLINK is enabled, e.g. 57489'),
		name: z.string().optional()
			.describe('The name of the input source when SIMPLINK is enabled e.g. "BD PLAYER"'),
	}))
		.describe('The list of external input sources'),
});
export type InputSourceStatus = z.infer<typeof InputSourceStatus>;
// #endregion
