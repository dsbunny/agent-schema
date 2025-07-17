import { z } from 'zod/v4';
export declare const BlockedPort: z.ZodObject<{
    blockedPort: z.ZodNumber;
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
export declare const BlockedPortListState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    blockedPortList: z.ZodArray<z.ZodObject<{
        blockedPort: z.ZodNumber;
        direction: z.ZodEnum<{
            in: "in";
            out: "out";
            all: "all";
        }>;
        protocol: z.ZodEnum<{
            tcp: "tcp";
            udp: "udp";
        }>;
    }, {}, {}>>;
}, {}, {}>;
export type BlockedPortListState = z.infer<typeof BlockedPortListState>;
export declare const NetworkCheckupState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    mode: z.ZodEnum<{
        default: "default";
        manual: "manual";
    }>;
    url: z.ZodOptional<z.ZodURL>;
}, {}, {}>;
export type NetworkCheckupState = z.infer<typeof NetworkCheckupState>;
export declare const NetworkState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
}, {}, {}>;
export type NetworkState = z.infer<typeof NetworkState>;
export declare const NetworkStatus: z.ZodObject<{
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
        ipv6: z.ZodOptional<z.ZodObject<{
            gateway: z.ZodOptional<z.ZodString>;
            ipAddress: z.ZodOptional<z.ZodString>;
            prefixLength: z.ZodOptional<z.ZodNumber>;
            method: z.ZodOptional<z.ZodEnum<{
                manual: "manual";
                dhcp: "dhcp";
            }>>;
        }, {}, {}>>;
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
export type NetworkStatus = z.infer<typeof NetworkStatus>;
export declare const NetworkMacStatus: z.ZodObject<{
    wiredInfo: z.ZodOptional<z.ZodObject<{
        macAddress: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    wifiInfo: z.ZodOptional<z.ZodObject<{
        macAddress: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
}, {}, {}>;
export type NetworkMacStatus = z.infer<typeof NetworkMacStatus>;
export declare const PlatformStatus: z.ZodObject<{
    hardwareVersion: z.ZodString;
    manufacturer: z.ZodString;
    modelName: z.ZodString;
    sdkVersion: z.ZodString;
    serialNumber: z.ZodString;
    firmwareVersion: z.ZodString;
}, {}, {}>;
export type PlatformStatus = z.infer<typeof PlatformStatus>;
export declare const ProxyState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    enabled: z.ZodBoolean;
    ipAddress: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodNumber>;
    userName: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, {}, {}>;
export type ProxyState = z.infer<typeof ProxyState>;
export declare const SensorValuesState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    backlight: z.ZodNumber;
}, {}, {}>;
export type SensorValuesState = z.infer<typeof SensorValuesState>;
export declare const SensorValuesStatus: z.ZodObject<{
    backlight: z.coerce.ZodCoercedNumber;
    checkScreen: z.ZodUnion<[z.ZodObject<{
        colorValid: z.ZodBoolean;
        drawRGB: z.ZodNumber;
        hexValue: z.ZodString;
        readRGB: z.ZodNumber;
    }, {}, {}>, z.ZodLiteral<"Unsupported or Error">]>;
    fan: z.ZodUnion<[z.ZodObject<{
        closedLoop: z.ZodOptional<z.ZodBoolean>;
        openLoop: z.ZodOptional<z.ZodBoolean>;
    }, {}, {}>, z.ZodLiteral<"Unsupported or Error">]>;
    humidity: z.ZodUnion<[z.ZodNumber, z.ZodLiteral<"Unsupported or Error">]>;
    illuminance: z.ZodUnion<[z.ZodNumber, z.ZodLiteral<"Unsupported or Error">]>;
    rotation: z.ZodUnion<[z.ZodEnum<{
        0: "0";
        90: "90";
        180: "180";
        270: "270";
    }>, z.ZodLiteral<"Unsupported or Error">]>;
    temperature: z.ZodNumber;
}, {}, {}>;
export type SensorValuesStatus = z.infer<typeof SensorValuesStatus>;
export declare const SystemUsageStatus: z.ZodObject<{
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
export type SystemUsageStatus = z.infer<typeof SystemUsageStatus>;
export declare const DeviceState: z.ZodObject<{
    blockedPortList: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        blockedPortList: z.ZodArray<z.ZodObject<{
            blockedPort: z.ZodNumber;
            direction: z.ZodEnum<{
                in: "in";
                out: "out";
                all: "all";
            }>;
            protocol: z.ZodEnum<{
                tcp: "tcp";
                udp: "udp";
            }>;
        }, {}, {}>>;
    }, {}, {}>>;
    networkCheckup: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        mode: z.ZodEnum<{
            default: "default";
            manual: "manual";
        }>;
        url: z.ZodOptional<z.ZodURL>;
    }, {}, {}>>;
    network: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
    }, {}, {}>>;
    proxy: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        enabled: z.ZodBoolean;
        ipAddress: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodNumber>;
        userName: z.ZodOptional<z.ZodString>;
        password: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    sensorValues: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        backlight: z.ZodNumber;
    }, {}, {}>>;
}, {}, {}>;
export type DeviceState = z.infer<typeof DeviceState>;
export declare const DeviceStatus: z.ZodObject<{
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
            ipv6: z.ZodOptional<z.ZodObject<{
                gateway: z.ZodOptional<z.ZodString>;
                ipAddress: z.ZodOptional<z.ZodString>;
                prefixLength: z.ZodOptional<z.ZodNumber>;
                method: z.ZodOptional<z.ZodEnum<{
                    manual: "manual";
                    dhcp: "dhcp";
                }>>;
            }, {}, {}>>;
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
        backlight: z.coerce.ZodCoercedNumber;
        checkScreen: z.ZodUnion<[z.ZodObject<{
            colorValid: z.ZodBoolean;
            drawRGB: z.ZodNumber;
            hexValue: z.ZodString;
            readRGB: z.ZodNumber;
        }, {}, {}>, z.ZodLiteral<"Unsupported or Error">]>;
        fan: z.ZodUnion<[z.ZodObject<{
            closedLoop: z.ZodOptional<z.ZodBoolean>;
            openLoop: z.ZodOptional<z.ZodBoolean>;
        }, {}, {}>, z.ZodLiteral<"Unsupported or Error">]>;
        humidity: z.ZodUnion<[z.ZodNumber, z.ZodLiteral<"Unsupported or Error">]>;
        illuminance: z.ZodUnion<[z.ZodNumber, z.ZodLiteral<"Unsupported or Error">]>;
        rotation: z.ZodUnion<[z.ZodEnum<{
            0: "0";
            90: "90";
            180: "180";
            270: "270";
        }>, z.ZodLiteral<"Unsupported or Error">]>;
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
export type DeviceStatus = z.infer<typeof DeviceStatus>;
