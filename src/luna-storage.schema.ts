// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const ChangeLogoImageRequest = z.object({
	timestamp: z.iso.datetime()
		.describe('The timestamp of the logo image change request'),
	uri: z.string()
		.describe('The URI of the new logo image to be set, e.g., "file://internal/logo.png"'),
})
	.describe('The request to change the logo image, including timestamp and URI of the new logo image');
export type ChangeLogoImageRequest = z.infer<typeof ChangeLogoImageRequest>;

export const StorageSpaceStatus = z.object({
	free: z.string()
		.describe('The free storage space in KB'),
	total: z.string()
		.describe('The total storage space in KB'),
	used: z.string()
		.describe('The used storage space in KB'),
	externalMemory: z.record(z.string(), z.object({
		free: z.string()
			.describe('The free storage space in KB of the external memory'),
		total: z.string()
			.describe('The total storage space in KB of the external memory'),
		used: z.string()
			.describe('The used storage space in KB of the external memory'),
	})).optional()
		.describe('The external memory storage information, if available'),
})
	.describe('The storage information of the device, including free, total, and used storage space');
export type StorageSpaceStatus = z.infer<typeof StorageSpaceStatus>;

export const USBStatus = z.object({
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

})
	.describe('The list of USB devices connected to the agent, including name, vendor, product, and device ID');
export type USBStatus = z.infer<typeof USBStatus>;

export const UpgradeApplicationRequest = z.object({
	timestamp: z.iso.datetime()
		.describe('The timestamp of the application upgrade request'),
	to: z.enum(['local', 'usb'])
		.describe('The target storage to store the new app.'),
	recovery: z.boolean().optional()
		.describe('Indicates whether to use the recovery mode or not.'),
	type: z.enum(['ipk', 'zip'])
		.describe('Indicates the type of app this method is handling.'),
})
	.describe('The request to upgrade the application, including timestamp and URL of the application');
export type UpgradeApplicationRequest = z.infer<typeof UpgradeApplicationRequest>;

export const UpgradeFirmwareRequest = z.object({
	timestamp: z.iso.datetime()
		.describe('The timestamp of the firmware upgrade request'),
	path: z.string()
		.describe('The path of the firmware file to be upgraded, e.g., "file://internal/test.epk"'),
})
	.describe('The request to upgrade the firmware, including timestamp and path of the firmware file');
export type UpgradeFirmwareRequest = z.infer<typeof UpgradeFirmwareRequest>;

export const FirmwareUpgradeStatus = z.object({
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
})
	.describe('The firmware upgrade status, including status and download progress');
export type FirmwareUpgradeStatus = z.infer<typeof FirmwareUpgradeStatus>;

// #region State
export const StorageState = z.object({
	// Skip `removeApplicationRequest` as a running application cannot remove itself.
	_changeLogoImageRequest: ChangeLogoImageRequest.optional(),
	_upgradeApplicationRequest: UpgradeApplicationRequest.optional(),
	_upgradeFirmwareRequest: UpgradeFirmwareRequest.optional(),
})
	.describe('The storage information of the device, including firmware and app details');
export type StorageState = z.infer<typeof StorageState>;
// #endregion

// #region Status
export const StorageStatus = z.object({
	firmwareUpgradeStatus: FirmwareUpgradeStatus.optional(),
	usbInfo: USBStatus.optional(),
	storageInfo: StorageSpaceStatus.optional(),
});
export type StorageStatus = z.infer<typeof StorageStatus>;
