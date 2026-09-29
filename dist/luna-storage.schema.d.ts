import * as z from "zod/v4";
export declare const ChangeLogoImageRequestSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    uri: z.ZodString;
}, z.core.$strip>;
export type ChangeLogoImageRequest = z.infer<typeof ChangeLogoImageRequestSchema>;
export declare const StorageSpaceStatusSchema: z.ZodObject<{
    free: z.ZodCoercedNumber<unknown>;
    total: z.ZodCoercedNumber<unknown>;
    used: z.ZodCoercedNumber<unknown>;
    externalMemory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        free: z.ZodCoercedNumber<unknown>;
        total: z.ZodCoercedNumber<unknown>;
        used: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type StorageSpaceStatus = z.infer<typeof StorageSpaceStatusSchema>;
export declare const USBStatusSchema: z.ZodObject<{
    usbList: z.ZodArray<z.ZodObject<{
        usbName: z.ZodString;
        vendor: z.ZodString;
        product: z.ZodString;
        deviceId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type USBStatus = z.infer<typeof USBStatusSchema>;
export declare const UpgradeApplicationRequestSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    to: z.ZodEnum<{
        local: "local";
        usb: "usb";
    }>;
    recovery: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodEnum<{
        ipk: "ipk";
        zip: "zip";
    }>;
}, z.core.$strip>;
export type UpgradeApplicationRequest = z.infer<typeof UpgradeApplicationRequestSchema>;
export declare const UpgradeFirmwareRequestSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    uri: z.ZodURL;
}, z.core.$strip>;
export type UpgradeFirmwareRequest = z.infer<typeof UpgradeFirmwareRequestSchema>;
export declare const FirmwareUpgradeStatusSchema: z.ZodObject<{
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
}, z.core.$strip>;
export type FirmwareUpgradeStatus = z.infer<typeof FirmwareUpgradeStatusSchema>;
export declare const StorageStateSchema: z.ZodObject<{
    _changeLogoImageRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        uri: z.ZodString;
    }, z.core.$strip>>;
    _upgradeApplicationRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        to: z.ZodEnum<{
            local: "local";
            usb: "usb";
        }>;
        recovery: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodEnum<{
            ipk: "ipk";
            zip: "zip";
        }>;
    }, z.core.$strip>>;
    _upgradeFirmwareRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        uri: z.ZodURL;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type StorageState = z.infer<typeof StorageStateSchema>;
export declare const StorageStatusSchema: z.ZodObject<{
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
    }, z.core.$strip>>;
    usbInfo: z.ZodOptional<z.ZodObject<{
        usbList: z.ZodArray<z.ZodObject<{
            usbName: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            deviceId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    storageInfo: z.ZodOptional<z.ZodObject<{
        free: z.ZodCoercedNumber<unknown>;
        total: z.ZodCoercedNumber<unknown>;
        used: z.ZodCoercedNumber<unknown>;
        externalMemory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            free: z.ZodCoercedNumber<unknown>;
            total: z.ZodCoercedNumber<unknown>;
            used: z.ZodCoercedNumber<unknown>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type StorageStatus = z.infer<typeof StorageStatusSchema>;
