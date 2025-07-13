import { z } from 'zod/v4';
export declare const ClearCacheRequest: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type ClearCacheRequest = z.infer<typeof ClearCacheRequest>;
export declare const CurrentTimeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
export declare const MasterPinState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    activated: z.ZodBoolean;
}, {}, {}>;
export type MasterPinState = z.infer<typeof MasterPinState>;
export declare const OSDLanguageState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    specifier: z.ZodString;
}, {}, {}>;
export type OSDLanguageState = z.infer<typeof OSDLanguageState>;
export declare const OSDLockState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    enabled: z.ZodBoolean;
}, {}, {}>;
export type OSDLockState = z.infer<typeof OSDLockState>;
export declare const Locale: z.ZodObject<{
    language: z.ZodString;
    languageCode: z.ZodString;
    countries: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        specifier: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type Locale = z.infer<typeof Locale>;
export declare const LocaleListStatus: z.ZodObject<{
    localeList: z.ZodArray<z.ZodObject<{
        language: z.ZodString;
        languageCode: z.ZodString;
        countries: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodString;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type LocaleListStatus = z.infer<typeof LocaleListStatus>;
export declare const PictureModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
export type PictureModeState = z.infer<typeof PictureModeState>;
export declare const PicturePropertyState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
export type PicturePropertyState = z.infer<typeof PicturePropertyState>;
export declare const PropertyState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    alias: z.ZodOptional<z.ZodString>;
    operation_mode_after_screen_share: z.ZodOptional<z.ZodString>;
    key_delivery_to_simplink: z.ZodOptional<z.ZodString>;
    cec_device_control: z.ZodOptional<z.ZodString>;
}, {}, {}>;
export type PropertyState = z.infer<typeof PropertyState>;
export declare const ProxyBypassListState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    urlList: z.ZodArray<z.ZodString>;
}, {}, {}>;
export type ProxyBypassListState = z.infer<typeof ProxyBypassListState>;
export declare const RestartApplicationRequest: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type RestartApplicationRequest = z.infer<typeof RestartApplicationRequest>;
export declare const ServerPropertyState: z.ZodObject<{
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
export type ServerPropertyState = z.infer<typeof ServerPropertyState>;
export declare const TimeZone: z.ZodObject<{
    continent: z.ZodString;
    country: z.ZodString;
    city: z.ZodString;
}, {}, {}>;
export type TimeZone = z.infer<typeof TimeZone>;
export declare const TimeZoneState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    continent: z.ZodString;
    country: z.ZodString;
    city: z.ZodString;
}, {}, {}>;
export type TimeZoneState = z.infer<typeof TimeZoneState>;
export declare const TimeZoneListStatus: z.ZodObject<{
    timeZone: z.ZodArray<z.ZodObject<{
        continent: z.ZodString;
        country: z.ZodString;
        city: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type TimeZoneListStatus = z.infer<typeof TimeZoneListStatus>;
export declare const USBLockState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    enabled: z.ZodBoolean;
}, {}, {}>;
export type USBLockState = z.infer<typeof USBLockState>;
export declare const ConfigurationState: z.ZodObject<{
    _clearCacheRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
    }, {}, {}>>;
    _restartApplicationRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
    }, {}, {}>>;
    currentTime: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        ntp: z.ZodOptional<z.ZodBoolean>;
        ntpServerAddress: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    masterPin: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        activated: z.ZodBoolean;
    }, {}, {}>>;
    OSDLanguage: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        specifier: z.ZodString;
    }, {}, {}>>;
    OSDLock: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        enabled: z.ZodBoolean;
    }, {}, {}>>;
    pictureMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
        _timestamp: z.iso.ZodISODateTime;
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
        _timestamp: z.iso.ZodISODateTime;
        alias: z.ZodOptional<z.ZodString>;
        operation_mode_after_screen_share: z.ZodOptional<z.ZodString>;
        key_delivery_to_simplink: z.ZodOptional<z.ZodString>;
        cec_device_control: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    proxyBypassList: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        urlList: z.ZodArray<z.ZodString>;
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
        _timestamp: z.iso.ZodISODateTime;
        continent: z.ZodString;
        country: z.ZodString;
        city: z.ZodString;
    }, {}, {}>>;
    USBLock: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
