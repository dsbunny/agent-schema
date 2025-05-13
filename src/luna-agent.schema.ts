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
		'powerOff',
		'screenOff',
		'screenOffAlways',
		'screenOffBacklight',
		'sustainAspectRation',
		'networkReady',
	]).optional()
		.describe('The power management mode'),
	display_mode: z.enum([
		'Screen Off',
		'Active',
	]).optional()
		.describe('The display mode'),
	// Signage
	screenshot_timestamp: z.iso.datetime().optional()
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
	firmware_url: z.url().optional()
		.describe('The URL of the firmware'),
	app_version: z.string().optional()
		.describe('The version of the app'),
	app_url: z.url().optional()
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

export const LunaAgentStateBase = AgentStateBase.extend({
	url: z.literal(LUNA_AGENT_URN),
	detail: LunaAgentStateDetail.nullable()
		.describe('The detail of the Luna agent state'),
});
export type LunaAgentStateBase = z.infer<typeof LunaAgentStateBase>;
export const LunaAgentState = AgentState.extend(LunaAgentStateBase.shape);
export type LunaAgentState = z.infer<typeof LunaAgentState>;
// #endregion

// #region Status
export const LunaAgentStatusDetail = z.object({
	date: z.iso.datetime()
		.describe('The local date and time of the agent'),
	// DeviceInfo
	cpus: z.array(z.object({
		model: z.string()
			.describe('The CPU model name'),
		times: z.object({
			user: z.number()
				.describe('The CPU time spent on user space (milliseconds)'),
			nice: z.number()
				.describe('The CPU time spent on low priority processes (milliseconds)'),
			sys: z.number()
				.describe('The CPU time spent on kernel space (milliseconds)'),
			idle: z.number()
				.describe('The CPU time spent idle (milliseconds)'),
			irq: z.number()
				.describe('The CPU time spent handling interrupts (milliseconds)'),
		}),
	})).optional(),
	memory: z.object({
		total: z.number()
			.describe('Total memory space (bytes)'),
		free: z.number()
			.describe('Free memory space (bytes)'),
		used: z.number()
			.describe('Used memory space (bytes)'),
		buffer: z.number()
			.describe('Buffered memory space (bytes)'),
		cached: z.number()
			.describe('Cached memory space (bytes)'),
	}).optional(),
	// Signage
	screenshot: z.object({
		data: z.base64()
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
		deviceId: z.string().optional(),  // Optional/required not documented.
	})).optional()
		.describe('The list of USB devices'),
	// ScapError
	errors: z.record(z.string(), z.object({
		count: z.number().int().min(0)
			.describe('The number of errors'),
		entries: z.array(z.object({
			code: z.string()
				.describe('The error code'),
			text: z.string()
				.describe('The error text'),
			timestamp: z.string().datetime()
				.describe('The timestamp of the error'),
		})),
	})).optional()
		.describe('The list of errors'),

});
export type LunaAgentStatusDetail = z.infer<typeof LunaAgentStatusDetail>;

export const LunaAgentStatusBase = AgentStatusBase.extend({
	url: z.literal(LUNA_AGENT_URN),
	detail: LunaAgentStatusDetail.nullable()
		.describe('The detail of the Luna agent status'),
});
export type LunaAgentStatusBase = z.infer<typeof LunaAgentStatusBase>;
export const LunaAgentStatus = AgentStatus.extend(LunaAgentStatusBase.shape);
export type LunaAgentStatus = z.infer<typeof LunaAgentStatus>;
// #endregion
