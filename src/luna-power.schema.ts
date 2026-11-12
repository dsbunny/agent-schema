// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { lunaRegistry } from './registry.js';

export const DisplayModeStateSchema = z.object({
	'@type': z.literal('DisplayModeState')
		.describe('Type of the display mode state'),
	'@timestamp': z.iso.datetime()
		.describe('The timestamp of the last time the display mode was updated'),
	displayMode: z.enum([
		'Screen Off',
		'Active',
	])
		.describe('Indicates whether the device screen is turned on or off'),
}).register(lunaRegistry, {
	id: 'DisplayModeStateSchema',
	description: 'The display mode of the signage device, indicating whether the screen is on or off',
});
export type DisplayModeState = z.infer<typeof DisplayModeStateSchema>;

export const DPMWakeupStateSchema = z.object({
	'@type': z.literal('DPMWakeupState')
		.describe('Type of the DPM wakeup state'),
	'@timestamp': z.iso.datetime()
		.describe('The timestamp of the last time the DPM wakeup signal was updated'),
	dpmSignalType: z.enum([
		'clock',
		'clockAndData',
	])
		.describe('The DPM (Display Power Management) signal type, either "clock" or "clockAndData"'),
}).register(lunaRegistry, {
	id: 'DPMWakeupStateSchema',
	description: 'The DPM wakeup signal type, which indicates how the device can be woken up from a low power state',
});
export type DPMWakeupState = z.infer<typeof DPMWakeupStateSchema>;

export const PMModeStateSchema = z.object({
	'@type': z.literal('PMModeState')
		.describe('Type of the PM mode state'),
	'@timestamp': z.iso.datetime()
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
}).register(lunaRegistry, {
	id: 'PMModeStateSchema',
	description: 'The power management mode configuration for the signage device, specifying how it behaves in different power states',
});
export type PMModeState = z.infer<typeof PMModeStateSchema>;

export const PowerCommandRequestSchema = z.object({
	'@type': z.literal('PowerCommandRequest')
		.describe('Type of the power command request'),
	'@timestamp': z.iso.datetime()
		.describe('The timestamp of the last power command request'),
	powerCommand: z.enum([
		'reboot',
		'powerOff',
	])
		.describe('The power command to be executed, either "reboot" or "powerOff"'),
}).register(lunaRegistry, {
	id: 'PowerCommandRequestSchema',
	description: 'The request to control the power state of the signage device, including the power command and the timestamp of the request',
});
export type PowerCommandRequest = z.infer<typeof PowerCommandRequestSchema>;

export const PowerOnDelayStateSchema = z.object({
	'@type': z.literal('PowerOnDelayState')
		.describe('Type of the power-on delay state'),
	'@timestamp': z.iso.datetime()
		.describe('The timestamp of the last time the power-on delay was updated'),
	delayTime: z.number().int().min(0).max(250)
		.describe('The power-on delay time in seconds, ranging from 0 to 250'),
}).register(lunaRegistry, {
	id: 'PowerOnDelayStateSchema',
	description: 'The power-on delay configuration for the signage device, specifying how long to wait before turning on the device after a power command is issued',
});
export type PowerOnDelayState = z.infer<typeof PowerOnDelayStateSchema>;

export const WakeOnLanStateSchema = z.object({
	'@type': z.literal('WakeOnLanState')
		.describe('Type of the Wake-on-LAN state'),
	'@timestamp': z.iso.datetime()
		.describe('The timestamp of the last time the Wake-on-LAN configuration was updated'),
	wakeOnLan: z.boolean()
		.describe('Whether Wake-on-LAN is enabled or not'),
}).register(lunaRegistry, {
	id: 'WakeOnLanStateSchema',
	description: 'The Wake-on-LAN configuration for the signage device, indicating if it can be woken up remotely over the network',
});
export type WakeOnLanState = z.infer<typeof WakeOnLanStateSchema>;

// #region State
export const PowerStateSchema = z.object({
	'@type': z.literal('PowerState')
		.describe('Type of the power state'),
	_powerCommandRequest: PowerCommandRequestSchema.optional(),
	displayMode: DisplayModeStateSchema.optional(),
	dpmWakeup: DPMWakeupStateSchema.optional(),
	pmMode: PMModeStateSchema.optional(),
	powerOnDelay: PowerOnDelayStateSchema.optional(),
	wakeOnLan: WakeOnLanStateSchema.optional(),
	// Skip `offTimerList` and `onTimerList` as deprecated.
}).register(lunaRegistry, {
	id: 'PowerStateSchema',
	description: 'The power state of the signage device, including power command request, display mode, DPM wakeup, PM mode, power-on delay, and Wake-on-LAN configuration',
});
export type PowerState = z.infer<typeof PowerStateSchema>;
// #endregion

// #region Status
export const PowerStatusSchema = z.object({
	'@type': z.literal('PowerStatus')
		.describe('Type of the power status'),
	_debug: z.string().optional()
		.describe('SCAP debug mode output'),
}).register(lunaRegistry, {
	id: 'PowerStatusSchema',
	description: 'The status of the power subsystem of the signage device, including debug information',
});
export type PowerStatus = z.infer<typeof PowerStatusSchema>;
// #endregion
