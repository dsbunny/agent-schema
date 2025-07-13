import { z } from 'zod/v4';
export declare const ChangeLogoImageRequest: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    uri: z.ZodString;
}, {}, {}>;
export type ChangeLogoImageRequest = z.infer<typeof ChangeLogoImageRequest>;
export declare const StorageSpaceStatus: z.ZodObject<{
    free: z.ZodString;
    total: z.ZodString;
    used: z.ZodString;
    externalMemory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        free: z.ZodString;
        total: z.ZodString;
        used: z.ZodString;
    }, {}, {}>>>;
}, {}, {}>;
export type StorageSpaceStatus = z.infer<typeof StorageSpaceStatus>;
export declare const USBStatus: z.ZodObject<{
    usbList: z.ZodArray<z.ZodObject<{
        usbName: z.ZodString;
        vendor: z.ZodString;
        product: z.ZodString;
        deviceId: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
}, {}, {}>;
export type USBStatus = z.infer<typeof USBStatus>;
export declare const UpgradeApplicationRequest: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
    _timestamp: z.iso.ZodISODateTime;
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
    _changeLogoImageRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        uri: z.ZodString;
    }, {}, {}>>;
    _upgradeApplicationRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
    _upgradeFirmwareRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
    usbInfo: z.ZodOptional<z.ZodObject<{
        usbList: z.ZodArray<z.ZodObject<{
            usbName: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            deviceId: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
    }, {}, {}>>;
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
