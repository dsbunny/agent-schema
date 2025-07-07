import { z } from 'zod/v4';
export declare const PowerCommandRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
    powerCommand: z.ZodEnum<{
        reboot: "reboot";
        powerOff: "powerOff";
    }>;
}, {}, {}>;
export type PowerCommandRequest = z.infer<typeof PowerCommandRequest>;
export declare const PowerState: z.ZodObject<{
    delayTime: z.ZodOptional<z.ZodNumber>;
    displayMode: z.ZodOptional<z.ZodEnum<{
        "Screen Off": "Screen Off";
        Active: "Active";
    }>>;
    dpmSignalType: z.ZodOptional<z.ZodEnum<{
        clock: "clock";
        clockAndData: "clockAndData";
    }>>;
    mode: z.ZodOptional<z.ZodEnum<{
        powerOff: "powerOff";
        screenOff: "screenOff";
        screenOffAlways: "screenOffAlways";
        screenOffBacklight: "screenOffBacklight";
        sustainAspectRation: "sustainAspectRation";
        networkReady: "networkReady";
    }>>;
    powerCommandRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
        powerCommand: z.ZodEnum<{
            reboot: "reboot";
            powerOff: "powerOff";
        }>;
    }, {}, {}>>;
    wakeOnLan: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, {}, {}>;
export type PowerState = z.infer<typeof PowerState>;
