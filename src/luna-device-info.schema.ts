// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const BlockedPort = z.object({
	port: z.number().int().min(1).max(65535)
		.describe('The blocked port number, e.g., 80'),
	direction: z.enum(['in', 'out', 'all'])
		.describe('The direction of the blocked port, e.g., "in", "out", or "all"'),
	protocol: z.enum(['tcp', 'udp'])
		.describe('The protocol of the blocked port, e.g., "tcp" or "udp"'),
})
	.describe('The blocked port in the format "port/direction/protocol"');
export type BlockedPort = z.infer<typeof BlockedPort>;

export const NetworkCheckupInfo = z.object({
	mode: z.enum(['default', 'manual'])
		.describe('The network checkup mode, either "default" or "manual"'),
	url: z.url()
		.describe('The URL for the network checkup, e.g., "https://example.com/checkup"'),
})
	.describe('The network checkup information, including mode and URL');
export type NetworkCheckupInfo = z.infer<typeof NetworkCheckupInfo>;

export const NetworkInfoState = z.object({
	wired: z.object({
		enabled: z.boolean()
			.describe('Whether the wired connection is enabled or not'),
		method: z.enum(['dhcp', 'manual']).optional()
			.describe('The method of the wired connection, either "dhcp" or "manual"'),
		ipAddress: z.string().optional()
			.describe('The IP address of the wired connection, e.g., "192.168.0.10"'),
		netmask: z.string().optional()
			.describe('The netmask of the wired connection, e.g., "255.255.255.0"'),
		gateway: z.string().optional()
			.describe('The gateway of the wired connection, e.g., "192.168.0.1"'),
		dns1: z.string().optional()
			.describe('The primary DNS server of the wired connection'),
		dns2: z.string().optional()
			.describe('The secondary DNS server of the wired connection'),
	}).describe('The wired network connection information'),
	wifi: z.object({
		method: z.enum(['dhcp', 'manual']).optional()
			.describe('The method of the Wi-Fi connection, either "dhcp" or "manual"'),
		ipAddress: z.string().optional()
			.describe('The IP address of the Wi-Fi connection, e.g., "192.168.0.10"'),
		netmask: z.string().optional()
			.describe('The netmask of the Wi-Fi connection, e.g., "255.255.255.0"'),
		gateway: z.string().optional()
			.describe('The gateway of the Wi-Fi connection, e.g., "192.168.0.1"'),
		dns1: z.string().optional()
			.describe('The primary DNS server of the Wi-Fi connection'),
		dns2: z.string().optional()
			.describe('The secondary DNS server of the Wi-Fi connection'),
	}).describe('The Wi-Fi network connection information'),
});
export type NetworkInfoState = z.infer<typeof NetworkInfoState>;

export const NetworkInfoStatus = z.object({
	isInternetConnectionAvailable: z.boolean()
		.describe('Whether the internet connection is available or not'),
	wired: z.object({
		state: z.enum(['connected', 'disconnected'])
			.describe('Indicates whether the wired connection is connected or disconnected'),
		interfaceName: z.string().optional()
			.describe('The name of the wired network interface, e.g., "eth0"'),
		ipAddress: z.string().optional()
			.describe('The IP address of the wired connection, e.g., "192.168.0.10"'),
		netmask: z.string().optional()
			.describe('The netmask of the wired connection, e.g., "255.255.255.0"'),
		gateway: z.string().optional()
			.describe('The gateway of the wired connection, e.g., "192.168.0.1"'),
		onInternet: z.enum(['yes', 'no']).optional()
			.describe('Indicates whether the wired connection is on the internet or not'),
		dns1: z.string().optional()
			.describe('The primary DNS server of the wired connection'),
		dns2: z.string().optional()
			.describe('The secondary DNS server of the wired connection'),
		dns3: z.string().optional()
			.describe('The tertiary DNS server of the wired connection'),
		dns4: z.string().optional()
			.describe('The quaternary DNS server of the wired connection'),
		dns5: z.string().optional()
			.describe('The quinary DNS server of the wired connection'),
		ipv6: z.object({
			gateway: z.string().optional()
				.describe('The IPv6 gateway of the wired connection'),
			ipAddress: z.string().optional()
				.describe('The IPv6 address of the wired connection'),
			prefixLength: z.number().int().min(0).max(128).optional()
				.describe('The IPv6 prefix length of the wired connection'),
			method: z.enum(['dhcp', 'manual']).optional()
				.describe('The method of the IPv6 connection, either "dhcp" or "manual"'),
		}).describe('The IPv6 network connection information'),
	}).describe('The wired network connection information'),
	wifi: z.object({
		state: z.enum(['connected', 'disconnected'])
			.describe('Indicates whether the Wi-Fi connection is connected or disconnected'),
		interfaceName: z.string().optional()
			.describe('The name of the Wi-Fi network interface, e.g., "wlan0"'),
		ipAddress: z.string().optional()
			.describe('The IP address of the Wi-Fi connection, e.g., "192.168.0.10"'),
		netmask: z.string().optional()
			.describe('The netmask of the Wi-Fi connection, e.g., "255.255.255.0"'),
		gateway: z.string().optional()
			.describe('The gateway of the Wi-Fi connection, e.g., "192.168.0.1"'),
		onInternet: z.enum(['yes', 'no']).optional()
			.describe('Indicates whether the Wi-Fi connection is on the internet or not'),
		dns1: z.string().optional()
			.describe('The primary DNS server of the Wi-Fi connection'),
		dns2: z.string().optional()
			.describe('The secondary DNS server of the Wi-Fi connection'),
	}).describe('The Wi-Fi network connection information'),
})
	.describe('The network information of the agent, including wired and Wi-Fi connections');
export type NetworkInfoStatus = z.infer<typeof NetworkInfoStatus>;

export const NetworkMacInfo = z.object({
	wiredInfo: z.object({
		macAddress: z.string().optional()
			.describe('The MAC address of the wired network interface, e.g., "00:1A:2B:3C:4D:5E"'),
	}).optional(),
	wifiInfo: z.object({
		macAddress: z.string().optional()
			.describe('The MAC address of the Wi-Fi network interface, e.g., "00:1A:2B:3C:4D:5F"'),
	}).optional(),
})
	.describe('The MAC address information of the network interfaces, including wired and Wi-Fi');
export type NetworkMacInfo = z.infer<typeof NetworkMacInfo>;

export const PlatformInfo = z.object({
	hardwareVersion: z.string()
		.describe('The hardware version of the signage device'),
	manufacturer: z.string()
		.describe('The manufacturer of the signage device, e.g., "LGE"'),
	modelName: z.string()
		.describe('The model name of the signage device, e.g., "WEBOS1"'),
	sdkVersion: z.string()
		.describe('The SDK version of the signage device, e.g., "WEBOS1"'),
	serialNumber: z.string()
		.describe('The serial number of the signage device, e.g., "WEBOS1"'),
	firmwareVersion: z.string()
		.describe('The firmware version of the signage device, e.g., "WEBOS1"'),
})
	.describe('The platform information of the signage device, including hardware version, manufacturer, model name, SDK version, serial number, and firmware version');
export type PlatformInfo = z.infer<typeof PlatformInfo>;

export const ProxyInfo = z.object({
	enabled: z.boolean().default(false)
		.describe('Whether the proxy is enabled or not'),
	ipAddress: z.string().optional()
		.describe('The IP address of the proxy server, e.g. "163.231.22.43"'),
	port: z.number().int().min(1).max(65535).optional()
		.describe('The port number of the proxy server, e.g. 8080'),
	userName: z.string().optional()  // Write-only field for security reasons.
		.describe('The username for the proxy server, e.g. "user"'),
	password: z.string().optional()  // Write-only field for security reasons.
		.describe('The password for the proxy server, e.g. "password"'),
})
	.describe('The proxy information of the agent, including whether it is enabled, the IP address, and the port number');
export type ProxyInfo = z.infer<typeof ProxyInfo>;

export const SensorValues = z.object({
	backlight: z.number().int().min(0).max(100)
		.describe('The backlight level of the display. Range: [0–100]'),
	checkScreen: z.object({
		colorValid: z.boolean()
			.describe('Indicates whether the RGB value of the color displayed on the screen is the same as measured by the sensor.'),
		drawRGB: z.number().int()
			.describe('The RGB value of the color displayed on the screen, e.g., 0xFF0000 for red.'),
		hexValue: z.string()
			.describe('The hex value of the color displayed on the screen, e.g., "#FF0000" for red.'),
		readRGB: z.number().int()
			.describe('The RGB value of the color measured by the sensor, e.g., 0xFF0000 for red.'),
	}).describe('The screen color check information'),
	fan: z.object({
		closedLoop: z.boolean()
			.describe('Indicates the current state of the closed-loop fan.'),
		openLoop: z.boolean()
			.describe('Indicates the current state of the open-loop fan.'),
	}).describe('The fan information of the agent'),
	humidity: z.number().int().min(0).max(100)
		.describe('The humidity level of the agent. Range: [0–100]'),
	illuminance: z.number().int().min(0).max(100000)
		.describe('The illuminance level of the agent. Range: [0–100000]'),
	rotation: z.enum(['0', '90', '180', '270'])
		.describe('The rotation of the agent, either "0", "90", "180", or "270" degrees'),
	temperature: z.number().int().min(-50).max(100)
		.describe('The temperature level of the agent. Range: [-50–100]'),
})
	.describe('The sensor values of the agent, including backlight level and screen color check information');
export type SensorValues = z.infer<typeof SensorValues>;

export const SystemUsageInfo = z.object({
	cpus: z.array(z.object({
		model: z.string().optional()  // Not supported in WebOS 6.0 and later.
			.describe('The CPU model name'),
		times: z.object({
			user: z.number().optional()
				.describe('The CPU time spent on user space (milliseconds)'),
			nice: z.number().optional()
				.describe('The CPU time spent on low priority processes (milliseconds)'),
			sys: z.number().optional()
				.describe('The CPU time spent on kernel space (milliseconds)'),
			idle: z.number().optional()
				.describe('The CPU time spent idle (milliseconds)'),
			irq: z.number().optional()
				.describe('The CPU time spent handling interrupts (milliseconds)'),
		}),
	})).optional(),
	memory: z.object({
		total: z.number().optional()
			.describe('Total memory space (bytes)'),
		free: z.number().optional()
			.describe('Free memory space (bytes)'),
		used: z.number().optional()
			.describe('Used memory space (bytes)'),
		buffer: z.number().optional()
			.describe('Buffered memory space (bytes)'),
		cached: z.number().optional()
			.describe('Cached memory space (bytes)'),
	}).optional(),
})
	.describe('The system usage information of the agent, including CPU and memory usage');
export type SystemUsageInfo = z.infer<typeof SystemUsageInfo>;

// #region State
export const DeviceInfoState = z.object({
	// Skip `beaconInfo` as deprecated.
	blockedPortList: z.array(BlockedPort).max(30).optional()
		.describe('The list of blocked ports, maximum 30 entries'),
	// Skip `eddystoneInfo` due to security concerns and narrow use cases.
	// Skip `HDBaseTMode` due to narrow use cases.
	// Skip `iBeaconInfo` due to security concerns and narrow use cases.
	networkCheckupInfo: NetworkCheckupInfo.optional(),
	networkInfo: NetworkInfoState.optional(),
	proxyInfo: ProxyInfo.optional(),
	// Skip `softApInfo` due to security concerns.
	// Skip `wps` due to security concerns and narrow use cases.
});
export type DeviceInfoState = z.infer<typeof DeviceInfoState>;
// #endregion

// #region Status
export const DeviceInfoStatus = z.object({
	networkInfo: NetworkInfoStatus.optional(),
	networkMacInfo: NetworkMacInfo.optional(),
	platformInfo: PlatformInfo.optional(),
	sensorValues: SensorValues.optional(),
	systemUsageInfo: SystemUsageInfo.optional(),
	// Skip `wifiList` due to security concerns.
});
export type DeviceInfoStatus = z.infer<typeof DeviceInfoStatus>;
// #endregion
