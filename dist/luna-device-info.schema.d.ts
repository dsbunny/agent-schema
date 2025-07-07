import { z } from 'zod/v4';
export declare const BlockedPort: z.ZodObject<{
    port: z.ZodNumber;
    direction: z.ZodEnum<{
        in: "in";
        out: "out";
        all: "all";
    }>;
    protocol: z.ZodEnum<{
        tcp: "tcp";
        udp: "udp";
    }>;
}, {}, {}>;
export type BlockedPort = z.infer<typeof BlockedPort>;
export declare const NetworkCheckupInfo: z.ZodObject<{
    mode: z.ZodEnum<{
        default: "default";
        manual: "manual";
    }>;
    url: z.ZodURL;
}, {}, {}>;
export type NetworkCheckupInfo = z.infer<typeof NetworkCheckupInfo>;
export declare const NetworkInfoState: z.ZodObject<{
    wired: z.ZodObject<{
        enabled: z.ZodBoolean;
        method: z.ZodOptional<z.ZodEnum<{
            manual: "manual";
            dhcp: "dhcp";
        }>>;
        ipAddress: z.ZodOptional<z.ZodString>;
        netmask: z.ZodOptional<z.ZodString>;
        gateway: z.ZodOptional<z.ZodString>;
        dns1: z.ZodOptional<z.ZodString>;
        dns2: z.ZodOptional<z.ZodString>;
    }, {}, {}>;
    wifi: z.ZodObject<{
        method: z.ZodOptional<z.ZodEnum<{
            manual: "manual";
            dhcp: "dhcp";
        }>>;
        ipAddress: z.ZodOptional<z.ZodString>;
        netmask: z.ZodOptional<z.ZodString>;
        gateway: z.ZodOptional<z.ZodString>;
        dns1: z.ZodOptional<z.ZodString>;
        dns2: z.ZodOptional<z.ZodString>;
    }, {}, {}>;
}, {}, {}>;
export type NetworkInfoState = z.infer<typeof NetworkInfoState>;
export declare const NetworkInfoStatus: z.ZodObject<{
    isInternetConnectionAvailable: z.ZodBoolean;
    wired: z.ZodObject<{
        state: z.ZodEnum<{
            connected: "connected";
            disconnected: "disconnected";
        }>;
        interfaceName: z.ZodOptional<z.ZodString>;
        ipAddress: z.ZodOptional<z.ZodString>;
        netmask: z.ZodOptional<z.ZodString>;
        gateway: z.ZodOptional<z.ZodString>;
        onInternet: z.ZodOptional<z.ZodEnum<{
            yes: "yes";
            no: "no";
        }>>;
        dns1: z.ZodOptional<z.ZodString>;
        dns2: z.ZodOptional<z.ZodString>;
        dns3: z.ZodOptional<z.ZodString>;
        dns4: z.ZodOptional<z.ZodString>;
        dns5: z.ZodOptional<z.ZodString>;
        ipv6: z.ZodObject<{
            gateway: z.ZodOptional<z.ZodString>;
            ipAddress: z.ZodOptional<z.ZodString>;
            prefixLength: z.ZodOptional<z.ZodNumber>;
            method: z.ZodOptional<z.ZodEnum<{
                manual: "manual";
                dhcp: "dhcp";
            }>>;
        }, {}, {}>;
    }, {}, {}>;
    wifi: z.ZodObject<{
        state: z.ZodEnum<{
            connected: "connected";
            disconnected: "disconnected";
        }>;
        interfaceName: z.ZodOptional<z.ZodString>;
        ipAddress: z.ZodOptional<z.ZodString>;
        netmask: z.ZodOptional<z.ZodString>;
        gateway: z.ZodOptional<z.ZodString>;
        onInternet: z.ZodOptional<z.ZodEnum<{
            yes: "yes";
            no: "no";
        }>>;
        dns1: z.ZodOptional<z.ZodString>;
        dns2: z.ZodOptional<z.ZodString>;
    }, {}, {}>;
}, {}, {}>;
export type NetworkInfoStatus = z.infer<typeof NetworkInfoStatus>;
export declare const NetworkMacInfo: z.ZodObject<{
    wiredInfo: z.ZodOptional<z.ZodObject<{
        macAddress: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    wifiInfo: z.ZodOptional<z.ZodObject<{
        macAddress: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
}, {}, {}>;
export type NetworkMacInfo = z.infer<typeof NetworkMacInfo>;
export declare const PlatformInfo: z.ZodObject<{
    hardwareVersion: z.ZodString;
    manufacturer: z.ZodString;
    modelName: z.ZodString;
    sdkVersion: z.ZodString;
    serialNumber: z.ZodString;
    firmwareVersion: z.ZodString;
}, {}, {}>;
export type PlatformInfo = z.infer<typeof PlatformInfo>;
export declare const ProxyInfo: z.ZodObject<{
    enabled: z.ZodDefault<z.ZodBoolean>;
    ipAddress: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodNumber>;
    userName: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, {}, {}>;
export type ProxyInfo = z.infer<typeof ProxyInfo>;
export declare const SensorValues: z.ZodObject<{
    backlight: z.ZodNumber;
    checkScreen: z.ZodObject<{
        colorValid: z.ZodBoolean;
        drawRGB: z.ZodNumber;
        hexValue: z.ZodString;
        readRGB: z.ZodNumber;
    }, {}, {}>;
    fan: z.ZodObject<{
        closedLoop: z.ZodBoolean;
        openLoop: z.ZodBoolean;
    }, {}, {}>;
    humidity: z.ZodNumber;
    illuminance: z.ZodNumber;
    rotation: z.ZodEnum<{
        0: "0";
        90: "90";
        180: "180";
        270: "270";
    }>;
    temperature: z.ZodNumber;
}, {}, {}>;
export type SensorValues = z.infer<typeof SensorValues>;
export declare const SystemUsageInfo: z.ZodObject<{
    cpus: z.ZodOptional<z.ZodArray<z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        times: z.ZodObject<{
            user: z.ZodOptional<z.ZodNumber>;
            nice: z.ZodOptional<z.ZodNumber>;
            sys: z.ZodOptional<z.ZodNumber>;
            idle: z.ZodOptional<z.ZodNumber>;
            irq: z.ZodOptional<z.ZodNumber>;
        }, {}, {}>;
    }, {}, {}>>>;
    memory: z.ZodOptional<z.ZodObject<{
        total: z.ZodOptional<z.ZodNumber>;
        free: z.ZodOptional<z.ZodNumber>;
        used: z.ZodOptional<z.ZodNumber>;
        buffer: z.ZodOptional<z.ZodNumber>;
        cached: z.ZodOptional<z.ZodNumber>;
    }, {}, {}>>;
}, {}, {}>;
export type SystemUsageInfo = z.infer<typeof SystemUsageInfo>;
export declare const DeviceInfoState: z.ZodObject<{
    blockedPortList: z.ZodOptional<z.ZodArray<z.ZodObject<{
        port: z.ZodNumber;
        direction: z.ZodEnum<{
            in: "in";
            out: "out";
            all: "all";
        }>;
        protocol: z.ZodEnum<{
            tcp: "tcp";
            udp: "udp";
        }>;
    }, {}, {}>>>;
    networkCheckupInfo: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<{
            default: "default";
            manual: "manual";
        }>;
        url: z.ZodURL;
    }, {}, {}>>;
    networkInfo: z.ZodOptional<z.ZodObject<{
        wired: z.ZodObject<{
            enabled: z.ZodBoolean;
            method: z.ZodOptional<z.ZodEnum<{
                manual: "manual";
                dhcp: "dhcp";
            }>>;
            ipAddress: z.ZodOptional<z.ZodString>;
            netmask: z.ZodOptional<z.ZodString>;
            gateway: z.ZodOptional<z.ZodString>;
            dns1: z.ZodOptional<z.ZodString>;
            dns2: z.ZodOptional<z.ZodString>;
        }, {}, {}>;
        wifi: z.ZodObject<{
            method: z.ZodOptional<z.ZodEnum<{
                manual: "manual";
                dhcp: "dhcp";
            }>>;
            ipAddress: z.ZodOptional<z.ZodString>;
            netmask: z.ZodOptional<z.ZodString>;
            gateway: z.ZodOptional<z.ZodString>;
            dns1: z.ZodOptional<z.ZodString>;
            dns2: z.ZodOptional<z.ZodString>;
        }, {}, {}>;
    }, {}, {}>>;
    proxyInfo: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodDefault<z.ZodBoolean>;
        ipAddress: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodNumber>;
        userName: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
}, {}, {}>;
export type DeviceInfoState = z.infer<typeof DeviceInfoState>;
export declare const DeviceInfoStatus: z.ZodObject<{
    networkInfo: z.ZodOptional<z.ZodObject<{
        isInternetConnectionAvailable: z.ZodBoolean;
        wired: z.ZodObject<{
            state: z.ZodEnum<{
                connected: "connected";
                disconnected: "disconnected";
            }>;
            interfaceName: z.ZodOptional<z.ZodString>;
            ipAddress: z.ZodOptional<z.ZodString>;
            netmask: z.ZodOptional<z.ZodString>;
            gateway: z.ZodOptional<z.ZodString>;
            onInternet: z.ZodOptional<z.ZodEnum<{
                yes: "yes";
                no: "no";
            }>>;
            dns1: z.ZodOptional<z.ZodString>;
            dns2: z.ZodOptional<z.ZodString>;
            dns3: z.ZodOptional<z.ZodString>;
            dns4: z.ZodOptional<z.ZodString>;
            dns5: z.ZodOptional<z.ZodString>;
            ipv6: z.ZodObject<{
                gateway: z.ZodOptional<z.ZodString>;
                ipAddress: z.ZodOptional<z.ZodString>;
                prefixLength: z.ZodOptional<z.ZodNumber>;
                method: z.ZodOptional<z.ZodEnum<{
                    manual: "manual";
                    dhcp: "dhcp";
                }>>;
            }, {}, {}>;
        }, {}, {}>;
        wifi: z.ZodObject<{
            state: z.ZodEnum<{
                connected: "connected";
                disconnected: "disconnected";
            }>;
            interfaceName: z.ZodOptional<z.ZodString>;
            ipAddress: z.ZodOptional<z.ZodString>;
            netmask: z.ZodOptional<z.ZodString>;
            gateway: z.ZodOptional<z.ZodString>;
            onInternet: z.ZodOptional<z.ZodEnum<{
                yes: "yes";
                no: "no";
            }>>;
            dns1: z.ZodOptional<z.ZodString>;
            dns2: z.ZodOptional<z.ZodString>;
        }, {}, {}>;
    }, {}, {}>>;
    networkMacInfo: z.ZodOptional<z.ZodObject<{
        wiredInfo: z.ZodOptional<z.ZodObject<{
            macAddress: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        wifiInfo: z.ZodOptional<z.ZodObject<{
            macAddress: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
    }, {}, {}>>;
    platformInfo: z.ZodOptional<z.ZodObject<{
        hardwareVersion: z.ZodString;
        manufacturer: z.ZodString;
        modelName: z.ZodString;
        sdkVersion: z.ZodString;
        serialNumber: z.ZodString;
        firmwareVersion: z.ZodString;
    }, {}, {}>>;
    sensorValues: z.ZodOptional<z.ZodObject<{
        backlight: z.ZodNumber;
        checkScreen: z.ZodObject<{
            colorValid: z.ZodBoolean;
            drawRGB: z.ZodNumber;
            hexValue: z.ZodString;
            readRGB: z.ZodNumber;
        }, {}, {}>;
        fan: z.ZodObject<{
            closedLoop: z.ZodBoolean;
            openLoop: z.ZodBoolean;
        }, {}, {}>;
        humidity: z.ZodNumber;
        illuminance: z.ZodNumber;
        rotation: z.ZodEnum<{
            0: "0";
            90: "90";
            180: "180";
            270: "270";
        }>;
        temperature: z.ZodNumber;
    }, {}, {}>>;
    systemUsageInfo: z.ZodOptional<z.ZodObject<{
        cpus: z.ZodOptional<z.ZodArray<z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            times: z.ZodObject<{
                user: z.ZodOptional<z.ZodNumber>;
                nice: z.ZodOptional<z.ZodNumber>;
                sys: z.ZodOptional<z.ZodNumber>;
                idle: z.ZodOptional<z.ZodNumber>;
                irq: z.ZodOptional<z.ZodNumber>;
            }, {}, {}>;
        }, {}, {}>>>;
        memory: z.ZodOptional<z.ZodObject<{
            total: z.ZodOptional<z.ZodNumber>;
            free: z.ZodOptional<z.ZodNumber>;
            used: z.ZodOptional<z.ZodNumber>;
            buffer: z.ZodOptional<z.ZodNumber>;
            cached: z.ZodOptional<z.ZodNumber>;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type DeviceInfoStatus = z.infer<typeof DeviceInfoStatus>;
