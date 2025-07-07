import { z } from 'zod/v4';
export declare const ChangeLogoImageRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
    uri: z.ZodString;
}, {}, {}>;
export type ChangeLogoImageRequest = z.infer<typeof ChangeLogoImageRequest>;
export declare const StorageInfo: z.ZodObject<{
    free: z.ZodString;
    total: z.ZodString;
    used: z.ZodString;
    externalMemory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        free: z.ZodString;
        total: z.ZodString;
        used: z.ZodString;
    }, {}, {}>>>;
}, {}, {}>;
export type StorageInfo = z.infer<typeof StorageInfo>;
export declare const USBInfo: z.ZodArray<z.ZodObject<{
    usbName: z.ZodString;
    vendor: z.ZodString;
    product: z.ZodString;
    deviceId: z.ZodOptional<z.ZodString>;
}, {}, {}>>;
export type USBInfo = z.infer<typeof USBInfo>;
export declare const UpgradeApplicationRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
    to: z.ZodEnum<{
        local: "local";
        usb: "usb";
    }>;
    recovery: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodEnum<{
        ipk: "ipk";
        zip: "zip";
    }>;
}, {}, {}>;
export type UpgradeApplicationRequest = z.infer<typeof UpgradeApplicationRequest>;
export declare const UpgradeFirmwareRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
    path: z.ZodString;
}, {}, {}>;
export type UpgradeFirmwareRequest = z.infer<typeof UpgradeFirmwareRequest>;
export declare const FirmwareUpgradeStatus: z.ZodObject<{
    status: z.ZodEnum<{
        idle: "idle";
        downloading: "downloading";
        ready: "ready";
        "in progress": "in progress";
        completed: "completed";
        fail: "fail";
    }>;
    downloadProgress: z.ZodNumber;
    upgradeProgress: z.ZodNumber;
}, {}, {}>;
export type FirmwareUpgradeStatus = z.infer<typeof FirmwareUpgradeStatus>;
export declare const StorageState: z.ZodObject<{
    changeLogoImageRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
        uri: z.ZodString;
    }, {}, {}>>;
    upgradeApplicationRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
        to: z.ZodEnum<{
            local: "local";
            usb: "usb";
        }>;
        recovery: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodEnum<{
            ipk: "ipk";
            zip: "zip";
        }>;
    }, {}, {}>>;
    upgradeFirmwareRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
        path: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type StorageState = z.infer<typeof StorageState>;
export declare const StorageStatus: z.ZodObject<{
    firmwareUpgradeStatus: z.ZodOptional<z.ZodObject<{
        status: z.ZodEnum<{
            idle: "idle";
            downloading: "downloading";
            ready: "ready";
            "in progress": "in progress";
            completed: "completed";
            fail: "fail";
        }>;
        downloadProgress: z.ZodNumber;
        upgradeProgress: z.ZodNumber;
    }, {}, {}>>;
    usbList: z.ZodOptional<z.ZodArray<z.ZodObject<{
        usbName: z.ZodString;
        vendor: z.ZodString;
        product: z.ZodString;
        deviceId: z.ZodOptional<z.ZodString>;
    }, {}, {}>>>;
    storageInfo: z.ZodOptional<z.ZodObject<{
        free: z.ZodString;
        total: z.ZodString;
        used: z.ZodString;
        externalMemory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            free: z.ZodString;
            total: z.ZodString;
            used: z.ZodString;
        }, {}, {}>>>;
    }, {}, {}>>;
}, {}, {}>;
export type StorageStatus = z.infer<typeof StorageStatus>;
