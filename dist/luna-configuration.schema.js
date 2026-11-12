// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { lunaRegistry } from './registry.js';
export const ClearCacheRequestSchema = z.object({
    '@type': z.literal('ClearCacheRequest')
        .describe('Type of the clear cache request'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the cache clear request'),
}).register(lunaRegistry, {
    id: 'ClearCacheRequestSchema',
    description: 'The request to clear the cache of the signage device, including timestamp',
});
export const CurrentTimeStateSchema = z.object({
    '@type': z.literal('CurrentTimeState')
        .describe('Type of the current time state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the current time was set'),
    ntp: z.boolean().optional()
        .describe('Whether NTP (Network Time Protocol) is enabled or disabled'),
    // WebOS 4 will default to `us.pool.ntp.org`,
    // WebOS 6 will default to `us.pool.ntp.org`, `uk.pool.ntp.org`, `kr.pool.ntp.org`, `au.pool.ntp.org`
    ntpServerAddress: z.string().optional()
        .describe('The NTP server address (IPv4, IPv6, or domain name)'),
}).register(lunaRegistry, {
    id: 'CurrentTimeStateSchema',
    description: 'The state of the current time configuration of the signage device',
});
export const CurrentTimeStatusSchema = z.object({
    '@type': z.literal('CurrentTimeStatus')
        .describe('Type of the current time status'),
    timestamp: z.iso.datetime()
        .describe('The current local date and time of the signage device'),
}).register(lunaRegistry, {
    id: 'CurrentTimeStatusSchema',
    description: 'The status of the current time configuration of the signage device',
});
export const MasterPinStateSchema = z.object({
    '@type': z.literal('MasterPinState')
        .describe('Type of the master PIN state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the master PIN was set'),
    activated: z.boolean()
        .describe('Whether the master PIN is activated or not'),
}).register(lunaRegistry, {
    id: 'MasterPinStateSchema',
    description: 'The state of the master PIN configuration of the signage device',
});
export const OSDLanguageStateSchema = z.object({
    '@type': z.literal('OSDLanguageState')
        .describe('Type of the OSD language state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the OSD language was set'),
    specifier: z.string()
        .describe('The OSD (On-Screen Display) language specifier in <language-code>-<country-code> format, e.g., "en-US"'),
}).register(lunaRegistry, {
    id: 'OSDLanguageStateSchema',
    description: 'The state of the OSD language configuration of the signage device',
});
export const OSDLockStateSchema = z.object({
    '@type': z.literal('OSDLockState')
        .describe('Type of the OSD lock state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the OSD lock state was set'),
    enabled: z.boolean()
        .describe('Whether the OSD (On-Screen Display) is locked or not'),
}).register(lunaRegistry, {
    id: 'OSDLockStateSchema',
    description: 'The state of the OSD lock configuration of the signage device',
});
export const LocaleSchema = z.object({
    '@type': z.literal('Locale')
        .describe('Type of the locale'),
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
}).register(lunaRegistry, {
    id: 'LocaleSchema',
    description: 'The locale in the format "language (language code) - country (specifier)"',
});
export const LocaleListStatusSchema = z.object({
    '@type': z.literal('LocaleListStatus')
        .describe('Type of the locale list status'),
    localeList: z.array(LocaleSchema)
        .describe('The list of locales supported by the signage device'),
}).register(lunaRegistry, {
    id: 'LocaleListStatusSchema',
    description: 'The status of the list of locales supported by the signage device',
});
export const PictureModeStateSchema = z.object({
    '@type': z.literal('PictureModeState')
        .describe('Type of the picture mode state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the picture mode was set'),
    mode: z.enum([
        'eco', // APS (Auto Power Saving) mode
        'cinema',
        'expert1',
        'expert2',
        'game',
        'sports',
        'normal',
        'vivid',
    ])
        .describe('The picture mode of the agent'),
}).register(lunaRegistry, {
    id: 'PictureModeStateSchema',
    description: 'The state of the picture mode configuration of the signage device',
});
export const PicturePropertyStateSchema = z.object({
    '@type': z.literal('PicturePropertyState')
        .describe('Type of the picture property state'),
    '@timestamp': z.iso.datetime()
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
        'Unsupported', // Not supported by some models
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
}).register(lunaRegistry, {
    id: 'PicturePropertyStateSchema',
    description: 'The state of the picture property configuration of the signage device',
});
export const PropertyStateSchema = z.object({
    '@type': z.literal('PropertyState')
        .describe('Type of the property state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the properties were set'),
    alias: z.string().optional()
        .describe('Displays alias name'),
    operation_mode_after_screen_share: z.string().optional()
        .describe('Launches the app when Screen Sharing exits. A reboot is necessary to apply the changes. A reboot is necessary to apply the changes.'),
    key_delivery_to_simplink: z.string().optional()
        .describe('Enables or disables the delivery of key input to Simplink devices. A reboot is necessary to apply the changes.'),
    cec_device_control: z.string().nullable().optional()
        .describe('Enables or disables CEC (Consumer Electronics Control) device control. A reboot is necessary to apply the changes.'),
}).register(lunaRegistry, {
    id: 'PropertyStateSchema',
    description: 'The state of the property configuration of the signage device',
});
export const ProxyBypassListStateSchema = z.object({
    '@type': z.literal('ProxyBypassListState')
        .describe('Type of the proxy bypass list state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the proxy bypass list was set'),
    urlList: z.array(z.string())
        .describe('The list of proxy bypass wildcard addresses, e.g., "*.example.com"'),
}).register(lunaRegistry, {
    id: 'ProxyBypassListStateSchema',
    description: 'The state of the proxy bypass list configuration of the signage device',
});
export const RestartApplicationRequestSchema = z.object({
    '@type': z.literal('RestartApplicationRequest')
        .describe('Type of the restart application request'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the application restart request'),
}).register(lunaRegistry, {
    id: 'RestartApplicationRequestSchema',
    description: 'The request to restart the application of the signage device, including timestamp',
});
export const ServerPropertyStateSchema = z.object({
    '@type': z.literal('ServerPropertyState')
        .describe('Type of the server property state'),
    '@timestamp': z.iso.datetime()
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
}).register(lunaRegistry, {
    id: 'ServerPropertyStateSchema',
    description: 'The state of the server property configuration of the signage device',
});
export const TimeZoneSchema = z.object({
    '@type': z.literal('TimeZone')
        .describe('Type of the time zone'),
    continent: z.string()
        .describe('The continent of the time zone, e.g., "Europe"'),
    country: z.string()
        .describe('The country of the time zone, e.g., "Germany"'),
    city: z.string()
        .describe('The city of the time zone, e.g., "Berlin"'),
}).register(lunaRegistry, {
    id: 'TimeZoneSchema',
    description: 'The time zone in the format "Continent/Country/City"',
});
export const TimeZoneStateSchema = z.object({
    '@type': z.literal('TimeZoneState')
        .describe('Type of the time zone state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the time zone was set'),
    timeZone: TimeZoneSchema,
}).register(lunaRegistry, {
    id: 'TimeZoneStateSchema',
    description: 'The time zone of the signage device, including timestamp',
});
export const TimeZoneListStatusSchema = z.object({
    '@type': z.literal('TimeZoneListStatus')
        .describe('Type of the time zone list status'),
    timeZone: z.array(TimeZoneSchema)
        .describe('The list of time zones supported by the agent'),
}).register(lunaRegistry, {
    id: 'TimeZoneListStatusSchema',
    description: 'The list of time zones supported by the agent',
});
export const USBLockStateSchema = z.object({
    '@type': z.literal('USBLockState')
        .describe('Type of the USB lock state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the USB lock state was set'),
    enabled: z.boolean()
        .describe('Whether the USB ports are locked or not'),
}).register(lunaRegistry, {
    id: 'USBLockStateSchema',
    description: 'The USB lock status of the signage device',
});
// #region State
export const ConfigurationStateSchema = z.object({
    '@type': z.literal('ConfigurationState')
        .describe('Type of the configuration state'),
    _clearCacheRequest: ClearCacheRequestSchema.optional(),
    _restartApplicationRequest: RestartApplicationRequestSchema.optional(),
    currentTime: CurrentTimeStateSchema.optional(),
    masterPin: MasterPinStateSchema.optional(),
    OSDLanguage: OSDLanguageStateSchema.optional(),
    OSDLock: OSDLockStateSchema.optional(),
    pictureMode: PictureModeStateSchema.optional(),
    pictureProperty: PicturePropertyStateSchema.optional(),
    property: PropertyStateSchema.optional(),
    proxyBypassList: ProxyBypassListStateSchema.optional(),
    serverProperty: ServerPropertyStateSchema.optional(),
    timeZone: TimeZoneStateSchema.optional(),
    USBLock: USBLockStateSchema.optional(),
}).register(lunaRegistry, {
    id: 'ConfigurationStateSchema',
    description: 'The configuration state of the signage device',
});
// #endregion
// #region Status
export const ConfigurationStatusSchema = z.object({
    '@type': z.literal('ConfigurationStatus')
        .describe('Type of the configuration status'),
    currentTime: CurrentTimeStatusSchema.optional()
        .describe('The local date and time of the signage device'),
    localeList: LocaleListStatusSchema.optional()
        .describe('The list of locales supported by the signage device'),
    timeZoneList: TimeZoneListStatusSchema.optional()
        .describe('The list of time zones supported by the signage device'),
    _debug: z.string().optional()
        .describe('SCAP debug mode output'),
}).register(lunaRegistry, {
    id: 'ConfigurationStatusSchema',
    description: 'The configuration status of the signage device',
});
// #endregion
//# sourceMappingURL=luna-configuration.schema.js.map