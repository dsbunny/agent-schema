// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const ClearCacheRequest = z.object({
	timestamp: z.iso.datetime()
		.describe('The timestamp of the cache clear request'),
})
	.describe('The request to clear the cache of the signage device, including timestamp');
export type ClearCacheRequest = z.infer<typeof ClearCacheRequest>;

export const CurrentTimeState = z.object({
	ntp: z.boolean().optional().default(false)
		.describe('Whether NTP (Network Time Protocol) is enabled or disabled'),
	ntpServerAddress: z.string().optional()
		.describe('The NTP server address (IPv4, IPv6, or domain name)'),
});
export type CurrentTimeState = z.infer<typeof CurrentTimeState>;

export const Locale = z.object({
	language: z.string()
		.describe('The language in native language with HTML entities, e.g., "Espa&ntilde;ol"'),
	languageCode: z.string()
		.describe('The language code in ISO 639-1 format, e.g., "es"'),
	countries: z.array(z.object({
		name: z.string()
			.describe('The country name in native language with HTML entities, e.g., "Espa&ntilde;a"'),
		specifier: z.string()
			.describe('The country specifier in <language-code>-<country-code> format, e.g., "es-ES"'),
	})),
}).describe('The locale in the format "language (language code) - country (specifier)"');
export type Locale = z.infer<typeof Locale>;

// REF: https://webossignage.developer.lge.com/apis/scap-api/v1.8-configuration-methods2#setpictureproperty
// Note that each picture mode supports different picture properties.
export const PictureProperty = z.object({
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
	colorTemperature: z.number().int().min(0).max(100).optional()
		.describe('The color temperature of the display. Range: [0–100] Warm: 0, Cool: 100'),
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
	]).optional()
		.describe('The super resolution level of the display. Range: [off, low, medium, high]'),
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
export type PictureProperty = z.infer<typeof PictureProperty>;

export const RestartApplicationRequest = z.object({
	timestamp: z.iso.datetime()
		.describe('The timestamp of the application restart request'),
})
	.describe('The request to restart the application of the signage device, including timestamp');
export type RestartApplicationRequest = z.infer<typeof RestartApplicationRequest>;

export const TimeZone = z.object({
	continent: z.string()
		.describe('The continent of the time zone, e.g., "Europe"'),
	country: z.string()
		.describe('The country of the time zone, e.g., "Germany"'),
	city: z.string()
		.describe('The city of the time zone, e.g., "Berlin"'),
}).describe('The time zone in the format "Continent/Country/City"');
export type TimeZone = z.infer<typeof TimeZone>;

// #region State
export const ConfigurationState = z.object({
	clearCacheRequest: ClearCacheRequest.optional(),
	currentTime: CurrentTimeState.optional(),
	masterPinActivated: z.boolean().optional().default(true)
		.describe('Whether the master PIN is activated or not'),
	OSDLanguage: z.string().optional().default('en-US')
		.describe('The OSD (On-Screen Display) language of the settings and installation menu, formatted as "language code-country code" (e.g., "en-US")'),
	OSDLock: z.boolean().optional().default(false)
		.describe('Whether the OSD (On-Screen Display) is locked or not'),
	pictureMode: z.enum([
		'eco',  // APS (Auto Power Saving) mode
		'cinema',
		'expert1',
		'expert2',
		'game',
		'sports',
		'normal',
		'vivid',
	]).optional().default('normal')
		.describe('The picture mode of the agent'),
	pictureProperty: PictureProperty.optional()
		.describe('The picture properties of the agent'),
	// 'property' fields are skipped due to narrow use cases: "Screen
	// Share", "Simplink" key input, and CEC device control.
	proxyBypassList: z.array(z.string()).optional()
		.describe('The list of proxy bypass wildcard addresses, e.g., "*.example.com"'),
	restartApplicationRequest: RestartApplicationRequest.optional(),
	// `serverProperty` fields are skipped due to inherent limitations
	// as the application is already installed.
	timeZone: TimeZone.optional()
		.describe('The time zone in the format Continent/Country/City'),
	USBLock: z.boolean().optional().default(false)
		.describe('Whether the USB ports are locked or not'),
});
export type ConfigurationState = z.infer<typeof ConfigurationState>;
// #endregion

// #region Status
export const ConfigurationStatus = z.object({
	currentTime: z.iso.datetime()
		.describe('The local date and time of the agent'),
	localeList: z.array(Locale)
		.describe('The list of locales supported by the agent'),
	timeZoneList: z.array(TimeZone)
		.describe('The list of time zones supported by the agent'),
});
export type ConfigurationStatus = z.infer<typeof ConfigurationStatus>;
// #endregion
