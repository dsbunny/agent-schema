import * as z from "zod/v4";
export declare const CaptureScreenRequestSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    thumbnail: z.ZodOptional<z.ZodBoolean>;
    imgResolution: z.ZodOptional<z.ZodEnum<{
        thumbnail: "thumbnail";
        FHD: "FHD";
        HD: "HD";
    }>>;
}, z.core.$strip>;
export type CaptureScreenRequest = z.infer<typeof CaptureScreenRequestSchema>;
export declare const CaptureScreenStatusSchema: z.ZodObject<{
    data: z.ZodBase64;
    size: z.ZodNumber;
    encoding: z.ZodLiteral<"Base64">;
}, z.core.$strip>;
export type CaptureScreenStatus = z.infer<typeof CaptureScreenStatusSchema>;
export declare const CheckScreenStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    checkScreen: z.ZodBoolean;
}, z.core.$strip>;
export type CheckScreenState = z.infer<typeof CheckScreenStateSchema>;
export declare const DigitalAudioInputStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    digitalAudioInputMode: z.ZodEnum<{
        audioIn: "audioIn";
        hdmi: "hdmi";
    }>;
}, z.core.$strip>;
export type DigitalAudioInputState = z.infer<typeof DigitalAudioInputStateSchema>;
export declare const FailoverModeStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    mode: z.ZodEnum<{
        off: "off";
        auto: "auto";
        manual: "manual";
        ___undefined___: "___undefined___";
    }>;
    priority: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type FailoverModeState = z.infer<typeof FailoverModeStateSchema>;
export declare const IntelligentAutoStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type IntelligentAutoState = z.infer<typeof IntelligentAutoStateSchema>;
export declare const IsmMethodStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
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
}, z.core.$strip>;
export type IsmMethodState = z.infer<typeof IsmMethodStateSchema>;
export declare const LanDaisyChainStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type LanDaisyChainState = z.infer<typeof LanDaisyChainStateSchema>;
export declare const MirrorModeStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    mode: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, z.core.$strip>;
export type MirrorModeState = z.infer<typeof MirrorModeStateSchema>;
export declare const NoSignalImageModeStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    noSignalImageMode: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, z.core.$strip>;
export type NoSignalImageModeState = z.infer<typeof NoSignalImageModeStateSchema>;
export declare const PortraitModeStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    portraitMode: z.ZodEnum<{
        off: "off";
        90: "90";
        ___undefined___: "___undefined___";
    }>;
}, z.core.$strip>;
export type PortraitModeState = z.infer<typeof PortraitModeStateSchema>;
export declare const PowerSaveModeStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
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
}, z.core.$strip>;
export type PowerSaveModeState = z.infer<typeof PowerSaveModeStateSchema>;
export declare const QuietModeStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    mode: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, z.core.$strip>;
export type QuietModeState = z.infer<typeof QuietModeStateSchema>;
export declare const ResetRequestSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    mode: z.ZodEnum<{
        softReset: "softReset";
        factoryReset: "factoryReset";
    }>;
}, z.core.$strip>;
export type ResetRequest = z.infer<typeof ResetRequestSchema>;
export declare const RS232CStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    mode: z.ZodLiteral<0 | 1>;
    port: z.ZodOptional<z.ZodNumber>;
    baudRate: z.ZodOptional<z.ZodLiteral<0 | 1024000 | 110 | 115200 | 1200 | 128000 | 14400 | 19200 | 230400 | 2400 | 256000 | 300 | 38400 | 4800 | 512000 | 57600 | 600 | 768000 | 921600 | 9600>>;
    dataBit: z.ZodOptional<z.ZodLiteral<0 | 8 | 7>>;
    parity: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
    stopBit: z.ZodOptional<z.ZodLiteral<0 | 1 | 2>>;
    flowControl: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
    rxTimeoutInMs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type RS232CState = z.infer<typeof RS232CStateSchema>;
export declare const SimplinkStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    simplinkEnable: z.ZodEnum<{
        off: "off";
        on: "on";
    }>;
}, z.core.$strip>;
export type SimplinkState = z.infer<typeof SimplinkStateSchema>;
export declare const TileStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    enabled: z.ZodBoolean;
    row: z.ZodNumber;
    column: z.ZodNumber;
    tileId: z.ZodNumber;
    naturalMode: z.ZodBoolean;
}, z.core.$strip>;
export type TileState = z.infer<typeof TileStateSchema>;
export declare const UsageStatusSchema: z.ZodObject<{
    uptime: z.ZodCoercedNumber<unknown>;
    totalUsed: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export type UsageStatus = z.infer<typeof UsageStatusSchema>;
export declare const UsagePermissionStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
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
}, z.core.$strip>;
export type UsagePermissionState = z.infer<typeof UsagePermissionStateSchema>;
export declare const SignageStateSchema: z.ZodObject<{
    _captureScreenRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        thumbnail: z.ZodOptional<z.ZodBoolean>;
        imgResolution: z.ZodOptional<z.ZodEnum<{
            thumbnail: "thumbnail";
            FHD: "FHD";
            HD: "HD";
        }>>;
    }, z.core.$strip>>;
    _resetRequest: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        mode: z.ZodEnum<{
            softReset: "softReset";
            factoryReset: "factoryReset";
        }>;
    }, z.core.$strip>>;
    checkScreen: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        checkScreen: z.ZodBoolean;
    }, z.core.$strip>>;
    digitalAudioInput: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        digitalAudioInputMode: z.ZodEnum<{
            audioIn: "audioIn";
            hdmi: "hdmi";
        }>;
    }, z.core.$strip>>;
    failoverMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        mode: z.ZodEnum<{
            off: "off";
            auto: "auto";
            manual: "manual";
            ___undefined___: "___undefined___";
        }>;
        priority: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    intelligentAuto: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>>;
    ismMethod: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
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
    }, z.core.$strip>>;
    lanDaisyChain: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>>;
    mirrorMode: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        mode: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, z.core.$strip>>>;
    noSignalImageMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        noSignalImageMode: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, z.core.$strip>>;
    portraitMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        portraitMode: z.ZodEnum<{
            off: "off";
            90: "90";
            ___undefined___: "___undefined___";
        }>;
    }, z.core.$strip>>;
    powerSaveMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
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
    }, z.core.$strip>>;
    quietMode: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        mode: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, z.core.$strip>>>;
    RS232CConfiguration: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        mode: z.ZodLiteral<0 | 1>;
        port: z.ZodOptional<z.ZodNumber>;
        baudRate: z.ZodOptional<z.ZodLiteral<0 | 1024000 | 110 | 115200 | 1200 | 128000 | 14400 | 19200 | 230400 | 2400 | 256000 | 300 | 38400 | 4800 | 512000 | 57600 | 600 | 768000 | 921600 | 9600>>;
        dataBit: z.ZodOptional<z.ZodLiteral<0 | 8 | 7>>;
        parity: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
        stopBit: z.ZodOptional<z.ZodLiteral<0 | 1 | 2>>;
        flowControl: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
        rxTimeoutInMs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    simplink: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        simplinkEnable: z.ZodEnum<{
            off: "off";
            on: "on";
        }>;
    }, z.core.$strip>>;
    tile: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        enabled: z.ZodBoolean;
        row: z.ZodNumber;
        column: z.ZodNumber;
        tileId: z.ZodNumber;
        naturalMode: z.ZodBoolean;
    }, z.core.$strip>>>;
    usagePermission: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SignageState = z.infer<typeof SignageStateSchema>;
export declare const SignageStatusSchema: z.ZodObject<{
    captureScreenStatus: z.ZodOptional<z.ZodObject<{
        data: z.ZodBase64;
        size: z.ZodNumber;
        encoding: z.ZodLiteral<"Base64">;
    }, z.core.$strip>>;
    usageData: z.ZodOptional<z.ZodObject<{
        uptime: z.ZodCoercedNumber<unknown>;
        totalUsed: z.ZodCoercedNumber<unknown>;
    }, z.core.$strip>>;
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SignageStatus = z.infer<typeof SignageStatusSchema>;
