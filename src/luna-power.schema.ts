// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const DisplayMode = z.object({
	displayMode: z.enum([
		'Screen Off',
		'Active',
	])
		.describe('Indicates whether the device screen is turned on or off'),
})
	.describe('The display mode of the signage device, indicating whether the screen is on or off');
export type DisplayMode = z.infer<typeof DisplayMode>;

export const DPMWakeup = z.object({
	dpmSignalType: z.enum([
		'clock',
		'clockAndData',
	])
		.describe('The DPM (Display Power Management) signal type, either "clock" or "clockAndData"'),
})
	.describe('The DPM wakeup signal type, which indicates how the device can be woken up from a low power state');
export type DPMWakeup = z.infer<typeof DPMWakeup>;

export const PMMode = z.object({
	mode: z.enum([
		'powerOff',
		'screenOff',
		'screenOffAlways',
		'screenOffBacklight',
		'sustainAspectRation',
		'networkReady',
	])
		.describe('The power management mode, which determines how the signage device behaves when its power is turned off'),
})
	.describe('The power management mode configuration for the signage device, specifying how it behaves in different power states');
export type PMMode = z.infer<typeof PMMode>;

export const PowerCommandRequest = z.object({
	timestamp: z.iso.datetime()
		.describe('The timestamp of the last power command request'),
	powerCommand: z.enum([
		'reboot',
		'powerOff',
	])
		.describe('The power command to be executed, either "reboot" or "powerOff"'),
})
	.describe('The request to control the power state of the signage device, including the power command and the timestamp of the request');
export type PowerCommandRequest = z.infer<typeof PowerCommandRequest>;

export const PowerOnDelay = z.object({
	delayTime: z.number().int().min(0).max(250)
		.describe('The power-on delay time in seconds, ranging from 0 to 250'),
})
	.describe('The power-on delay configuration for the signage device, specifying how long to wait before turning on the device after a power command is issued');
export type PowerOnDelay = z.infer<typeof PowerOnDelay>;

export const WakeOnLan = z.object({
	wakeOnLan: z.boolean().optional()
		.describe('Whether Wake-on-LAN is enabled or not'),
})
	.describe('The Wake-on-LAN configuration for the signage device, indicating if it can be woken up remotely over the network');
export type WakeOnLan = z.infer<typeof WakeOnLan>;

// #region State
export const PowerState = z.object({
	displayMode: DisplayMode.optional(),
	dpmWakeup: DPMWakeup.optional(),
	pmMode: PMMode.optional(),
	powerCommandRequest: PowerCommandRequest.optional(),
	powerOnDelay: PowerOnDelay.optional(),
	wakeOnLan: WakeOnLan.optional(),
	// Skip `offTimerList` and `onTimerList` as deprecated.
});
export type PowerState = z.infer<typeof PowerState>;
// #endregion
