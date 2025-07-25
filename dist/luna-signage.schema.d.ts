import { z } from 'zod/v4';
export declare const CaptureScreenRequest: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
export declare const CheckScreenState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    checkScreen: z.ZodBoolean;
}, {}, {}>;
export type CheckScreenState = z.infer<typeof CheckScreenState>;
export declare const DigitalAudioInputState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    digitalAudioInputMode: z.ZodEnum<{
        audioIn: "audioIn";
        hdmi: "hdmi";
    }>;
}, {}, {}>;
export type DigitalAudioInputState = z.infer<typeof DigitalAudioInputState>;
export declare const FailoverModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    mode: z.ZodEnum<{
        off: "off";
        auto: "auto";
        manual: "manual";
        ___undefined___: "___undefined___";
    }>;
    priority: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, {}, {}>;
export type FailoverModeState = z.infer<typeof FailoverModeState>;
export declare const IntelligentAutoState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    enabled: z.ZodBoolean;
}, {}, {}>;
export type IntelligentAutoState = z.infer<typeof IntelligentAutoState>;
export declare const IsmMethodState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
export type IsmMethodState = z.infer<typeof IsmMethodState>;
export declare const LanDaisyChainState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    enabled: z.ZodBoolean;
}, {}, {}>;
export type LanDaisyChainState = z.infer<typeof LanDaisyChainState>;
export declare const MirrorModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    mode: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, {}, {}>;
export type MirrorModeState = z.infer<typeof MirrorModeState>;
export declare const NoSignalImageModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    noSignalImageMode: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, {}, {}>;
export type NoSignalImageModeState = z.infer<typeof NoSignalImageModeState>;
export declare const PortraitModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    portraitMode: z.ZodEnum<{
        off: "off";
        90: "90";
        ___undefined___: "___undefined___";
    }>;
}, {}, {}>;
export type PortraitModeState = z.infer<typeof PortraitModeState>;
export declare const PowerSaveModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
export type PowerSaveModeState = z.infer<typeof PowerSaveModeState>;
export declare const QuietModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    mode: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, {}, {}>;
export type QuietModeState = z.infer<typeof QuietModeState>;
export declare const ResetRequest: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    mode: z.ZodEnum<{
        softReset: "softReset";
        factoryReset: "factoryReset";
    }>;
}, {}, {}>;
export type ResetRequest = z.infer<typeof ResetRequest>;
export declare const RS232CState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    mode: z.ZodLiteral<0 | 1>;
    port: z.ZodOptional<z.ZodNumber>;
    baudRate: z.ZodOptional<z.ZodLiteral<0 | 1024000 | 110 | 115200 | 1200 | 128000 | 14400 | 19200 | 230400 | 2400 | 256000 | 300 | 38400 | 4800 | 512000 | 57600 | 600 | 768000 | 921600 | 9600>>;
    dataBit: z.ZodOptional<z.ZodLiteral<0 | 8 | 7>>;
    parity: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
    stopBit: z.ZodOptional<z.ZodLiteral<0 | 1 | 2>>;
    flowControl: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
    rxTimeoutInMs: z.ZodOptional<z.ZodNumber>;
}, {}, {}>;
export type RS232CState = z.infer<typeof RS232CState>;
export declare const SimplinkState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    simplinkEnable: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, {}, {}>;
export type SimplinkState = z.infer<typeof SimplinkState>;
export declare const TileState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    enabled: z.ZodBoolean;
    row: z.ZodNumber;
    column: z.ZodNumber;
    tileId: z.ZodNumber;
    naturalMode: z.ZodBoolean;
}, {}, {}>;
export type TileState = z.infer<typeof TileState>;
export declare const UsageStatus: z.ZodObject<{
    uptime: z.coerce.ZodCoercedNumber;
    totalUsed: z.coerce.ZodCoercedNumber;
}, {}, {}>;
export type UsageStatus = z.infer<typeof UsageStatus>;
export declare const UsagePermissionState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
export type UsagePermissionState = z.infer<typeof UsagePermissionState>;
export declare const SignageState: z.ZodObject<{
    _captureScreenRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        thumbnail: z.ZodOptional<z.ZodBoolean>;
        imgResolution: z.ZodOptional<z.ZodEnum<{
            thumbnail: "thumbnail";
            FHD: "FHD";
            HD: "HD";
        }>>;
    }, {}, {}>>;
    _resetRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        mode: z.ZodEnum<{
            softReset: "softReset";
            factoryReset: "factoryReset";
        }>;
    }, {}, {}>>;
    checkScreen: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        checkScreen: z.ZodBoolean;
    }, {}, {}>>;
    digitalAudioInput: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        digitalAudioInputMode: z.ZodEnum<{
            audioIn: "audioIn";
            hdmi: "hdmi";
        }>;
    }, {}, {}>>;
    failoverMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        mode: z.ZodEnum<{
            off: "off";
            auto: "auto";
            manual: "manual";
            ___undefined___: "___undefined___";
        }>;
        priority: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, {}, {}>>;
    intelligentAuto: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        enabled: z.ZodBoolean;
    }, {}, {}>>>;
    ismMethod: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
    lanDaisyChain: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        enabled: z.ZodBoolean;
    }, {}, {}>>>;
    mirrorMode: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        mode: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, {}, {}>>>;
    noSignalImageMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        noSignalImageMode: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, {}, {}>>;
    portraitMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        portraitMode: z.ZodEnum<{
            off: "off";
            90: "90";
            ___undefined___: "___undefined___";
        }>;
    }, {}, {}>>;
    powerSaveMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
    quietMode: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        mode: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, {}, {}>>>;
    RS232CConfiguration: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        mode: z.ZodLiteral<0 | 1>;
        port: z.ZodOptional<z.ZodNumber>;
        baudRate: z.ZodOptional<z.ZodLiteral<0 | 1024000 | 110 | 115200 | 1200 | 128000 | 14400 | 19200 | 230400 | 2400 | 256000 | 300 | 38400 | 4800 | 512000 | 57600 | 600 | 768000 | 921600 | 9600>>;
        dataBit: z.ZodOptional<z.ZodLiteral<0 | 8 | 7>>;
        parity: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
        stopBit: z.ZodOptional<z.ZodLiteral<0 | 1 | 2>>;
        flowControl: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
        rxTimeoutInMs: z.ZodOptional<z.ZodNumber>;
    }, {}, {}>>;
    simplink: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        simplinkEnable: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, {}, {}>>;
    tile: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        enabled: z.ZodBoolean;
        row: z.ZodNumber;
        column: z.ZodNumber;
        tileId: z.ZodNumber;
        naturalMode: z.ZodBoolean;
    }, {}, {}>>>;
    usagePermission: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
        uptime: z.coerce.ZodCoercedNumber;
        totalUsed: z.coerce.ZodCoercedNumber;
    }, {}, {}>>;
    _debug: z.ZodOptional<z.ZodString>;
}, {}, {}>;
export type SignageStatus = z.infer<typeof SignageStatus>;
