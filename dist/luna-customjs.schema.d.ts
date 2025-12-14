import * as z from "zod/v4";
export declare const ApplicationInfoStatus: z.ZodObject<{
    appinfo: z.ZodObject<{
        icon: z.ZodString;
        id: z.ZodLiteral<"com.lg.app.signage">;
        main: z.ZodString;
        title: z.ZodString;
        type: z.ZodLiteral<"web">;
        version: z.ZodString;
        allowAudioCapture: z.ZodOptional<z.ZodBoolean>;
        allowVideoCapture: z.ZodOptional<z.ZodBoolean>;
        appDescription: z.ZodOptional<z.ZodString>;
        crossDomainSecurity: z.ZodOptional<z.ZodEnum<{
            low: "low";
            high: "high";
            disable: "disable";
        }>>;
        disableBackHistoryAPI: z.ZodOptional<z.ZodBoolean>;
        inspectable: z.ZodOptional<z.ZodBoolean>;
        largeIcon: z.ZodOptional<z.ZodString>;
        splashBackground: z.ZodOptional<z.ZodString>;
        supportedOrientations: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            Landscape: "Landscape";
            InvertedPortrait: "InvertedPortrait";
            InvertedLandscape: "InvertedLandscape";
            Portrait: "Portrait";
        }>>>;
        useVirtualKeyboard: z.ZodOptional<z.ZodBoolean>;
        vendor: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ApplicationInfoStatus = z.infer<typeof ApplicationInfoStatus>;
export declare const ClearBrowsingDataRequest: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        all: "all";
        appcache: "appcache";
        cache: "cache";
        channelIDs: "channelIDs";
        cookies: "cookies";
        fileSystems: "fileSystems";
        indexedDB: "indexedDB";
        localStorage: "localStorage";
        serviceWorkers: "serviceWorkers";
        webSQL: "webSQL";
    }>>>;
}, z.core.$strip>;
export type ClearBrowsingDataRequest = z.infer<typeof ClearBrowsingDataRequest>;
export declare const DisableApplicationRequest: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    reset: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type DisableApplicationRequest = z.infer<typeof DisableApplicationRequest>;
export declare const PowerOnOffHistoryStatus: z.ZodObject<{
    powerOnOffHistory: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type PowerOnOffHistoryStatus = z.infer<typeof PowerOnOffHistoryStatus>;
export declare const WebOSVersionStatus: z.ZodObject<{
    webOSVersion: z.ZodString;
}, z.core.$strip>;
export type WebOSVersionStatus = z.infer<typeof WebOSVersionStatus>;
export declare const CustomJSState: z.ZodObject<{
    _clearBrowsingDataRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            all: "all";
            appcache: "appcache";
            cache: "cache";
            channelIDs: "channelIDs";
            cookies: "cookies";
            fileSystems: "fileSystems";
            indexedDB: "indexedDB";
            localStorage: "localStorage";
            serviceWorkers: "serviceWorkers";
            webSQL: "webSQL";
        }>>>;
    }, z.core.$strip>>;
    _disableApplicationRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        reset: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CustomJSState = z.infer<typeof CustomJSState>;
export declare const CustomJSStatus: z.ZodObject<{
    applicationInfo: z.ZodOptional<z.ZodObject<{
        appinfo: z.ZodObject<{
            icon: z.ZodString;
            id: z.ZodLiteral<"com.lg.app.signage">;
            main: z.ZodString;
            title: z.ZodString;
            type: z.ZodLiteral<"web">;
            version: z.ZodString;
            allowAudioCapture: z.ZodOptional<z.ZodBoolean>;
            allowVideoCapture: z.ZodOptional<z.ZodBoolean>;
            appDescription: z.ZodOptional<z.ZodString>;
            crossDomainSecurity: z.ZodOptional<z.ZodEnum<{
                low: "low";
                high: "high";
                disable: "disable";
            }>>;
            disableBackHistoryAPI: z.ZodOptional<z.ZodBoolean>;
            inspectable: z.ZodOptional<z.ZodBoolean>;
            largeIcon: z.ZodOptional<z.ZodString>;
            splashBackground: z.ZodOptional<z.ZodString>;
            supportedOrientations: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                Landscape: "Landscape";
                InvertedPortrait: "InvertedPortrait";
                InvertedLandscape: "InvertedLandscape";
                Portrait: "Portrait";
            }>>>;
            useVirtualKeyboard: z.ZodOptional<z.ZodBoolean>;
            vendor: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    powerOnOffHistory: z.ZodOptional<z.ZodObject<{
        powerOnOffHistory: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    webOSVersion: z.ZodOptional<z.ZodObject<{
        webOSVersion: z.ZodString;
    }, z.core.$strip>>;
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CustomJSStatus = z.infer<typeof CustomJSStatus>;
