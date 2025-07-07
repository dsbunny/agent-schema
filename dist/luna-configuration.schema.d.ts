import { z } from 'zod/v4';
export declare const ClearCacheRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type ClearCacheRequest = z.infer<typeof ClearCacheRequest>;
export declare const CurrentTimeState: z.ZodObject<{
    ntp: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    ntpServerAddress: z.ZodOptional<z.ZodString>;
}, {}, {}>;
export type CurrentTimeState = z.infer<typeof CurrentTimeState>;
export declare const Locale: z.ZodObject<{
    language: z.ZodString;
    languageCode: z.ZodString;
    countries: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        specifier: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type Locale = z.infer<typeof Locale>;
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
export declare const RestartApplicationRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
}, {}, {}>;
export type RestartApplicationRequest = z.infer<typeof RestartApplicationRequest>;
export declare const TimeZone: z.ZodObject<{
    continent: z.ZodString;
    country: z.ZodString;
    city: z.ZodString;
}, {}, {}>;
export type TimeZone = z.infer<typeof TimeZone>;
export declare const ConfigurationState: z.ZodObject<{
    clearCacheRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
    }, {}, {}>>;
    currentTime: z.ZodOptional<z.ZodObject<{
        ntp: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        ntpServerAddress: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    masterPinActivated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    OSDLanguage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    OSDLock: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    pictureMode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
        eco: "eco";
        cinema: "cinema";
        expert1: "expert1";
        expert2: "expert2";
        game: "game";
        sports: "sports";
        normal: "normal";
        vivid: "vivid";
    }>>>;
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
    proxyBypassList: z.ZodOptional<z.ZodArray<z.ZodString>>;
    restartApplicationRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
    }, {}, {}>>;
    timeZone: z.ZodOptional<z.ZodObject<{
        continent: z.ZodString;
        country: z.ZodString;
        city: z.ZodString;
    }, {}, {}>>;
    USBLock: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, {}, {}>;
export type ConfigurationState = z.infer<typeof ConfigurationState>;
export declare const ConfigurationStatus: z.ZodObject<{
    currentTime: z.iso.ZodISODateTime;
    localeList: z.ZodArray<z.ZodObject<{
        language: z.ZodString;
        languageCode: z.ZodString;
        countries: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodString;
        }, {}, {}>>;
    }, {}, {}>>;
    timeZoneList: z.ZodArray<z.ZodObject<{
        continent: z.ZodString;
        country: z.ZodString;
        city: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type ConfigurationStatus = z.infer<typeof ConfigurationStatus>;
