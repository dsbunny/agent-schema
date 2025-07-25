// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const DisplayModeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the display mode was updated'),
	displayMode: z.enum([
		'Screen Off',
		'Active',
	])
		.describe('Indicates whether the device screen is turned on or off'),
})
	.describe('The display mode of the signage device, indicating whether the screen is on or off');
export type DisplayModeState = z.infer<typeof DisplayModeState>;

export const DPMWakeupState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the DPM wakeup signal was updated'),
	dpmSignalType: z.enum([
		'clock',
		'clockAndData',
	])
		.describe('The DPM (Display Power Management) signal type, either "clock" or "clockAndData"'),
})
	.describe('The DPM wakeup signal type, which indicates how the device can be woken up from a low power state');
export type DPMWakeupState = z.infer<typeof DPMWakeupState>;

export const PMModeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the power management mode was updated'),
	mode: z.enum([
		'powerOff',
		'screenOff',
		'screenOffAlways',
		'screenOffBacklight',
		'sustainAspectRatio',
		'networkReady',
	])
		.describe('The power management mode, which determines how the signage device behaves when its power is turned off'),
})
	.describe('The power management mode configuration for the signage device, specifying how it behaves in different power states');
export type PMModeState = z.infer<typeof PMModeState>;

export const PowerCommandRequest = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last power command request'),
	powerCommand: z.enum([
		'reboot',
		'powerOff',
	])
		.describe('The power command to be executed, either "reboot" or "powerOff"'),
})
	.describe('The request to control the power state of the signage device, including the power command and the timestamp of the request');
export type PowerCommandRequest = z.infer<typeof PowerCommandRequest>;

export const PowerOnDelayState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the power-on delay was updated'),
	delayTime: z.number().int().min(0).max(250)
		.describe('The power-on delay time in seconds, ranging from 0 to 250'),
})
	.describe('The power-on delay configuration for the signage device, specifying how long to wait before turning on the device after a power command is issued');
export type PowerOnDelayState = z.infer<typeof PowerOnDelayState>;

export const WakeOnLanState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the Wake-on-LAN configuration was updated'),
	wakeOnLan: z.boolean()
		.describe('Whether Wake-on-LAN is enabled or not'),
})
	.describe('The Wake-on-LAN configuration for the signage device, indicating if it can be woken up remotely over the network');
export type WakeOnLanState = z.infer<typeof WakeOnLanState>;

// #region State
export const PowerState = z.object({
	_powerCommandRequest: PowerCommandRequest.optional(),
	displayMode: DisplayModeState.optional(),
	dpmWakeup: DPMWakeupState.optional(),
	pmMode: PMModeState.optional(),
	powerOnDelay: PowerOnDelayState.optional(),
	wakeOnLan: WakeOnLanState.optional(),
	// Skip `offTimerList` and `onTimerList` as deprecated.
});
export type PowerState = z.infer<typeof PowerState>;
// #endregion

// #region Status
export const PowerStatus = z.object({
	_debug: z.string().optional()
		.describe('SCAP debug mode output'),
});
export type PowerStatus = z.infer<typeof PowerStatus>;
// #endregion
