import * as z from "zod";
export declare const ClearCacheRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ClearCacheRequest">;
    '@timestamp': z.ZodISODateTime;
}, z.core.$strip>;
export type ClearCacheRequest = z.infer<typeof ClearCacheRequestSchema>;
export declare const CurrentTimeStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CurrentTimeState">;
    '@timestamp': z.ZodISODateTime;
    ntp: z.ZodOptional<z.ZodBoolean>;
    ntpServerAddress: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CurrentTimeState = z.infer<typeof CurrentTimeStateSchema>;
export declare const CurrentTimeStatusSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"CurrentTimeStatus">;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type CurrentTimeStatus = z.infer<typeof CurrentTimeStatusSchema>;
export declare const MasterPinStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"MasterPinState">;
    '@timestamp': z.ZodISODateTime;
    activated: z.ZodBoolean;
}, z.core.$strip>;
export type MasterPinState = z.infer<typeof MasterPinStateSchema>;
export declare const OSDLanguageStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"OSDLanguageState">;
    '@timestamp': z.ZodISODateTime;
    specifier: z.ZodString;
}, z.core.$strip>;
export type OSDLanguageState = z.infer<typeof OSDLanguageStateSchema>;
export declare const OSDLockStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"OSDLockState">;
    '@timestamp': z.ZodISODateTime;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type OSDLockState = z.infer<typeof OSDLockStateSchema>;
export declare const LocaleSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"Locale">;
    language: z.ZodString;
    languageCode: z.ZodString;
    countries: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        specifier: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Locale = z.infer<typeof LocaleSchema>;
export declare const LocaleListStatusSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"LocaleListStatus">;
    localeList: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"Locale">;
        language: z.ZodString;
        languageCode: z.ZodString;
        countries: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type LocaleListStatus = z.infer<typeof LocaleListStatusSchema>;
export declare const PictureModeStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PictureModeState">;
    '@timestamp': z.ZodISODateTime;
    mode: z.ZodEnum<{
        eco: "eco";
        cinema: "cinema";
        expert1: "expert1";
        expert2: "expert2";
        game: "game";
        sports: "sports";
        normal: "normal";
        vivid: "vivid";
    }>;
}, z.core.$strip>;
export type PictureModeState = z.infer<typeof PictureModeStateSchema>;
export declare const PicturePropertyStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PicturePropertyState">;
    '@timestamp': z.ZodISODateTime;
    backlight: z.ZodOptional<z.ZodNumber>;
    contrast: z.ZodOptional<z.ZodNumber>;
    brightness: z.ZodOptional<z.ZodNumber>;
    sharpness: z.ZodOptional<z.ZodNumber>;
    hSharpness: z.ZodOptional<z.ZodNumber>;
    vSharpness: z.ZodOptional<z.ZodNumber>;
    color: z.ZodOptional<z.ZodNumber>;
    tint: z.ZodOptional<z.ZodNumber>;
    colorTemperature: z.ZodOptional<z.ZodNumber>;
    dynamicContrast: z.ZodOptional<z.ZodEnum<{
        off: "off";
        low: "low";
        medium: "medium";
        high: "high";
    }>>;
    superResolution: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        off: "off";
        low: "low";
        medium: "medium";
        high: "high";
        Unsupported: "Unsupported";
    }>>>;
    colorGamut: z.ZodOptional<z.ZodEnum<{
        normal: "normal";
        extended: "extended";
    }>>;
    dynamicColor: z.ZodOptional<z.ZodEnum<{
        off: "off";
        low: "low";
        medium: "medium";
        high: "high";
    }>>;
    noiseReduction: z.ZodOptional<z.ZodEnum<{
        off: "off";
        low: "low";
        medium: "medium";
        high: "high";
        auto: "auto";
    }>>;
    mpegNoiseReduction: z.ZodOptional<z.ZodEnum<{
        off: "off";
        low: "low";
        medium: "medium";
        high: "high";
        auto: "auto";
    }>>;
    blackLevel: z.ZodOptional<z.ZodEnum<{
        low: "low";
        high: "high";
    }>>;
    gamma: z.ZodOptional<z.ZodEnum<{
        low: "low";
        medium: "medium";
        high: "high";
        high3: "high3";
    }>>;
}, z.core.$strip>;
export type PicturePropertyState = z.infer<typeof PicturePropertyStateSchema>;
export declare const PropertyStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PropertyState">;
    '@timestamp': z.ZodISODateTime;
    alias: z.ZodOptional<z.ZodString>;
    operation_mode_after_screen_share: z.ZodOptional<z.ZodString>;
    key_delivery_to_simplink: z.ZodOptional<z.ZodString>;
    cec_device_control: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type PropertyState = z.infer<typeof PropertyStateSchema>;
export declare const ProxyBypassListStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ProxyBypassListState">;
    '@timestamp': z.ZodISODateTime;
    urlList: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ProxyBypassListState = z.infer<typeof ProxyBypassListStateSchema>;
export declare const RestartApplicationRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"RestartApplicationRequest">;
    '@timestamp': z.ZodISODateTime;
}, z.core.$strip>;
export type RestartApplicationRequest = z.infer<typeof RestartApplicationRequestSchema>;
export declare const ServerPropertyStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ServerPropertyState">;
    '@timestamp': z.ZodISODateTime;
    serverIp: z.ZodString;
    serverPort: z.ZodNumber;
    secureConnection: z.ZodBoolean;
    appLaunchMode: z.ZodEnum<{
        local: "local";
        remote: "remote";
        usb: "usb";
    }>;
    appType: z.ZodOptional<z.ZodEnum<{
        IPK: "IPK";
        ZIP: "ZIP";
    }>>;
    fqdnMode: z.ZodBoolean;
    fqdnAddr: z.ZodString;
    appLaunchDeviceId: z.ZodOptional<z.ZodString>;
    autoSet: z.ZodOptional<z.ZodEnum<{
        off: "off";
        on: "on";
    }>>;
}, z.core.$strip>;
export type ServerPropertyState = z.infer<typeof ServerPropertyStateSchema>;
export declare const TimeZoneSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TimeZone">;
    continent: z.ZodString;
    country: z.ZodString;
    city: z.ZodString;
}, z.core.$strip>;
export type TimeZone = z.infer<typeof TimeZoneSchema>;
export declare const TimeZoneStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TimeZoneState">;
    '@timestamp': z.ZodISODateTime;
    timeZone: z.ZodObject<{
        '@type': z.ZodLiteral<"TimeZone">;
        continent: z.ZodString;
        country: z.ZodString;
        city: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TimeZoneState = z.infer<typeof TimeZoneStateSchema>;
export declare const TimeZoneListStatusSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TimeZoneListStatus">;
    timeZone: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"TimeZone">;
        continent: z.ZodString;
        country: z.ZodString;
        city: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TimeZoneListStatus = z.infer<typeof TimeZoneListStatusSchema>;
export declare const USBLockStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"USBLockState">;
    '@timestamp': z.ZodISODateTime;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type USBLockState = z.infer<typeof USBLockStateSchema>;
export declare const ConfigurationStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ConfigurationState">;
    _clearCacheRequest: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"ClearCacheRequest">;
        '@timestamp': z.ZodISODateTime;
    }, z.core.$strip>>;
    _restartApplicationRequest: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"RestartApplicationRequest">;
        '@timestamp': z.ZodISODateTime;
    }, z.core.$strip>>;
    currentTime: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"CurrentTimeState">;
        '@timestamp': z.ZodISODateTime;
        ntp: z.ZodOptional<z.ZodBoolean>;
        ntpServerAddress: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    masterPin: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"MasterPinState">;
        '@timestamp': z.ZodISODateTime;
        activated: z.ZodBoolean;
    }, z.core.$strip>>;
    OSDLanguage: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"OSDLanguageState">;
        '@timestamp': z.ZodISODateTime;
        specifier: z.ZodString;
    }, z.core.$strip>>;
    OSDLock: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"OSDLockState">;
        '@timestamp': z.ZodISODateTime;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    pictureMode: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"PictureModeState">;
        '@timestamp': z.ZodISODateTime;
        mode: z.ZodEnum<{
            eco: "eco";
            cinema: "cinema";
            expert1: "expert1";
            expert2: "expert2";
            game: "game";
            sports: "sports";
            normal: "normal";
            vivid: "vivid";
        }>;
    }, z.core.$strip>>;
    pictureProperty: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"PicturePropertyState">;
        '@timestamp': z.ZodISODateTime;
        backlight: z.ZodOptional<z.ZodNumber>;
        contrast: z.ZodOptional<z.ZodNumber>;
        brightness: z.ZodOptional<z.ZodNumber>;
        sharpness: z.ZodOptional<z.ZodNumber>;
        hSharpness: z.ZodOptional<z.ZodNumber>;
        vSharpness: z.ZodOptional<z.ZodNumber>;
        color: z.ZodOptional<z.ZodNumber>;
        tint: z.ZodOptional<z.ZodNumber>;
        colorTemperature: z.ZodOptional<z.ZodNumber>;
        dynamicContrast: z.ZodOptional<z.ZodEnum<{
            off: "off";
            low: "low";
            medium: "medium";
            high: "high";
        }>>;
        superResolution: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            off: "off";
            low: "low";
            medium: "medium";
            high: "high";
            Unsupported: "Unsupported";
        }>>>;
        colorGamut: z.ZodOptional<z.ZodEnum<{
            normal: "normal";
            extended: "extended";
        }>>;
        dynamicColor: z.ZodOptional<z.ZodEnum<{
            off: "off";
            low: "low";
            medium: "medium";
            high: "high";
        }>>;
        noiseReduction: z.ZodOptional<z.ZodEnum<{
            off: "off";
            low: "low";
            medium: "medium";
            high: "high";
            auto: "auto";
        }>>;
        mpegNoiseReduction: z.ZodOptional<z.ZodEnum<{
            off: "off";
            low: "low";
            medium: "medium";
            high: "high";
            auto: "auto";
        }>>;
        blackLevel: z.ZodOptional<z.ZodEnum<{
            low: "low";
            high: "high";
        }>>;
        gamma: z.ZodOptional<z.ZodEnum<{
            low: "low";
            medium: "medium";
            high: "high";
            high3: "high3";
        }>>;
    }, z.core.$strip>>;
    property: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"PropertyState">;
        '@timestamp': z.ZodISODateTime;
        alias: z.ZodOptional<z.ZodString>;
        operation_mode_after_screen_share: z.ZodOptional<z.ZodString>;
        key_delivery_to_simplink: z.ZodOptional<z.ZodString>;
        cec_device_control: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>;
    proxyBypassList: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"ProxyBypassListState">;
        '@timestamp': z.ZodISODateTime;
        urlList: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    serverProperty: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"ServerPropertyState">;
        '@timestamp': z.ZodISODateTime;
        serverIp: z.ZodString;
        serverPort: z.ZodNumber;
        secureConnection: z.ZodBoolean;
        appLaunchMode: z.ZodEnum<{
            local: "local";
            remote: "remote";
            usb: "usb";
        }>;
        appType: z.ZodOptional<z.ZodEnum<{
            IPK: "IPK";
            ZIP: "ZIP";
        }>>;
        fqdnMode: z.ZodBoolean;
        fqdnAddr: z.ZodString;
        appLaunchDeviceId: z.ZodOptional<z.ZodString>;
        autoSet: z.ZodOptional<z.ZodEnum<{
            off: "off";
            on: "on";
        }>>;
    }, z.core.$strip>>;
    timeZone: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"TimeZoneState">;
        '@timestamp': z.ZodISODateTime;
        timeZone: z.ZodObject<{
            '@type': z.ZodLiteral<"TimeZone">;
            continent: z.ZodString;
            country: z.ZodString;
            city: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    USBLock: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"USBLockState">;
        '@timestamp': z.ZodISODateTime;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ConfigurationState = z.infer<typeof ConfigurationStateSchema>;
export declare const ConfigurationStatusSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ConfigurationStatus">;
    currentTime: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"CurrentTimeStatus">;
        timestamp: z.ZodISODateTime;
    }, z.core.$strip>>;
    localeList: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"LocaleListStatus">;
        localeList: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"Locale">;
            language: z.ZodString;
            languageCode: z.ZodString;
            countries: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                specifier: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    timeZoneList: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"TimeZoneListStatus">;
        timeZone: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"TimeZone">;
            continent: z.ZodString;
            country: z.ZodString;
            city: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ConfigurationStatus = z.infer<typeof ConfigurationStatusSchema>;
//# sourceMappingURL=luna-configuration.schema.d.ts.map