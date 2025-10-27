// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";

export const ClearCacheRequest = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the cache clear request'),
})
	.describe('The request to clear the cache of the signage device, including timestamp');
export type ClearCacheRequest = z.infer<typeof ClearCacheRequest>;

export const CurrentTimeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the current time was set'),
	ntp: z.boolean().optional()
		.describe('Whether NTP (Network Time Protocol) is enabled or disabled'),
	// WebOS 4 will default to `us.pool.ntp.org`,
	// WebOS 6 will default to `us.pool.ntp.org`, `uk.pool.ntp.org`, `kr.pool.ntp.org`, `au.pool.ntp.org`
	ntpServerAddress: z.string().optional()
		.describe('The NTP server address (IPv4, IPv6, or domain name)'),
});
export type CurrentTimeState = z.infer<typeof CurrentTimeState>;

export const CurrentTimeStatus = z.object({
	timestamp: z.iso.datetime()
		.describe('The current local date and time of the signage device'),
});
export type CurrentTimeStatus = z.infer<typeof CurrentTimeStatus>;

export const MasterPinState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the master PIN was set'),
	activated: z.boolean()
		.describe('Whether the master PIN is activated or not'),
});
export type MasterPinState = z.infer<typeof MasterPinState>;

export const OSDLanguageState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the OSD language was set'),
	specifier: z.string()
		.describe('The OSD (On-Screen Display) language specifier in <language-code>-<country-code> format, e.g., "en-US"'),
});
export type OSDLanguageState = z.infer<typeof OSDLanguageState>;

export const OSDLockState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the OSD lock state was set'),
	enabled: z.boolean()
		.describe('Whether the OSD (On-Screen Display) is locked or not'),
});
export type OSDLockState = z.infer<typeof OSDLockState>;

export const Locale = z.object({
	language: z.string()
		.describe('The language in native language, e.g., "Español"'),
	languageCode: z.string()
		.describe('The language code in ISO 639-1 format, e.g., "es"'),
	countries: z.array(z.object({
		name: z.string()
			.describe('The country name in native language, e.g., "España"'),
		specifier: z.string()
			.describe('The country specifier in <language-code>-<country-code> format, e.g., "es-ES"'),
	})),
}).describe('The locale in the format "language (language code) - country (specifier)"');
export type Locale = z.infer<typeof Locale>;

export const LocaleListStatus = z.object({
	localeList: z.array(Locale)
		.describe('The list of locales supported by the signage device'),
});
export type LocaleListStatus = z.infer<typeof LocaleListStatus>;

export const PictureModeState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the picture mode was set'),
	mode: z.enum([
		'eco',  // APS (Auto Power Saving) mode
		'cinema',
		'expert1',
		'expert2',
		'game',
		'sports',
		'normal',
		'vivid',
	])
		.describe('The picture mode of the agent'),
});
export type PictureModeState = z.infer<typeof PictureModeState>;

export const PicturePropertyState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the picture properties were set'),
	backlight: z.number().int().min(0).max(100).optional()
		.describe('The backlight level of the display. Range: [0–100]'),
	contrast: z.number().int().min(0).max(100).optional()
		.describe('The contrast level of the display. Range: [0–100]'),
	brightness: z.number().int().min(0).max(100).optional()
		.describe('The brightness level of the display. Range: [0–100]'),
	sharpness: z.number().int().min(0).max(100).optional()
		.describe('The sharpness level of the display. Range: [0–100]'),
	hSharpness: z.number().int().min(0).max(50).optional()
		.describe('The horizontal sharpness level of the display. Range: [0–50]'),
	vSharpness: z.number().int().min(0).max(50).optional()
		.describe('The vertical sharpness level of the display. Range: [0–50]'),
	color: z.number().int().min(0).max(100).optional()
		.describe('The color saturation of the display. Range: [0–100]'),
	tint: z.number().int().min(0).max(100).optional()
		.describe('The tint level of the display. Range: [0–100] Red: 0, Green: 100'),
	colorTemperature: z.number().int().min(3200).max(13000).optional()
		.describe('The color temperature of the display. Range: [3200–13000] Warm: 3200, Cool: 13000'),
	dynamicContrast: z.enum([
		'off',
		'low',
		'medium',
		'high',
	]).optional()
		.describe('The dynamic contrast level of the display. Range: [off, low, medium, high]'),
	superResolution: z.enum([
		'off',
		'low',
		'medium',
		'high',
		'Unsupported',  // Not supported by some models
	]).nullable().optional()
		.describe('The super resolution level of the display. Range: [off, low, medium, high]'),
	colorGamut: z.enum([
		'normal',
		'extended',
	]).optional()
		.describe('The color gamut of the display. Range: [normal, extended]'),
	dynamicColor: z.enum([
		'off',
		'low',
		'medium',
		'high',
	]).optional()
		.describe('The dynamic color level of the display. Range: [off, low, medium, high]'),
	noiseReduction: z.enum([
		'auto',
		'off',
		'low',
		'medium',
		'high',
	]).optional()
		.describe('The noise reduction level of the display. Range: [auto, off, low, medium, high]'),
	mpegNoiseReduction: z.enum([
		'auto',
		'off',
		'low',
		'medium',
		'high',
	]).optional()
		.describe('The MPEG noise reduction level of the display. Range: [auto, off, low, medium, high]'),
	blackLevel: z.enum([
		'low',
		'high',
	]).optional()
		.describe('The black level of the display. Range: [low, high]'),
	gamma: z.enum([
		'low',
		'medium',
		'high',
		'high3',
	]).optional()
		.describe('The gamma level of the display. Range: [low, medium, high, high3]'),
});
export type PicturePropertyState = z.infer<typeof PicturePropertyState>;

export const PropertyState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the properties were set'),
	alias: z.string().optional()
		.describe('Displays alias name'),
	operation_mode_after_screen_share: z.string().optional()
		.describe('Launches the app when Screen Sharing exits. A reboot is necessary to apply the changes. A reboot is necessary to apply the changes.'),
	key_delivery_to_simplink: z.string().optional()
		.describe('Enables or disables the delivery of key input to Simplink devices. A reboot is necessary to apply the changes.'),
	cec_device_control: z.string().nullable().optional()
		.describe('Enables or disables CEC (Consumer Electronics Control) device control. A reboot is necessary to apply the changes.'),
});
export type PropertyState = z.infer<typeof PropertyState>;

export const ProxyBypassListState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the proxy bypass list was set'),
	urlList: z.array(z.string())
		.describe('The list of proxy bypass wildcard addresses, e.g., "*.example.com"'),
});
export type ProxyBypassListState = z.infer<typeof ProxyBypassListState>;

export const RestartApplicationRequest = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the application restart request'),
})
	.describe('The request to restart the application of the signage device, including timestamp');
export type RestartApplicationRequest = z.infer<typeof RestartApplicationRequest>;

export const ServerPropertyState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the server properties were set'),
	serverIp: z.string()
		.describe('The IP address of the server to which the agent connects'),
	serverPort: z.number().int().min(1).max(65535)
		.describe('The port of the server to which the agent connects'),
	secureConnection: z.boolean()
		.describe('Whether the connection to the server is secure (HTTPS) or not'),
	appLaunchMode: z.enum(['local', 'remote', 'usb'])
		.describe('The application launch mode of the agent.'),
	appType: z.enum(['IPK', 'ZIP']).optional()
		.describe('The type of the application to be launched by the agent.'),
	fqdnMode: z.boolean()
		.describe('Whether the FQDN (Fully Qualified Domain Name) mode is enabled or not'),
	fqdnAddr: z.string()
		.describe('The FQDN address of the server to which the agent connects'),
	appLaunchDeviceId: z.string().optional()
		.describe('The device ID of the application to be launched by the agent'),
	autoSet: z.enum(['on', 'off']).optional()
		.describe('Whether the server properties are set via `scap_installation.json` on a USB device or not'),
});
export type ServerPropertyState = z.infer<typeof ServerPropertyState>;

export const TimeZone = z.object({
	continent: z.string()
		.describe('The continent of the time zone, e.g., "Europe"'),
	country: z.string()
		.describe('The country of the time zone, e.g., "Germany"'),
	city: z.string()
		.describe('The city of the time zone, e.g., "Berlin"'),
}).describe('The time zone in the format "Continent/Country/City"');
export type TimeZone = z.infer<typeof TimeZone>;

export const TimeZoneState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the time zone was set'),
	timeZone: TimeZone,
})
	.describe('The time zone of the signage device, including timestamp');
export type TimeZoneState = z.infer<typeof TimeZoneState>;

export const TimeZoneListStatus = z.object({
	timeZone: z.array(TimeZone)
		.describe('The list of time zones supported by the agent'),
});
export type TimeZoneListStatus = z.infer<typeof TimeZoneListStatus>;

export const USBLockState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the USB lock state was set'),
	enabled: z.boolean()
		.describe('Whether the USB ports are locked or not'),
}).describe('The USB lock status of the signage device');
export type USBLockState = z.infer<typeof USBLockState>;

// #region State
export const ConfigurationState = z.object({
	_clearCacheRequest: ClearCacheRequest.optional(),
	_restartApplicationRequest: RestartApplicationRequest.optional(),
	currentTime: CurrentTimeState.optional(),
	masterPin: MasterPinState.optional(),
	OSDLanguage: OSDLanguageState.optional(),
	OSDLock: OSDLockState.optional(),
	pictureMode: PictureModeState.optional(),
	pictureProperty: PicturePropertyState.optional(),
	property: PropertyState.optional(),
	proxyBypassList: ProxyBypassListState.optional(),
	serverProperty: ServerPropertyState.optional(),
	timeZone: TimeZoneState.optional(),
	USBLock: USBLockState.optional(),
});
export type ConfigurationState = z.infer<typeof ConfigurationState>;
// #endregion

// #region Status
export const ConfigurationStatus = z.object({
	currentTime: CurrentTimeStatus.optional()
		.describe('The local date and time of the signage device'),
	localeList: LocaleListStatus.optional()
		.describe('The list of locales supported by the signage device'),
	timeZoneList: TimeZoneListStatus.optional()
		.describe('The list of time zones supported by the signage device'),
	_debug: z.string().optional()
		.describe('SCAP debug mode output'),
});
export type ConfigurationStatus = z.infer<typeof ConfigurationStatus>;
// #endregion
