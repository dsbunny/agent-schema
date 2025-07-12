import { z } from 'zod/v4';
export declare const CaptureScreenRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
    thumbnail: z.ZodOptional<z.ZodBoolean>;
    imgResolution: z.ZodOptional<z.ZodEnum<{
        thumbnail: "thumbnail";
        FHD: "FHD";
        HD: "HD";
    }>>;
}, {}, {}>;
export type CaptureScreenRequest = z.infer<typeof CaptureScreenRequest>;
export declare const CaptureScreenStatus: z.ZodObject<{
    data: z.ZodBase64;
    size: z.ZodNumber;
    encoding: z.ZodLiteral<"Base64">;
}, {}, {}>;
export type CaptureScreenStatus = z.infer<typeof CaptureScreenStatus>;
export declare const CheckScreen: z.ZodObject<{
    checkScreen: z.ZodBoolean;
}, {}, {}>;
export type CheckScreen = z.infer<typeof CheckScreen>;
export declare const DigitalAudioInputMode: z.ZodObject<{
    digitalAudioInput: z.ZodEnum<{
        audioIn: "audioIn";
        hdmi: "hdmi";
    }>;
}, {}, {}>;
export type DigitalAudioInputMode = z.infer<typeof DigitalAudioInputMode>;
export declare const FailoverMode: z.ZodObject<{
    mode: z.ZodEnum<{
        off: "off";
        auto: "auto";
        manual: "manual";
    }>;
    priority: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, {}, {}>;
export type FailoverMode = z.infer<typeof FailoverMode>;
export declare const IntelligentAuto: z.ZodObject<{
    enabled: z.ZodBoolean;
}, {}, {}>;
export type IntelligentAuto = z.infer<typeof IntelligentAuto>;
export declare const IsmMethod: z.ZodObject<{
    ismMethod: z.ZodEnum<{
        COLORWASH: "COLORWASH";
        INVERSION: "INVERSION";
        NORMAL: "NORMAL";
        ORBITER: "ORBITER";
        USERIMAGE: "USERIMAGE";
        USERVIDEO: "USERVIDEO";
        WASHINGBAR: "WASHINGBAR";
        WHITEWASH: "WHITEWASH";
    }>;
}, {}, {}>;
export type IsmMethod = z.infer<typeof IsmMethod>;
export declare const LanDaisyChain: z.ZodObject<{
    enabled: z.ZodBoolean;
}, {}, {}>;
export type LanDaisyChain = z.infer<typeof LanDaisyChain>;
export declare const MirrorMode: z.ZodObject<{
    mode: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, {}, {}>;
export type MirrorMode = z.infer<typeof MirrorMode>;
export declare const NoSignalImageMode: z.ZodObject<{
    noSignalImageMode: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, {}, {}>;
export type NoSignalImageMode = z.infer<typeof NoSignalImageMode>;
export declare const PortraitMode: z.ZodObject<{
    portraitMode: z.ZodEnum<{
        off: "off";
        90: "90";
        ___undefined___: "___undefined___";
    }>;
}, {}, {}>;
export type PortraitMode = z.infer<typeof PortraitMode>;
export declare const PowerSaveMode: z.ZodObject<{
    ses: z.ZodBoolean;
    dpmMode: z.ZodEnum<{
        off: "off";
        "5sec": "5sec";
        "10sec": "10sec";
        "15sec": "15sec";
        "1min": "1min";
        "3min": "3min";
        "5min": "5min";
        "10min": "10min";
    }>;
    automaticStandby: z.ZodEnum<{
        off: "off";
        "4 hours": "4 hours";
    }>;
    do15MinOff: z.ZodBoolean;
}, {}, {}>;
export type PowerSaveMode = z.infer<typeof PowerSaveMode>;
export declare const QuietMode: z.ZodObject<{
    mode: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, {}, {}>;
export type QuietMode = z.infer<typeof QuietMode>;
export declare const ResetRequest: z.ZodObject<{
    timestamp: z.iso.ZodISODateTime;
    mode: z.ZodEnum<{
        softReset: "softReset";
        factoryReset: "factoryReset";
    }>;
}, {}, {}>;
export type ResetRequest = z.infer<typeof ResetRequest>;
export declare const RS232CConfiguration: z.ZodObject<{
    mode: z.ZodLiteral<0 | 1>;
    port: z.ZodOptional<z.ZodNumber>;
    baudRate: z.ZodOptional<z.ZodLiteral<0 | 1024000 | 110 | 115200 | 1200 | 128000 | 14400 | 19200 | 230400 | 2400 | 256000 | 300 | 38400 | 4800 | 512000 | 57600 | 600 | 768000 | 921600 | 9600>>;
    dataBit: z.ZodOptional<z.ZodLiteral<0 | 8 | 7>>;
    parity: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
    stopBit: z.ZodOptional<z.ZodLiteral<0 | 1 | 2>>;
    flowControl: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
    rxTimeoutInMs: z.ZodOptional<z.ZodNumber>;
}, {}, {}>;
export type RS232CConfiguration = z.infer<typeof RS232CConfiguration>;
export declare const SimplinkStatus: z.ZodObject<{
    simplinkEnable: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, {}, {}>;
export type SimplinkStatus = z.infer<typeof SimplinkStatus>;
export declare const TileInfo: z.ZodObject<{
    enabled: z.ZodBoolean;
    row: z.ZodNumber;
    column: z.ZodNumber;
    tileId: z.ZodNumber;
    naturalMode: z.ZodBoolean;
}, {}, {}>;
export type TileInfo = z.infer<typeof TileInfo>;
export declare const UsageData: z.ZodObject<{
    uptime: z.ZodNumber;
    totalUsed: z.ZodNumber;
}, {}, {}>;
export type UsageData = z.infer<typeof UsageData>;
export declare const UsagePermission: z.ZodObject<{
    remoteKeyOperationMode: z.ZodEnum<{
        normal: "normal";
        blockAll: "blockAll";
        usePwrOnly: "usePwrOnly";
    }>;
    localKeyOperationMode: z.ZodEnum<{
        normal: "normal";
        blockAll: "blockAll";
        usePwrOnly: "usePwrOnly";
    }>;
}, {}, {}>;
export type UsagePermission = z.infer<typeof UsagePermission>;
export declare const SignageState: z.ZodObject<{
    captureScreenRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
        thumbnail: z.ZodOptional<z.ZodBoolean>;
        imgResolution: z.ZodOptional<z.ZodEnum<{
            thumbnail: "thumbnail";
            FHD: "FHD";
            HD: "HD";
        }>>;
    }, {}, {}>>;
    checkScreen: z.ZodOptional<z.ZodObject<{
        checkScreen: z.ZodBoolean;
    }, {}, {}>>;
    digitalAudioInput: z.ZodOptional<z.ZodObject<{
        digitalAudioInput: z.ZodEnum<{
            audioIn: "audioIn";
            hdmi: "hdmi";
        }>;
    }, {}, {}>>;
    failoverMode: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<{
            off: "off";
            auto: "auto";
            manual: "manual";
        }>;
        priority: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, {}, {}>>;
    intelligentAuto: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, {}, {}>>;
    ismMethod: z.ZodOptional<z.ZodObject<{
        ismMethod: z.ZodEnum<{
            COLORWASH: "COLORWASH";
            INVERSION: "INVERSION";
            NORMAL: "NORMAL";
            ORBITER: "ORBITER";
            USERIMAGE: "USERIMAGE";
            USERVIDEO: "USERVIDEO";
            WASHINGBAR: "WASHINGBAR";
            WHITEWASH: "WHITEWASH";
        }>;
    }, {}, {}>>;
    lanDaisyChain: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, {}, {}>>;
    mirrorMode: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, {}, {}>>;
    noSignalImageMode: z.ZodOptional<z.ZodObject<{
        noSignalImageMode: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, {}, {}>>;
    portraitMode: z.ZodOptional<z.ZodObject<{
        portraitMode: z.ZodEnum<{
            off: "off";
            90: "90";
            ___undefined___: "___undefined___";
        }>;
    }, {}, {}>>;
    powerSaveMode: z.ZodOptional<z.ZodObject<{
        ses: z.ZodBoolean;
        dpmMode: z.ZodEnum<{
            off: "off";
            "5sec": "5sec";
            "10sec": "10sec";
            "15sec": "15sec";
            "1min": "1min";
            "3min": "3min";
            "5min": "5min";
            "10min": "10min";
        }>;
        automaticStandby: z.ZodEnum<{
            off: "off";
            "4 hours": "4 hours";
        }>;
        do15MinOff: z.ZodBoolean;
    }, {}, {}>>;
    quietMode: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, {}, {}>>;
    resetRequest: z.ZodOptional<z.ZodObject<{
        timestamp: z.iso.ZodISODateTime;
        mode: z.ZodEnum<{
            softReset: "softReset";
            factoryReset: "factoryReset";
        }>;
    }, {}, {}>>;
    RS232CConfiguration: z.ZodOptional<z.ZodObject<{
        mode: z.ZodLiteral<0 | 1>;
        port: z.ZodOptional<z.ZodNumber>;
        baudRate: z.ZodOptional<z.ZodLiteral<0 | 1024000 | 110 | 115200 | 1200 | 128000 | 14400 | 19200 | 230400 | 2400 | 256000 | 300 | 38400 | 4800 | 512000 | 57600 | 600 | 768000 | 921600 | 9600>>;
        dataBit: z.ZodOptional<z.ZodLiteral<0 | 8 | 7>>;
        parity: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
        stopBit: z.ZodOptional<z.ZodLiteral<0 | 1 | 2>>;
        flowControl: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
        rxTimeoutInMs: z.ZodOptional<z.ZodNumber>;
    }, {}, {}>>;
    simplinkStatus: z.ZodOptional<z.ZodObject<{
        simplinkEnable: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, {}, {}>>;
    tileInfo: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        row: z.ZodNumber;
        column: z.ZodNumber;
        tileId: z.ZodNumber;
        naturalMode: z.ZodBoolean;
    }, {}, {}>>;
    usagePermission: z.ZodOptional<z.ZodObject<{
        remoteKeyOperationMode: z.ZodEnum<{
            normal: "normal";
            blockAll: "blockAll";
            usePwrOnly: "usePwrOnly";
        }>;
        localKeyOperationMode: z.ZodEnum<{
            normal: "normal";
            blockAll: "blockAll";
            usePwrOnly: "usePwrOnly";
        }>;
    }, {}, {}>>;
}, {}, {}>;
export type SignageState = z.infer<typeof SignageState>;
export declare const SignageStatus: z.ZodObject<{
    captureScreenStatus: z.ZodOptional<z.ZodObject<{
        data: z.ZodBase64;
        size: z.ZodNumber;
        encoding: z.ZodLiteral<"Base64">;
    }, {}, {}>>;
    usageData: z.ZodOptional<z.ZodObject<{
        uptime: z.ZodNumber;
        totalUsed: z.ZodNumber;
    }, {}, {}>>;
}, {}, {}>;
export type SignageStatus = z.infer<typeof SignageStatus>;
