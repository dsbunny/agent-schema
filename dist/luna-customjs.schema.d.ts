import { z } from 'zod/v4';
export declare const ApplicationInfo: z.ZodObject<{
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
            disabled: "disabled";
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
    }, {}, {}>;
}, {}, {}>;
export type ApplicationInfo = z.infer<typeof ApplicationInfo>;
export declare const ClearBrowsingDataRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
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
}, {}, {}>;
export type ClearBrowsingDataRequest = z.infer<typeof ClearBrowsingDataRequest>;
export declare const DisableApplicationRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
    reset: z.ZodOptional<z.ZodBoolean>;
}, {}, {}>;
export type DisableApplicationRequest = z.infer<typeof DisableApplicationRequest>;
export declare const PowerOnOffHistory: z.ZodObject<{
    powerOnOffHistory: z.ZodArray<z.ZodString>;
}, {}, {}>;
export type PowerOnOffHistory = z.infer<typeof PowerOnOffHistory>;
export declare const WebOSVersion: z.ZodObject<{
    webOSVersion: z.ZodString;
}, {}, {}>;
export type WebOSVersion = z.infer<typeof WebOSVersion>;
export declare const CustomJSState: z.ZodObject<{
    clearBrowsingDataRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
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
    }, {}, {}>>;
    disableApplicationRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
        reset: z.ZodOptional<z.ZodBoolean>;
    }, {}, {}>>;
}, {}, {}>;
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
                disabled: "disabled";
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
        }, {}, {}>;
    }, {}, {}>>;
    powerOnOffHistory: z.ZodOptional<z.ZodObject<{
        powerOnOffHistory: z.ZodArray<z.ZodString>;
    }, {}, {}>>;
    webOSVersion: z.ZodOptional<z.ZodObject<{
        webOSVersion: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type CustomJSStatus = z.infer<typeof CustomJSStatus>;
