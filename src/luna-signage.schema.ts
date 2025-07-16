// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const CaptureScreenRequest = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the screenshot request'),
	thumbnail: z.boolean().optional()
		.describe('Whether to capture a thumbnail screenshot or not'),
	imgResolution: z.enum([
		'thumbnail',  // 128×72
		'FHD',  // 1920×1080
		'HD',  // 1280×720
	]).optional()
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

export const CheckScreenState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the pixel sensor was checked'),
	checkScreen: z.boolean()
		.describe('Indicates whether to enable the pixel sensor'),
})
	.describe('The check screen request to enable or disable the pixel sensor');
export type CheckScreenState = z.infer<typeof CheckScreenState>;

export const DigitalAudioInputState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the digital audio input mode was updated'),
	digitalAudioInput: z.enum(['audioIn', 'hdmi'])
		.describe('Indicates the status of the digital audio input mode, either "audioIn" or "hdmi"'),
})
	.describe('The digital audio input mode of the signage device');
export type DigitalAudioInputState = z.infer<typeof DigitalAudioInputState>;

export const FailoverModeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the failover mode was updated'),
	mode: z.enum(['auto', 'manual', 'off', '___undefined___'])
		.describe('The failover mode, either "auto", "manual", or "off"'),
	priority: z.array(z.string()).optional()
		.describe('The list of input sources in priority order for failover, e.g., ["ext://hdmi:1", "ext://hdmi:2"]'),
})
	.describe('The failover mode and priority of input sources for the agent');
export type FailoverModeState = z.infer<typeof FailoverModeState>;

export const IntelligentAutoState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the Intelligent Auto feature was updated'),
	enabled: z.boolean()
		.describe('Whether Intelligent Auto is enabled or disabled. Intelligent Auto is a feature that automatically calibrates the signage device screen when an analog RGB signal is received.'),
})
	.describe('The Intelligent Auto feature of the signage device, indicating whether it is enabled or disabled');
export type IntelligentAutoState = z.infer<typeof IntelligentAutoState>;

export const IsmMethodState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the ISM method was updated'),
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
})
	.describe('The ISM method of the signage device, which helps to prevent image retention on the screen');
export type IsmMethodState = z.infer<typeof IsmMethodState>;

export const LanDaisyChainState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the LAN daisy chain state was updated'),
	enabled: z.boolean()
		.describe('Whether the LAN daisy chain is enabled or not'),
})
	.describe('The LAN daisy chain feature of the signage device, indicating whether it is enabled or not');
export type LanDaisyChainState = z.infer<typeof LanDaisyChainState>;

export const MirrorModeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the mirror mode was updated'),
	mode: z.enum(['off', 'on'])
})
	.describe('Indicates the status of the mirror mode, either "off" or "on"');
export type MirrorModeState = z.infer<typeof MirrorModeState>;

export const NoSignalImageModeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the No Signal Image mode was updated'),
	noSignalImageMode: z.enum(['off', 'on'])
		.describe('Indicates the status of the No Signal Image mode, either "off" or "on"'),
})
	.describe('The No Signal Image mode of the signage device, indicating whether it is enabled or not');
export type NoSignalImageModeState = z.infer<typeof NoSignalImageModeState>;

export const PortraitModeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the portrait mode was updated'),
	portraitMode: z.enum(['off', '90', '___undefined___'])
		.describe('The display portrait mode, either "off", "90" (90 degrees rotation), or "___undefined___" (unknown)'),
})
	.describe('The portrait mode of the signage device, indicating the orientation of the display');
export type PortraitModeState = z.infer<typeof PortraitModeState>;

export const PowerSaveModeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the power save mode was updated'),
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
export type PowerSaveModeState = z.infer<typeof PowerSaveModeState>;

export const QuietModeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the quiet mode was updated'),
	mode: z.enum(['off', 'on'])
		.describe('The quiet mode status'),
})
	.describe('The quiet mode of the signage device, indicating whether it is enabled or not');
export type QuietModeState = z.infer<typeof QuietModeState>;

export const ResetRequest = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the reset request'),
	mode: z.enum(['softReset', 'factoryReset'])
		.describe('The reset mode, either "softReset" or "factoryReset"'),
})
	.describe('The request to reset the signage device, including timestamp and reset mode');
export type ResetRequest = z.infer<typeof ResetRequest>;

export const RS232CState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the RS-232C configuration was updated'),
	mode: z.literal([0, 1])
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
export type RS232CState = z.infer<typeof RS232CState>;

export const SimplinkState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the SIMPLINK status was updated'),
	simplinkEnable: z.enum(['on', 'off'])
		.describe('Indicates the status of the SIMPLINK feature, either "on" or "off"'),
})
	.describe('The SIMPLINK status of the signage device, indicating whether the SIMPLINK feature is enabled or not');
export type SimplinkState = z.infer<typeof SimplinkState>;

export const TileState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the tile information was updated'),
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
export type TileState = z.infer<typeof TileState>;

export const UsageStatus = z.object({
	uptime: z.number()
		.describe('The uptime of the device in hours, and minutes as fractional part'),
	totalUsed: z.number().int().min(0)
		.describe('The total usage time of the device in hours'),
})
	.describe('The usage data of the device, including uptime and total used time');
export type UsageStatus = z.infer<typeof UsageStatus>;

export const UsagePermissionState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the usage permission was updated'),
	remoteKeyOperationMode: z.enum(['normal', 'blockAll', 'usePwrOnly'])
		.describe('The remote key operation mode that represents the access control for remote key input.'),
	localKeyOperationMode: z.enum(['normal', 'blockAll', 'usePwrOnly'])
		.describe('The local key operation mode that represents the access control for local key input.'),
})
	.describe('The usage permission of the device, including remote and local key operation modes');
export type UsagePermissionState = z.infer<typeof UsagePermissionState>;

// #region State
export const SignageState = z.object({
	_captureScreenRequest: CaptureScreenRequest.optional(),
	_resetRequest: ResetRequest.optional(),
	checkScreen: CheckScreenState.optional(),
	digitalAudioInput: DigitalAudioInputState.optional(),
	failoverMode: FailoverModeState.optional(),
	intelligentAuto: IntelligentAutoState.optional(),
	ismMethod: IsmMethodState.optional(),
	lanDaisyChain: LanDaisyChainState.optional(),
	mirrorMode: MirrorModeState.optional(),
	noSignalImageMode: NoSignalImageModeState.optional(),
	portraitMode: PortraitModeState.optional(),
	powerSaveMode: PowerSaveModeState.optional(),
	quietMode: QuietModeState.optional(),
	RS232CConfiguration: RS232CState.optional(),
	simplink: SimplinkState.optional(),
	tile: TileState.optional(),
	usagePermission: UsagePermissionState.optional(),
});
export type SignageState = z.infer<typeof SignageState>;
// #endregion

// #region Status
export const SignageStatus = z.object({
	captureScreenStatus: CaptureScreenStatus.optional(),
	usageData: UsageStatus.optional(),
});
export type SignageStatus = z.infer<typeof SignageStatus>;
// #endregion
