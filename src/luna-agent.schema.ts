// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod';
import {
	AgentState,
	AgentStateBase,
	AgentStatus,
	AgentStatusBase,
} from '@dsbunny/rmm-schema';

export const LUNA_AGENT_URN = 'urn:dsbunny:agent:luna';

// #region State
export const LunaAgentStateDetail = z.object({
	// Configuration
	ntp: z.boolean().optional()
		.describe('Whether NTP (Network Time Protocol) is enabled or disabled'),
	ntpServerAddress: z.string().optional()
		.describe('The NTP server address (IPv4, IPv6, or domain name)'),
	// Power
	pm_mode: z.enum([
		'PowerOff',
		'ScreenOff',
		'ScreenOffAlways',
		'ScreenOffBacklight',
		'SustainAspectRation',
		'NetworkReady',
	]).optional()
		.describe('The power management mode'),
	display_mode: z.enum([
		'DISPLAY_OFF',
		'DISPLAY_ON',
	]).optional()
		.describe('The display mode'),
	// Signage
	screenshot_timestamp: z.string().datetime().optional()
		.describe('The timestamp of the screenshot request'),
	screenshot_resolution: z.enum([
		'thumbnail',  // 128×72
		'FHD',  // 1920×1080
		'HD',  // 1280×720
	]).optional()
		.describe('The resolution of the screenshot'),
	// Storage
	// Firmware and app detail will be `undefined` on adoption until a
	// update is performed.
	firmware_version: z.string().optional()
		.describe('The version of the firmware'),
	firmware_url: z.string().url().optional()
		.describe('The URL of the firmware'),
	app_version: z.string().optional()
		.describe('The version of the app'),
	app_url: z.string().url().optional()
		.describe('The URL of the app'),
	// Time
	timer_list: z.array(z.object({
		type: z.enum(['OFFTIMER', 'ONTIMER']),
		hour: z.number().int().min(0).max(23),
		minute: z.number().int().min(0).max(59),
		week: z.number().int().min(0).max(127),  // Monday = 1, Everyday = 127
	})).optional()
		.describe('The list of timers'),
});
export type LunaAgentStateDetail = z.infer<typeof LunaAgentStateDetail>;

export const LunaAgentStateBase = AgentStateBase.merge(z.object({
	url: z.literal(LUNA_AGENT_URN),
	detail: LunaAgentStateDetail.nullable()
		.describe('The detail of the Luna agent state'),
}));
export type LunaAgentStateBase = z.infer<typeof LunaAgentStateBase>;
export const LunaAgentState = AgentState.merge(LunaAgentStateBase);
export type LunaAgentState = z.infer<typeof LunaAgentState>;
// #endregion

// #region Status
export const LunaAgentStatusDetail = z.object({
	// Configuration
	// Only report time in the status, setting the time over the network will not be
	// supported in deference to enabling NTP.
	year: z.number().int().min(2000).max(2037)
		.describe('The year of the current system time'),
	month: z.number().int().min(1).max(12)
		.describe('The month of the current system time'),
	day: z.number().int().min(1).max(31)
		.describe('The day of the current system time'),
	hour: z.number().int().min(0).max(23)
		.describe('The hour of the current system time'),
	minute: z.number().int().min(0).max(59)
		.describe('The minute of the current system time'),
	sec: z.number().int().min(0).max(59)
		.describe('The second of the current system time'),
	// DeviceInfo
	cpus: z.array(z.object({
		model: z.string().optional()
			.describe('The CPU model name'),
		times: z.array(z.object({
			user: z.number().optional()
				.describe('The CPU time spent on user space (milliseconds)'),
			nice: z.number().optional()
				.describe('The CPU time spent on low priority processes (milliseconds)'),
			sys: z.number().optional()
				.describe('The CPU time spent on kernel space (milliseconds)'),
			idle: z.number().optional()
				.describe('The CPU time spent idle (milliseconds)'),
			irq: z.number().optional()
				.describe('The CPU time spent handling interrupts (milliseconds)'),
		})).optional(),
		memory: z.object({
			total: z.number().optional()
				.describe('Total memory space (bytes)'),
			free: z.number().optional()
				.describe('Free memory space (bytes)'),
			used: z.number().optional()
				.describe('Used memory space (bytes)'),
			buffer: z.number().optional()
				.describe('Buffered memory space (bytes)'),
			cached: z.number().optional()
				.describe('Cached memory space (bytes)'),
		}).optional(),
	})).optional(),
	// Signage
	screenshot: z.object({
		data: z.string().base64()
			.describe('The screenshot data in base64 format'),
		size: z.number().int().min(0)
			.describe('The size of the screenshot (bytes)'),
		encoding: z.literal('Base64')
			.describe('The encoding of the screenshot'),
	}).optional(),
	// Storage
	firmware_status: z.enum([
		'idle',
		'downloading',
		'ready',
		'in progress',
		'completed',
		'fail',
	]).optional(),
	firmware_download_progress: z.number().int().min(0).max(100).optional()
		.describe('Indicates the progress status (%) of firmware file download'),
	firmware_upgrade_progress: z.number().int().min(0).max(100).optional()
		.describe('Indicates the firmware upgrade status (%)'),
	usb_list: z.array(z.object({
		usbName: z.string(),
		vendor: z.string(),
		product: z.string(),
		deviceId: z.string(),
	})).optional()
		.describe('The list of USB devices'),
});
export type LunaAgentStatusDetail = z.infer<typeof LunaAgentStatusDetail>;

export const LunaAgentStatusBase = AgentStatusBase.merge(z.object({
	url: z.literal(LUNA_AGENT_URN),
	detail: LunaAgentStatusDetail.nullable()
		.describe('The detail of the Luna agent status'),
}));
export type LunaAgentStatusBase = z.infer<typeof LunaAgentStatusBase>;
export const LunaAgentStatus = AgentStatus.merge(LunaAgentStatusBase);
export type LunaAgentStatus = z.infer<typeof LunaAgentStatus>;
// #endregion
