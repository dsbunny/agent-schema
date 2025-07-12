import { z } from 'zod/v4';
export declare const ClearCacheRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type ClearCacheRequest = z.infer<typeof ClearCacheRequest>;
export declare const CurrentTimeState: z.ZodObject<{
    ntp: z.ZodOptional<z.ZodBoolean>;
    ntpServerAddress: z.ZodOptional<z.ZodString>;
}, {}, {}>;
export type CurrentTimeState = z.infer<typeof CurrentTimeState>;
export declare const CurrentTimeStatus: z.ZodObject<{
    year: z.ZodNumber;
    month: z.ZodNumber;
    day: z.ZodNumber;
    hour: z.ZodNumber;
    minute: z.ZodNumber;
    sec: z.ZodNumber;
}, {}, {}>;
export type CurrentTimeStatus = z.infer<typeof CurrentTimeStatus>;
export declare const MasterPinStatus: z.ZodObject<{
    activated: z.ZodBoolean;
}, {}, {}>;
export type MasterPinStatus = z.infer<typeof MasterPinStatus>;
export declare const OSDLanguage: z.ZodObject<{
    specifier: z.ZodString;
}, {}, {}>;
export type OSDLanguage = z.infer<typeof OSDLanguage>;
export declare const OSDLock: z.ZodObject<{
    enabled: z.ZodBoolean;
}, {}, {}>;
export type OSDLock = z.infer<typeof OSDLock>;
export declare const Locale: z.ZodObject<{
    language: z.ZodString;
    languageCode: z.ZodString;
    countries: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        specifier: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type Locale = z.infer<typeof Locale>;
export declare const LocaleList: z.ZodObject<{
    localeList: z.ZodArray<z.ZodObject<{
        language: z.ZodString;
        languageCode: z.ZodString;
        countries: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodString;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type LocaleList = z.infer<typeof LocaleList>;
export declare const PictureMode: z.ZodObject<{
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
}, {}, {}>;
export type PictureMode = z.infer<typeof PictureMode>;
export declare const PictureProperty: z.ZodObject<{
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
    superResolution: z.ZodOptional<z.ZodEnum<{
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
}, {}, {}>;
export type PictureProperty = z.infer<typeof PictureProperty>;
export declare const Property: z.ZodObject<{
    alias: z.ZodOptional<z.ZodString>;
    operation_mode_after_screen_share: z.ZodOptional<z.ZodString>;
    key_delivery_to_simplink: z.ZodOptional<z.ZodString>;
    cec_device_control: z.ZodOptional<z.ZodString>;
}, {}, {}>;
export type Property = z.infer<typeof Property>;
export declare const ProxyBypassList: z.ZodObject<{
    urlList: z.ZodArray<z.ZodString>;
}, {}, {}>;
export type ProxyBypassList = z.infer<typeof ProxyBypassList>;
export declare const RestartApplicationRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type RestartApplicationRequest = z.infer<typeof RestartApplicationRequest>;
export declare const ServerProperty: z.ZodObject<{
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
}, {}, {}>;
export type ServerProperty = z.infer<typeof ServerProperty>;
export declare const TimeZone: z.ZodObject<{
    continent: z.ZodString;
    country: z.ZodString;
    city: z.ZodString;
}, {}, {}>;
export type TimeZone = z.infer<typeof TimeZone>;
export declare const TimeZoneList: z.ZodObject<{
    timeZone: z.ZodArray<z.ZodObject<{
        continent: z.ZodString;
        country: z.ZodString;
        city: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type TimeZoneList = z.infer<typeof TimeZoneList>;
export declare const USBLock: z.ZodObject<{
    enabled: z.ZodBoolean;
}, {}, {}>;
export type USBLock = z.infer<typeof USBLock>;
export declare const ConfigurationState: z.ZodObject<{
    clearCacheRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
    }, {}, {}>>;
    currentTime: z.ZodOptional<z.ZodObject<{
        ntp: z.ZodOptional<z.ZodBoolean>;
        ntpServerAddress: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    masterPinStatus: z.ZodOptional<z.ZodObject<{
        activated: z.ZodBoolean;
    }, {}, {}>>;
    OSDLanguage: z.ZodOptional<z.ZodObject<{
        specifier: z.ZodString;
    }, {}, {}>>;
    OSDLock: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, {}, {}>>;
    pictureMode: z.ZodOptional<z.ZodObject<{
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
    }, {}, {}>>;
    pictureProperty: z.ZodOptional<z.ZodObject<{
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
        superResolution: z.ZodOptional<z.ZodEnum<{
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
    }, {}, {}>>;
    property: z.ZodOptional<z.ZodObject<{
        alias: z.ZodOptional<z.ZodString>;
        operation_mode_after_screen_share: z.ZodOptional<z.ZodString>;
        key_delivery_to_simplink: z.ZodOptional<z.ZodString>;
        cec_device_control: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    proxyBypassList: z.ZodOptional<z.ZodObject<{
        urlList: z.ZodArray<z.ZodString>;
    }, {}, {}>>;
    restartApplicationRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
    }, {}, {}>>;
    serverProperty: z.ZodOptional<z.ZodObject<{
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
    }, {}, {}>>;
    timeZone: z.ZodOptional<z.ZodObject<{
        continent: z.ZodString;
        country: z.ZodString;
        city: z.ZodString;
    }, {}, {}>>;
    USBLock: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, {}, {}>>;
}, {}, {}>;
export type ConfigurationState = z.infer<typeof ConfigurationState>;
export declare const ConfigurationStatus: z.ZodObject<{
    currentTime: z.ZodOptional<z.ZodObject<{
        year: z.ZodNumber;
        month: z.ZodNumber;
        day: z.ZodNumber;
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        sec: z.ZodNumber;
    }, {}, {}>>;
    localeList: z.ZodOptional<z.ZodObject<{
        localeList: z.ZodArray<z.ZodObject<{
            language: z.ZodString;
            languageCode: z.ZodString;
            countries: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                specifier: z.ZodString;
            }, {}, {}>>;
        }, {}, {}>>;
    }, {}, {}>>;
    timeZoneList: z.ZodOptional<z.ZodObject<{
        timeZone: z.ZodArray<z.ZodObject<{
            continent: z.ZodString;
            country: z.ZodString;
            city: z.ZodString;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type ConfigurationStatus = z.infer<typeof ConfigurationStatus>;
