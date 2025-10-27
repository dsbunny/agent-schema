// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";

export const ApplicationInfoStatus = z.object({
	appinfo: z.object({
		icon: z.string()
			.describe('The path of the image icon representing your app, displayed on the launcher'),
		id: z.literal("com.lg.app.signage")
			.describe('The app ID'),
		main: z.string()
			.describe('The launch point for the app in the form of a file path relative to the appinfo.json file'),
		title: z.string()
			.describe('The name of the app'),
		type: z.literal("web")
			.describe('The type of the app, which is "web" for webOS apps'),
		version: z.string()
			.describe('The application version number, comprised of three non-negative integers in the format specified below. DO NOT contain leading zeroes'),
		allowAudioCapture: z.boolean().optional()
			.describe('Sets whether the audio is captured using webcam through the navigator.mediaDevices API'),
		allowVideoCapture: z.boolean().optional()
			.describe('Sets whether the video is captured using webcam through the navigator.mediaDevices API'),
		appDescription: z.string().max(60).optional()
			.describe('The appDescription provides brief information of the app'),
		crossDomainSecurity: z.enum(['high', 'low', 'disable']).optional()
			.describe('The flag that sets the security level of cross domain policy'),
		disableBackHistoryAPI: z.boolean().optional()
			.describe('Set whether an app can receive a back key event when the back button is pressed'),
		inspectable: z.boolean().optional()
			.describe('Indicates whether to enable debugging apps on signage devices'),
		largeIcon: z.string().optional()
			.describe('Path for a background image to be shown while the app is loading'),
		splashBackground: z.string().optional()
			.describe('The background color of the splash screen'),
		supportedOrientations: z.array(z.enum(["Landscape", "InvertedPortrait", "InvertedLandscape", "Portrait"])).optional(),
		useVirtualKeyboard: z.boolean().optional()
			.describe('Indicates whether to enable Virtual keyboard feature on signage devices'),
		vendor: z.string().optional()
			.describe('The App owner'),
	}),
})
	.describe('The information about the application, including app ID, title, version, and other metadata');
export type ApplicationInfoStatus = z.infer<typeof ApplicationInfoStatus>;

export const ClearBrowsingDataRequest = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the cache clear request'),
	types: z.array(z.enum([
		'all',
		'appcache',
		'cache',
		'channelIDs',
		'cookies',
		'fileSystems',
		'indexedDB',
		'localStorage',
		'serviceWorkers',
		'webSQL',
	]))
		.optional()
		.describe('The types of cache to clear'),
})
	.describe('The request to clear the cache of the signage device, including timestamp');
export type ClearBrowsingDataRequest = z.infer<typeof ClearBrowsingDataRequest>;

export const DisableApplicationRequest = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the disable application request'),
	reset: z.boolean().optional()
		.describe('Whether to reset theserver settings to their default values after disabling it'),
})
	.describe('The request to disable an application on the signage device, including timestamp and reset option');
export type DisableApplicationRequest = z.infer<typeof DisableApplicationRequest>;

export const PowerOnOffHistoryStatus = z.object({
	powerOnOffHistory: z.array(z.string())
		.describe('The list of power on/off history timestamps'),
})
	.describe('The power on/off history of the signage device, including timestamps');
export type PowerOnOffHistoryStatus = z.infer<typeof PowerOnOffHistoryStatus>;

export const WebOSVersionStatus = z.object({
	webOSVersion: z.string()
		.describe('The webOS version of the signage device'),
})
	.describe('The webOS version of the signage device');
export type WebOSVersionStatus = z.infer<typeof WebOSVersionStatus>;

// #region State
export const CustomJSState = z.object({
	_clearBrowsingDataRequest: ClearBrowsingDataRequest.optional(),
	_disableApplicationRequest: DisableApplicationRequest.optional(),
});
export type CustomJSState = z.infer<typeof CustomJSState>;
// #endregion

// #region Status
export const CustomJSStatus = z.object({
	applicationInfo: ApplicationInfoStatus.optional(),
	powerOnOffHistory: PowerOnOffHistoryStatus.optional(),
	webOSVersion: WebOSVersionStatus.optional(),
	_debug: z.string().optional()
		.describe('SCAP debug mode output'),
});
export type CustomJSStatus = z.infer<typeof CustomJSStatus>;
// #endregion
