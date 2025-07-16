import { z } from 'zod/v4';
export declare const DisplayModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    displayMode: z.ZodEnum<{
        "Screen Off": "Screen Off";
        Active: "Active";
    }>;
}, {}, {}>;
export type DisplayModeState = z.infer<typeof DisplayModeState>;
export declare const DPMWakeupState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    dpmSignalType: z.ZodEnum<{
        clock: "clock";
        clockAndData: "clockAndData";
    }>;
}, {}, {}>;
export type DPMWakeupState = z.infer<typeof DPMWakeupState>;
export declare const PMModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    mode: z.ZodEnum<{
        powerOff: "powerOff";
        screenOff: "screenOff";
        screenOffAlways: "screenOffAlways";
        screenOffBacklight: "screenOffBacklight";
        sustainAspectRatio: "sustainAspectRatio";
        networkReady: "networkReady";
    }>;
}, {}, {}>;
export type PMModeState = z.infer<typeof PMModeState>;
export declare const PowerCommandRequest: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    powerCommand: z.ZodEnum<{
        powerOff: "powerOff";
        reboot: "reboot";
    }>;
}, {}, {}>;
export type PowerCommandRequest = z.infer<typeof PowerCommandRequest>;
export declare const PowerOnDelayState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    delayTime: z.ZodNumber;
}, {}, {}>;
export type PowerOnDelayState = z.infer<typeof PowerOnDelayState>;
export declare const WakeOnLanState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    wakeOnLan: z.ZodBoolean;
}, {}, {}>;
export type WakeOnLanState = z.infer<typeof WakeOnLanState>;
export declare const PowerState: z.ZodObject<{
    _powerCommandRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        powerCommand: z.ZodEnum<{
            powerOff: "powerOff";
            reboot: "reboot";
        }>;
    }, {}, {}>>;
    displayMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        displayMode: z.ZodEnum<{
            "Screen Off": "Screen Off";
            Active: "Active";
        }>;
    }, {}, {}>>;
    dpmWakeup: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        dpmSignalType: z.ZodEnum<{
            clock: "clock";
            clockAndData: "clockAndData";
        }>;
    }, {}, {}>>;
    pmMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        mode: z.ZodEnum<{
            powerOff: "powerOff";
            screenOff: "screenOff";
            screenOffAlways: "screenOffAlways";
            screenOffBacklight: "screenOffBacklight";
            sustainAspectRatio: "sustainAspectRatio";
            networkReady: "networkReady";
        }>;
    }, {}, {}>>;
    powerOnDelay: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        delayTime: z.ZodNumber;
    }, {}, {}>>;
    wakeOnLan: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        wakeOnLan: z.ZodBoolean;
    }, {}, {}>>;
}, {}, {}>;
export type PowerState = z.infer<typeof PowerState>;
