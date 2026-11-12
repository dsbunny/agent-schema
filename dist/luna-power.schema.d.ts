import * as z from "zod";
export declare const DisplayModeStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"DisplayModeState">;
    '@timestamp': z.ZodISODateTime;
    displayMode: z.ZodEnum<{
        "Screen Off": "Screen Off";
        Active: "Active";
    }>;
}, z.core.$strip>;
export type DisplayModeState = z.infer<typeof DisplayModeStateSchema>;
export declare const DPMWakeupStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"DPMWakeupState">;
    '@timestamp': z.ZodISODateTime;
    dpmSignalType: z.ZodEnum<{
        clock: "clock";
        clockAndData: "clockAndData";
    }>;
}, z.core.$strip>;
export type DPMWakeupState = z.infer<typeof DPMWakeupStateSchema>;
export declare const PMModeStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PMModeState">;
    '@timestamp': z.ZodISODateTime;
    mode: z.ZodEnum<{
        powerOff: "powerOff";
        screenOff: "screenOff";
        screenOffAlways: "screenOffAlways";
        screenOffBacklight: "screenOffBacklight";
        sustainAspectRatio: "sustainAspectRatio";
        networkReady: "networkReady";
    }>;
}, z.core.$strip>;
export type PMModeState = z.infer<typeof PMModeStateSchema>;
export declare const PowerCommandRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PowerCommandRequest">;
    '@timestamp': z.ZodISODateTime;
    powerCommand: z.ZodEnum<{
        powerOff: "powerOff";
        reboot: "reboot";
    }>;
}, z.core.$strip>;
export type PowerCommandRequest = z.infer<typeof PowerCommandRequestSchema>;
export declare const PowerOnDelayStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PowerOnDelayState">;
    '@timestamp': z.ZodISODateTime;
    delayTime: z.ZodNumber;
}, z.core.$strip>;
export type PowerOnDelayState = z.infer<typeof PowerOnDelayStateSchema>;
export declare const WakeOnLanStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"WakeOnLanState">;
    '@timestamp': z.ZodISODateTime;
    wakeOnLan: z.ZodBoolean;
}, z.core.$strip>;
export type WakeOnLanState = z.infer<typeof WakeOnLanStateSchema>;
export declare const PowerStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PowerState">;
    _powerCommandRequest: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"PowerCommandRequest">;
        '@timestamp': z.ZodISODateTime;
        powerCommand: z.ZodEnum<{
            powerOff: "powerOff";
            reboot: "reboot";
        }>;
    }, z.core.$strip>>;
    displayMode: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"DisplayModeState">;
        '@timestamp': z.ZodISODateTime;
        displayMode: z.ZodEnum<{
            "Screen Off": "Screen Off";
            Active: "Active";
        }>;
    }, z.core.$strip>>;
    dpmWakeup: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"DPMWakeupState">;
        '@timestamp': z.ZodISODateTime;
        dpmSignalType: z.ZodEnum<{
            clock: "clock";
            clockAndData: "clockAndData";
        }>;
    }, z.core.$strip>>;
    pmMode: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"PMModeState">;
        '@timestamp': z.ZodISODateTime;
        mode: z.ZodEnum<{
            powerOff: "powerOff";
            screenOff: "screenOff";
            screenOffAlways: "screenOffAlways";
            screenOffBacklight: "screenOffBacklight";
            sustainAspectRatio: "sustainAspectRatio";
            networkReady: "networkReady";
        }>;
    }, z.core.$strip>>;
    powerOnDelay: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"PowerOnDelayState">;
        '@timestamp': z.ZodISODateTime;
        delayTime: z.ZodNumber;
    }, z.core.$strip>>;
    wakeOnLan: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"WakeOnLanState">;
        '@timestamp': z.ZodISODateTime;
        wakeOnLan: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type PowerState = z.infer<typeof PowerStateSchema>;
export declare const PowerStatusSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"PowerStatus">;
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PowerStatus = z.infer<typeof PowerStatusSchema>;
