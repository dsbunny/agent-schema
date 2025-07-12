import { z } from 'zod/v4';
export declare const DisplayMode: z.ZodObject<{
    displayMode: z.ZodEnum<{
        "Screen Off": "Screen Off";
        Active: "Active";
    }>;
}, {}, {}>;
export type DisplayMode = z.infer<typeof DisplayMode>;
export declare const DPMWakeup: z.ZodObject<{
    dpmSignalType: z.ZodEnum<{
        clock: "clock";
        clockAndData: "clockAndData";
    }>;
}, {}, {}>;
export type DPMWakeup = z.infer<typeof DPMWakeup>;
export declare const PMMode: z.ZodObject<{
    mode: z.ZodEnum<{
        powerOff: "powerOff";
        screenOff: "screenOff";
        screenOffAlways: "screenOffAlways";
        screenOffBacklight: "screenOffBacklight";
        sustainAspectRation: "sustainAspectRation";
        networkReady: "networkReady";
    }>;
}, {}, {}>;
export type PMMode = z.infer<typeof PMMode>;
export declare const PowerCommandRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
    powerCommand: z.ZodEnum<{
        powerOff: "powerOff";
        reboot: "reboot";
    }>;
}, {}, {}>;
export type PowerCommandRequest = z.infer<typeof PowerCommandRequest>;
export declare const PowerOnDelay: z.ZodObject<{
    delayTime: z.ZodNumber;
}, {}, {}>;
export type PowerOnDelay = z.infer<typeof PowerOnDelay>;
export declare const WakeOnLan: z.ZodObject<{
    wakeOnLan: z.ZodOptional<z.ZodBoolean>;
}, {}, {}>;
export type WakeOnLan = z.infer<typeof WakeOnLan>;
export declare const PowerState: z.ZodObject<{
    displayMode: z.ZodOptional<z.ZodObject<{
        displayMode: z.ZodEnum<{
            "Screen Off": "Screen Off";
            Active: "Active";
        }>;
    }, {}, {}>>;
    dpmWakeup: z.ZodOptional<z.ZodObject<{
        dpmSignalType: z.ZodEnum<{
            clock: "clock";
            clockAndData: "clockAndData";
        }>;
    }, {}, {}>>;
    pmMode: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<{
            powerOff: "powerOff";
            screenOff: "screenOff";
            screenOffAlways: "screenOffAlways";
            screenOffBacklight: "screenOffBacklight";
            sustainAspectRation: "sustainAspectRation";
            networkReady: "networkReady";
        }>;
    }, {}, {}>>;
    powerCommandRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
        powerCommand: z.ZodEnum<{
            powerOff: "powerOff";
            reboot: "reboot";
        }>;
    }, {}, {}>>;
    powerOnDelay: z.ZodOptional<z.ZodObject<{
        delayTime: z.ZodNumber;
    }, {}, {}>>;
    wakeOnLan: z.ZodOptional<z.ZodObject<{
        wakeOnLan: z.ZodOptional<z.ZodBoolean>;
    }, {}, {}>>;
}, {}, {}>;
export type PowerState = z.infer<typeof PowerState>;
