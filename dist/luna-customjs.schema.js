// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { lunaRegistry } from './registry.js';
export const ApplicationInfoStatusSchema = z.object({
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
}).register(lunaRegistry, {
    id: 'ApplicationInfoStatusSchema',
    description: 'The information about the application, including app ID, title, version, and other metadata',
});
export const ClearBrowsingDataRequestSchema = z.object({
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
}).register(lunaRegistry, {
    id: 'ClearBrowsingDataRequestSchema',
    description: 'The request to clear the cache of the signage device, including timestamp',
});
export const DisableApplicationRequestSchema = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the disable application request'),
    reset: z.boolean().optional()
        .describe('Whether to reset theserver settings to their default values after disabling it'),
}).register(lunaRegistry, {
    id: 'DisableApplicationRequestSchema',
    description: 'The request to disable an application on the signage device, including timestamp and reset option',
});
export const PowerOnOffHistoryStatusSchema = z.object({
    powerOnOffHistory: z.array(z.string())
        .describe('The list of power on/off history timestamps'),
}).register(lunaRegistry, {
    id: 'PowerOnOffHistoryStatusSchema',
    description: 'The power on/off history of the signage device, including timestamps',
});
export const WebOSVersionStatusSchema = z.object({
    webOSVersion: z.string()
        .describe('The webOS version of the signage device'),
}).register(lunaRegistry, {
    id: 'WebOSVersionStatusSchema',
    description: 'The webOS version of the signage device',
});
// #region State
export const CustomJSStateSchema = z.object({
    _clearBrowsingDataRequest: ClearBrowsingDataRequestSchema.optional(),
    _disableApplicationRequest: DisableApplicationRequestSchema.optional(),
}).register(lunaRegistry, {
    id: 'CustomJSStateSchema',
    description: 'The state of the CustomJS module, including clear browsing data and disable application requests',
});
// #endregion
// #region Status
export const CustomJSStatusSchema = z.object({
    applicationInfo: ApplicationInfoStatusSchema.optional(),
    powerOnOffHistory: PowerOnOffHistoryStatusSchema.optional(),
    webOSVersion: WebOSVersionStatusSchema.optional(),
    _debug: z.string().optional()
        .describe('SCAP debug mode output'),
}).register(lunaRegistry, {
    id: 'CustomJSStatusSchema',
    description: 'The status of the CustomJS module, including application info, power on/off history, and webOS version',
});
// #endregion
//# sourceMappingURL=luna-customjs.schema.js.map