// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const CaptureScreenRequest = z.object({
	timestamp: z.iso.datetime()
		.describe('The timestamp of the screenshot request'),
	thumbnail: z.boolean().optional().default(false)
		.describe('Whether to capture a thumbnail screenshot or not'),
	imgResolution: z.enum([
		'thumbnail',  // 128×72
		'FHD',  // 1920×1080
		'HD',  // 1280×720
	]).optional().default('HD')
		.describe('The resolution of the screenshot to be captured, either "thumbnail", "FHD", or "HD"'),
})
	.describe('The request to capture a screenshot, including timestamp, thumbnail option, and image resolution');
export type CaptureScreenRequest = z.infer<typeof CaptureScreenRequest>;

export const CaptureScreenStatus = z.object({
	data: z.base64()
		.describe('The screenshot data in base64 format'),
	size: z.number().int().min(0)
		.describe('The size of the screenshot (bytes)'),
	encoding: z.literal('Base64')
		.describe('The encoding of the screenshot'),
})
	.describe('The response of the screenshot capture request, including data, size, and encoding');
export type CaptureScreenStatus = z.infer<typeof CaptureScreenStatus>;

export const FailoverMode = z.object({
	mode: z.enum(['auto', 'manual', 'off'])
		.describe('The failover mode, either "auto", "manual", or "off"'),
	priority: z.array(z.string())
		.describe('The list of input sources in priority order for failover, e.g., ["ext://hdmi:1", "ext://hdmi:2"]'),
})
	.describe('The failover mode and priority of input sources for the agent');
export type FailoverMode = z.infer<typeof FailoverMode>;

export const PowerSaveMode = z.object({
	ses: z.boolean()
		.describe('Whether the SES (Smart Energy Saving) mode is enabled or not'),
	dpmMode: z.enum([
		'off',
		'5sec',
		'10sec',
		'15sec',
		'1min',
		'3min',
		'5min',
		'10min',
	])
		.describe('The Dynamic Power Management mode. '),
	automaticStandby: z.enum([
		'off',
		'4 hours',
	])
		.describe('The automatic standby mode.'),
	do15MinOff: z.boolean()
		.describe('Whether the 15-minute off mode is enabled or not'),
})
	.describe('The power save mode of the agent, including SES mode, DPM mode, automatic standby mode, and 15-minute off mode');
export type PowerSaveMode = z.infer<typeof PowerSaveMode>;

export const RS232CConfiguration = z.object({
	mode: z.number().int().min(0).max(1)
		.describe('The RS-232C mode, either 0 ("mediabox_[DATA]_[CHECKSUM]") or 1 (ASCII data)'),
	port: z.number().int().min(1).max(13).optional()
		.describe('The RS-232C port number, e.g. 1 for COM1, and 13 for COM13'),
	baudRate: z.literal([
		1024_000,
		     110,
		 115_200,
		   1_200,
		 128_000,
		  14_400,
		  19_200,
		 230_400,
		   2_400,
		 256_000,
		     300,
		  38_400,
		   4_800,
		 512_000,
		  57_600,
		     600,
		 768_000,
		 921_600,
		   9_600,
		       0,
	]).optional()
		.describe('The RS-232C baud rate, e.g. 115200'),
	dataBit: z.literal([
		7,
		8,
		0,
	]).optional()
		.describe('The number of data bits in each character, either 7, 8, or 0 (unknown)'),
	parity: z.literal([
		2,
		1,
		3,
		0,
	]).optional()
		.describe('The parity bit setting, either 2 (even), 1 (none), 3 (odd), or 0 (unknown)'),
	stopBit: z.literal([
		1,
		2,
		0,
	]).optional()
		.describe('The number of stop bits, either 1, 2, or 0 (unknown)'),
	flowControl: z.literal([
		3,
		1,
		0,
		2,
	]).optional()
		.describe('The flow control setting, either 3 (RTS/CTS), 1 (none), 0 (unknown), or 2 (XON/XOFF)'),
	rxTimeoutInMs: z.number().int().min(0).max(1000).optional()
		.describe('The receive timeout in milliseconds, e.g. 1000'),
})
	.describe('The RS-232C configuration of the signage device');
export type RS232CConfiguration = z.infer<typeof RS232CConfiguration>;

export const TileInfo = z.object({
	enabled: z.boolean()
		.describe('Whether the tile mode is enabled or not'),
	row: z.number().int().min(1).max(15)
		.describe('The number of rows of the video wall, e.g., 3'),
	column: z.number().int().min(1).max(15)
		.describe('The number of columns of the video wall, e.g., 3'),
	tileId: z.number().int().min(1).max(225)
		.describe('The tile ID of the signage device in the video wall, Range: [1–225]'),
	naturalMode: z.boolean()
		.describe('Whether the natural mode (bezel correction) is enabled or not.'),
})
	.describe('The tile information of the signage device, including whether tile mode is enabled, number of rows and columns, tile ID, and natural mode status');
export type TileInfo = z.infer<typeof TileInfo>;

export const UsageData = z.object({
	uptime: z.number()
		.describe('The uptime of the device in hours, and minutes as fractional part'),
	totalUsed: z.number().int().min(0)
		.describe('The total usage time of the device in hours'),
})
	.describe('The usage data of the device, including uptime and total used time');
export type UsageData = z.infer<typeof UsageData>;

export const UsagePermission = z.object({
	remoteKeyOperationMode: z.enum(['normal', 'blockAll', 'usePwrOnly'])
		.describe('The remote key operation mode that represents the access control for remote key input.'),
	localKeyOperationMode: z.enum(['normal', 'blockAll', 'usePwrOnly'])
		.describe('The local key operation mode that represents the access control for local key input.'),
})
	.describe('The usage permission of the device, including remote and local key operation modes');
export type UsagePermission = z.infer<typeof UsagePermission>;

// #region State
export const SignageState = z.object({
	captureScreenRequest: CaptureScreenRequest.optional(),
	checkScreen: z.boolean().optional().default(false)
		.describe('Indicates whether to enable the pixel sensor'),
	digitalAudioInput: z.enum(['audioIn', 'hdmi']).optional()
		.describe('Indicates the status of the digital audio input mode.'),
	failoverMode: FailoverMode.optional(),
	intelligentAuto: z.boolean().optional()
		.describe('Checks whether Intelligent Auto is enabled or disabled. Intelligent Auto is a feature that automatically calibrates the signage device screen when an analog RGB signal is received.'),
	ismMethod: z.enum([
		'COLORWASH',
		'INVERSION',
		'NORMAL',
		'ORBITER',
		'USERIMAGE',
		'USERVIDEO',
		'WASHINGBAR',
		'WHITEWASH',
	])
		.describe('The ISM (Image Sticking Minimization) method'),
	lanDaisyChain: z.boolean().optional().default(false)
		.describe('Indicates whether the LAN daisy chain is enabled or not.'),
	mirrorMode: z.enum(['off', 'on']).optional()
		.describe('Indicates the status of the mirror mode.'),
	noSignalImageMode: z.enum(['off', 'on']).optional()
		.describe('Indicates the status of the No Signal Image mode.'),
	portraitMode: z.enum(['off', '90', '___undefined___'])
		.describe('The display portrait mode.'),
	powerSaveMode: PowerSaveMode.optional(),
	quietMode: z.enum(['off', 'on']).optional()
		.describe('Returns the status of the quiet mode. If the Quiet Mode is on, it stops the fan and sets the backlight to 65 of the signage device.'),
	RS232CConfiguration: RS232CConfiguration.optional(),
	simplinkStatus: z.enum(['on', 'off']).optional()
		.describe('Indicates the status of the SIMPLINK feature.'),
	tileInfo: TileInfo.optional(),
	usagePermission: UsagePermission.optional(),
});
export type SignageState = z.infer<typeof SignageState>;
// #endregion

// #region Status
export const SignageStatus = z.object({
	captureScreenStatus: CaptureScreenStatus.optional(),
	usageData: UsageData.optional(),
});
export type SignageStatus = z.infer<typeof SignageStatus>;
// #endregion
