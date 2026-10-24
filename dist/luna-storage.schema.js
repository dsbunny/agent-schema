// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { lunaRegistry } from './registry.js';
export const ChangeLogoImageRequestSchema = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the logo image change request'),
    uri: z.string()
        .describe('The URI of the new logo image to be set, e.g., "file://internal/logo.png"'),
}).register(lunaRegistry, {
    id: 'ChangeLogoImageRequestSchema',
    description: 'The request to change the logo image, including timestamp and URI of the new logo image',
});
export const StorageSpaceStatusSchema = z.object({
    free: z.coerce.number().positive()
        .describe('The free storage space in KB'),
    total: z.coerce.number().positive()
        .describe('The total storage space in KB'),
    used: z.coerce.number().positive()
        .describe('The used storage space in KB'),
    externalMemory: z.record(z.string(), z.object({
        free: z.coerce.number().positive()
            .describe('The free storage space in KB of the external memory'),
        total: z.coerce.number().positive()
            .describe('The total storage space in KB of the external memory'),
        used: z.coerce.number().positive()
            .describe('The used storage space in KB of the external memory'),
    })).optional()
        .describe('The external memory storage information, if available'),
}).register(lunaRegistry, {
    id: 'StorageSpaceStatusSchema',
    description: 'The storage information of the device, including free, total, and used storage space',
});
export const USBStatusSchema = z.object({
    usbList: z.array(z.object({
        usbName: z.string()
            .describe('The name of the USB device, e.g., "usb1"'),
        vendor: z.string()
            .describe('The vendor of the USB device, e.g., "SanDisk"'),
        product: z.string()
            .describe('The product name of the USB device, e.g., "Cruzer Blade"'),
        deviceId: z.string().optional()
            .describe('The device ID of the USB device, e.g., "1234567890"'),
    })),
}).register(lunaRegistry, {
    id: 'USBStatusSchema',
    description: 'The list of USB devices connected to the agent, including name, vendor, product, and device ID',
});
export const UpgradeApplicationRequestSchema = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the application upgrade request'),
    to: z.enum(['local', 'usb'])
        .describe('The target storage to store the new app.'),
    recovery: z.boolean().optional()
        .describe('Indicates whether to use the recovery mode or not.'),
    type: z.enum(['ipk', 'zip'])
        .describe('Indicates the type of app this method is handling.'),
}).register(lunaRegistry, {
    id: 'UpgradeApplicationRequestSchema',
    description: 'The request to upgrade the application, including timestamp and URL of the application',
});
export const UpgradeFirmwareRequestSchema = z.object({
    _timestamp: z.iso.datetime()
        .describe('The timestamp of the firmware upgrade request'),
    //path: z.string()
    //	.describe('The path of the firmware file to be upgraded, e.g., "file://internal/test.epk"'),
    // Pre-processed with `downloadFirmware` to generate a local path.
    uri: z.url()
        .describe('The URI of the firmware file to be upgraded, e.g., "https://example.com/firmware.epk"'),
}).register(lunaRegistry, {
    id: 'UpgradeFirmwareRequestSchema',
    description: 'The request to upgrade the firmware, including timestamp and path of the firmware file',
});
export const FirmwareUpgradeStatusSchema = z.object({
    status: z.enum([
        'idle',
        'downloading',
        'ready',
        'in progress',
        'completed',
        'fail',
    ])
        .describe('The status of the firmware upgrade'),
    downloadProgress: z.number().int().min(0).max(100)
        .describe('The download progress of the firmware upgrade in percentage'),
    upgradeProgress: z.number().int().min(0).max(100)
        .describe('The upgrade progress of the firmware in percentage'),
}).register(lunaRegistry, {
    id: 'FirmwareUpgradeStatusSchema',
    description: 'The firmware upgrade status, including status and download progress',
});
// #region State
export const StorageStateSchema = z.object({
    // Skip `removeApplicationRequest` as a running application cannot remove itself.
    _changeLogoImageRequest: ChangeLogoImageRequestSchema.optional(),
    _upgradeApplicationRequest: UpgradeApplicationRequestSchema.optional(),
    _upgradeFirmwareRequest: UpgradeFirmwareRequestSchema.optional(),
}).register(lunaRegistry, {
    id: 'StorageStateSchema',
    description: 'The storage information of the device, including firmware and app details',
});
// #endregion
// #region Status
export const StorageStatusSchema = z.object({
    firmwareUpgradeStatus: FirmwareUpgradeStatusSchema.optional(),
    usbInfo: USBStatusSchema.optional(),
    storageInfo: StorageSpaceStatusSchema.optional(),
    _debug: z.string().optional()
        .describe('SCAP debug mode output'),
}).register(lunaRegistry, {
    id: 'StorageStatusSchema',
    description: 'The status of the storage system of the device, including firmware upgrade status, USB info, and storage info',
});
//# sourceMappingURL=luna-storage.schema.js.map