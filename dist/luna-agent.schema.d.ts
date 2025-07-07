import { z } from 'zod/v4';
export declare const LUNA_AGENT_URN = "urn:dsbunny:agent:luna";
export declare const LunaAgentStateDetail: z.ZodObject<{
    configuration: z.ZodOptional<z.ZodObject<{
        clearCacheRequest: z.ZodOptional<z.ZodObject<{
            timestamp: z.iso.ZodISODateTime;
        }, {}, {}>>;
        currentTime: z.ZodOptional<z.ZodObject<{
            ntp: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            ntpServerAddress: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        masterPinActivated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        OSDLanguage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        OSDLock: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        pictureMode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
            eco: "eco";
            cinema: "cinema";
            expert1: "expert1";
            expert2: "expert2";
            game: "game";
            sports: "sports";
            normal: "normal";
            vivid: "vivid";
        }>>>;
        pictureProperty: z.ZodOptional<z.ZodObject<{
            backlight: z.ZodOptional<z.ZodNumber>;
            contrast: z.ZodOptional<z.ZodNumber>;
            brightness: z.ZodOptional<z.ZodNumber>;
            sharpness: z.ZodOptional<z.ZodNumber>;
            hSharpness: z.ZodOptional<z.ZodNumber>;
            vSharpness: z.ZodOptional<z.ZodNumber>;
            color: z.ZodOptional<z.ZodNumber>;
            tint: z.ZodOptional<z.ZodNumber>;
            colorTemperature: z.ZodOptional<z.ZodNumber>;
            dynamicContrast: z.ZodOptional<z.ZodEnum<{
                off: "off";
                low: "low";
                medium: "medium";
                high: "high";
            }>>;
            superResolution: z.ZodOptional<z.ZodEnum<{
                off: "off";
                low: "low";
                medium: "medium";
                high: "high";
            }>>;
            noiseReduction: z.ZodOptional<z.ZodEnum<{
                off: "off";
                low: "low";
                medium: "medium";
                high: "high";
                auto: "auto";
            }>>;
            mpegNoiseReduction: z.ZodOptional<z.ZodEnum<{
                off: "off";
                low: "low";
                medium: "medium";
                high: "high";
                auto: "auto";
            }>>;
            blackLevel: z.ZodOptional<z.ZodEnum<{
                low: "low";
                high: "high";
            }>>;
            gamma: z.ZodOptional<z.ZodEnum<{
                low: "low";
                medium: "medium";
                high: "high";
                high3: "high3";
            }>>;
        }, {}, {}>>;
        proxyBypassList: z.ZodOptional<z.ZodArray<z.ZodString>>;
        restartApplicationRequest: z.ZodOptional<z.ZodObject<{
            timestamp: z.iso.ZodISODateTime;
        }, {}, {}>>;
        timeZone: z.ZodOptional<z.ZodObject<{
            continent: z.ZodString;
            country: z.ZodString;
            city: z.ZodString;
        }, {}, {}>>;
        USBLock: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, {}, {}>>;
    deviceInfo: z.ZodOptional<z.ZodObject<{
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
    }, {}, {}>>;
    inputSource: z.ZodOptional<z.ZodObject<{
        currentInputSource: z.ZodString;
    }, {}, {}>>;
    power: z.ZodOptional<z.ZodObject<{
        delayTime: z.ZodOptional<z.ZodNumber>;
        displayMode: z.ZodOptional<z.ZodEnum<{
            "Screen Off": "Screen Off";
            Active: "Active";
        }>>;
        dpmSignalType: z.ZodOptional<z.ZodEnum<{
            clock: "clock";
            clockAndData: "clockAndData";
        }>>;
        mode: z.ZodOptional<z.ZodEnum<{
            powerOff: "powerOff";
            screenOff: "screenOff";
            screenOffAlways: "screenOffAlways";
            screenOffBacklight: "screenOffBacklight";
            sustainAspectRation: "sustainAspectRation";
            networkReady: "networkReady";
        }>>;
        powerCommandRequest: z.ZodOptional<z.ZodObject<{
            timestamp: z.iso.ZodISODateTime;
            powerCommand: z.ZodEnum<{
                reboot: "reboot";
                powerOff: "powerOff";
            }>;
        }, {}, {}>>;
        wakeOnLan: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, {}, {}>>;
    security: z.ZodOptional<z.ZodObject<{
        serverCertificateList: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, {}, {}>>;
    signage: z.ZodOptional<z.ZodObject<{
        captureScreenRequest: z.ZodOptional<z.ZodObject<{
            timestamp: z.iso.ZodISODateTime;
            thumbnail: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            imgResolution: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                thumbnail: "thumbnail";
                FHD: "FHD";
                HD: "HD";
            }>>>;
        }, {}, {}>>;
        checkScreen: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        digitalAudioInput: z.ZodOptional<z.ZodEnum<{
            audioIn: "audioIn";
            hdmi: "hdmi";
        }>>;
        failoverMode: z.ZodOptional<z.ZodObject<{
            mode: z.ZodEnum<{
                off: "off";
                auto: "auto";
                manual: "manual";
            }>;
            priority: z.ZodArray<z.ZodString>;
        }, {}, {}>>;
        intelligentAuto: z.ZodOptional<z.ZodBoolean>;
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
        lanDaisyChain: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        mirrorMode: z.ZodOptional<z.ZodEnum<{
            off: "off";
            on: "on";
        }>>;
        noSignalImageMode: z.ZodOptional<z.ZodEnum<{
            off: "off";
            on: "on";
        }>>;
        portraitMode: z.ZodEnum<{
            off: "off";
            90: "90";
            ___undefined___: "___undefined___";
        }>;
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
        quietMode: z.ZodOptional<z.ZodEnum<{
            off: "off";
            on: "on";
        }>>;
        RS232CConfiguration: z.ZodOptional<z.ZodObject<{
            mode: z.ZodNumber;
            port: z.ZodOptional<z.ZodNumber>;
            baudRate: z.ZodOptional<z.ZodLiteral<0 | 1024000 | 110 | 115200 | 1200 | 128000 | 14400 | 19200 | 230400 | 2400 | 256000 | 300 | 38400 | 4800 | 512000 | 57600 | 600 | 768000 | 921600 | 9600>>;
            dataBit: z.ZodOptional<z.ZodLiteral<0 | 8 | 7>>;
            parity: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
            stopBit: z.ZodOptional<z.ZodLiteral<0 | 1 | 2>>;
            flowControl: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
            rxTimeoutInMs: z.ZodOptional<z.ZodNumber>;
        }, {}, {}>>;
        simplinkStatus: z.ZodOptional<z.ZodEnum<{
            off: "off";
            on: "on";
        }>>;
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
    }, {}, {}>>;
    sound: z.ZodOptional<z.ZodObject<{
        mode: z.ZodDefault<z.ZodEnum<{
            game: "game";
            sports: "sports";
            standard: "standard";
            movie: "movie";
            news: "news";
            music: "music";
        }>>;
        balance: z.ZodOptional<z.ZodNumber>;
        level: z.ZodOptional<z.ZodNumber>;
        muted: z.ZodDefault<z.ZodBoolean>;
        externalSpeaker: z.ZodDefault<z.ZodBoolean>;
        speakerType: z.ZodOptional<z.ZodEnum<{
            tv_speaker: "tv_speaker";
            bt_soundbar: "bt_soundbar";
        }>>;
    }, {}, {}>>;
    time: z.ZodOptional<z.ZodObject<{
        timerList: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<{
                OFFTIMER: "OFFTIMER";
                ONTIMER: "ONTIMER";
            }>;
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            week: z.ZodNumber;
        }, {}, {}>>>;
        holidayScheduleList: z.ZodOptional<z.ZodArray<z.ZodObject<{
            _id: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            settings: z.ZodOptional<z.ZodObject<{
                month: z.ZodOptional<z.ZodNumber>;
                year: z.ZodOptional<z.ZodNumber>;
                date: z.ZodOptional<z.ZodNumber>;
                repeatBy: z.ZodOptional<z.ZodEnum<{
                    dayOfWeek: "dayOfWeek";
                    dayOfMonth: "dayOfMonth";
                    none: "none";
                }>>;
                days: z.ZodOptional<z.ZodNumber>;
                repeat: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    monthly: "monthly";
                    yearly: "yearly";
                }>>;
            }, {}, {}>>;
        }, {}, {}>>>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentStateDetail = z.infer<typeof LunaAgentStateDetail>;
export declare const LunaAgentStateBase: z.ZodObject<{
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        configuration: z.ZodOptional<z.ZodObject<{
            clearCacheRequest: z.ZodOptional<z.ZodObject<{
                timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
            currentTime: z.ZodOptional<z.ZodObject<{
                ntp: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                ntpServerAddress: z.ZodOptional<z.ZodString>;
            }, {}, {}>>;
            masterPinActivated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            OSDLanguage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
            OSDLock: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            pictureMode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                eco: "eco";
                cinema: "cinema";
                expert1: "expert1";
                expert2: "expert2";
                game: "game";
                sports: "sports";
                normal: "normal";
                vivid: "vivid";
            }>>>;
            pictureProperty: z.ZodOptional<z.ZodObject<{
                backlight: z.ZodOptional<z.ZodNumber>;
                contrast: z.ZodOptional<z.ZodNumber>;
                brightness: z.ZodOptional<z.ZodNumber>;
                sharpness: z.ZodOptional<z.ZodNumber>;
                hSharpness: z.ZodOptional<z.ZodNumber>;
                vSharpness: z.ZodOptional<z.ZodNumber>;
                color: z.ZodOptional<z.ZodNumber>;
                tint: z.ZodOptional<z.ZodNumber>;
                colorTemperature: z.ZodOptional<z.ZodNumber>;
                dynamicContrast: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                }>>;
                superResolution: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                }>>;
                noiseReduction: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                    auto: "auto";
                }>>;
                mpegNoiseReduction: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                    auto: "auto";
                }>>;
                blackLevel: z.ZodOptional<z.ZodEnum<{
                    low: "low";
                    high: "high";
                }>>;
                gamma: z.ZodOptional<z.ZodEnum<{
                    low: "low";
                    medium: "medium";
                    high: "high";
                    high3: "high3";
                }>>;
            }, {}, {}>>;
            proxyBypassList: z.ZodOptional<z.ZodArray<z.ZodString>>;
            restartApplicationRequest: z.ZodOptional<z.ZodObject<{
                timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
            timeZone: z.ZodOptional<z.ZodObject<{
                continent: z.ZodString;
                country: z.ZodString;
                city: z.ZodString;
            }, {}, {}>>;
            USBLock: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, {}, {}>>;
        deviceInfo: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        inputSource: z.ZodOptional<z.ZodObject<{
            currentInputSource: z.ZodString;
        }, {}, {}>>;
        power: z.ZodOptional<z.ZodObject<{
            delayTime: z.ZodOptional<z.ZodNumber>;
            displayMode: z.ZodOptional<z.ZodEnum<{
                "Screen Off": "Screen Off";
                Active: "Active";
            }>>;
            dpmSignalType: z.ZodOptional<z.ZodEnum<{
                clock: "clock";
                clockAndData: "clockAndData";
            }>>;
            mode: z.ZodOptional<z.ZodEnum<{
                powerOff: "powerOff";
                screenOff: "screenOff";
                screenOffAlways: "screenOffAlways";
                screenOffBacklight: "screenOffBacklight";
                sustainAspectRation: "sustainAspectRation";
                networkReady: "networkReady";
            }>>;
            powerCommandRequest: z.ZodOptional<z.ZodObject<{
                timestamp: z.iso.ZodISODateTime;
                powerCommand: z.ZodEnum<{
                    reboot: "reboot";
                    powerOff: "powerOff";
                }>;
            }, {}, {}>>;
            wakeOnLan: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, {}, {}>>;
        security: z.ZodOptional<z.ZodObject<{
            serverCertificateList: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>>;
        signage: z.ZodOptional<z.ZodObject<{
            captureScreenRequest: z.ZodOptional<z.ZodObject<{
                timestamp: z.iso.ZodISODateTime;
                thumbnail: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                imgResolution: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                    thumbnail: "thumbnail";
                    FHD: "FHD";
                    HD: "HD";
                }>>>;
            }, {}, {}>>;
            checkScreen: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            digitalAudioInput: z.ZodOptional<z.ZodEnum<{
                audioIn: "audioIn";
                hdmi: "hdmi";
            }>>;
            failoverMode: z.ZodOptional<z.ZodObject<{
                mode: z.ZodEnum<{
                    off: "off";
                    auto: "auto";
                    manual: "manual";
                }>;
                priority: z.ZodArray<z.ZodString>;
            }, {}, {}>>;
            intelligentAuto: z.ZodOptional<z.ZodBoolean>;
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
            lanDaisyChain: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            mirrorMode: z.ZodOptional<z.ZodEnum<{
                off: "off";
                on: "on";
            }>>;
            noSignalImageMode: z.ZodOptional<z.ZodEnum<{
                off: "off";
                on: "on";
            }>>;
            portraitMode: z.ZodEnum<{
                off: "off";
                90: "90";
                ___undefined___: "___undefined___";
            }>;
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
            quietMode: z.ZodOptional<z.ZodEnum<{
                off: "off";
                on: "on";
            }>>;
            RS232CConfiguration: z.ZodOptional<z.ZodObject<{
                mode: z.ZodNumber;
                port: z.ZodOptional<z.ZodNumber>;
                baudRate: z.ZodOptional<z.ZodLiteral<0 | 1024000 | 110 | 115200 | 1200 | 128000 | 14400 | 19200 | 230400 | 2400 | 256000 | 300 | 38400 | 4800 | 512000 | 57600 | 600 | 768000 | 921600 | 9600>>;
                dataBit: z.ZodOptional<z.ZodLiteral<0 | 8 | 7>>;
                parity: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
                stopBit: z.ZodOptional<z.ZodLiteral<0 | 1 | 2>>;
                flowControl: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
                rxTimeoutInMs: z.ZodOptional<z.ZodNumber>;
            }, {}, {}>>;
            simplinkStatus: z.ZodOptional<z.ZodEnum<{
                off: "off";
                on: "on";
            }>>;
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
        }, {}, {}>>;
        sound: z.ZodOptional<z.ZodObject<{
            mode: z.ZodDefault<z.ZodEnum<{
                game: "game";
                sports: "sports";
                standard: "standard";
                movie: "movie";
                news: "news";
                music: "music";
            }>>;
            balance: z.ZodOptional<z.ZodNumber>;
            level: z.ZodOptional<z.ZodNumber>;
            muted: z.ZodDefault<z.ZodBoolean>;
            externalSpeaker: z.ZodDefault<z.ZodBoolean>;
            speakerType: z.ZodOptional<z.ZodEnum<{
                tv_speaker: "tv_speaker";
                bt_soundbar: "bt_soundbar";
            }>>;
        }, {}, {}>>;
        time: z.ZodOptional<z.ZodObject<{
            timerList: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                type: z.ZodEnum<{
                    OFFTIMER: "OFFTIMER";
                    ONTIMER: "ONTIMER";
                }>;
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                week: z.ZodNumber;
            }, {}, {}>>>;
            holidayScheduleList: z.ZodOptional<z.ZodArray<z.ZodObject<{
                _id: z.ZodOptional<z.ZodNumber>;
                name: z.ZodOptional<z.ZodString>;
                settings: z.ZodOptional<z.ZodObject<{
                    month: z.ZodOptional<z.ZodNumber>;
                    year: z.ZodOptional<z.ZodNumber>;
                    date: z.ZodOptional<z.ZodNumber>;
                    repeatBy: z.ZodOptional<z.ZodEnum<{
                        dayOfWeek: "dayOfWeek";
                        dayOfMonth: "dayOfMonth";
                        none: "none";
                    }>>;
                    days: z.ZodOptional<z.ZodNumber>;
                    repeat: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        monthly: "monthly";
                        yearly: "yearly";
                    }>>;
                }, {}, {}>>;
            }, {}, {}>>>;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentStateBase = z.infer<typeof LunaAgentStateBase>;
export declare const LunaAgentState: z.ZodObject<{
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        configuration: z.ZodOptional<z.ZodObject<{
            clearCacheRequest: z.ZodOptional<z.ZodObject<{
                timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
            currentTime: z.ZodOptional<z.ZodObject<{
                ntp: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                ntpServerAddress: z.ZodOptional<z.ZodString>;
            }, {}, {}>>;
            masterPinActivated: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            OSDLanguage: z.ZodDefault<z.ZodOptional<z.ZodString>>;
            OSDLock: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            pictureMode: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                eco: "eco";
                cinema: "cinema";
                expert1: "expert1";
                expert2: "expert2";
                game: "game";
                sports: "sports";
                normal: "normal";
                vivid: "vivid";
            }>>>;
            pictureProperty: z.ZodOptional<z.ZodObject<{
                backlight: z.ZodOptional<z.ZodNumber>;
                contrast: z.ZodOptional<z.ZodNumber>;
                brightness: z.ZodOptional<z.ZodNumber>;
                sharpness: z.ZodOptional<z.ZodNumber>;
                hSharpness: z.ZodOptional<z.ZodNumber>;
                vSharpness: z.ZodOptional<z.ZodNumber>;
                color: z.ZodOptional<z.ZodNumber>;
                tint: z.ZodOptional<z.ZodNumber>;
                colorTemperature: z.ZodOptional<z.ZodNumber>;
                dynamicContrast: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                }>>;
                superResolution: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                }>>;
                noiseReduction: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                    auto: "auto";
                }>>;
                mpegNoiseReduction: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                    auto: "auto";
                }>>;
                blackLevel: z.ZodOptional<z.ZodEnum<{
                    low: "low";
                    high: "high";
                }>>;
                gamma: z.ZodOptional<z.ZodEnum<{
                    low: "low";
                    medium: "medium";
                    high: "high";
                    high3: "high3";
                }>>;
            }, {}, {}>>;
            proxyBypassList: z.ZodOptional<z.ZodArray<z.ZodString>>;
            restartApplicationRequest: z.ZodOptional<z.ZodObject<{
                timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
            timeZone: z.ZodOptional<z.ZodObject<{
                continent: z.ZodString;
                country: z.ZodString;
                city: z.ZodString;
            }, {}, {}>>;
            USBLock: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, {}, {}>>;
        deviceInfo: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        inputSource: z.ZodOptional<z.ZodObject<{
            currentInputSource: z.ZodString;
        }, {}, {}>>;
        power: z.ZodOptional<z.ZodObject<{
            delayTime: z.ZodOptional<z.ZodNumber>;
            displayMode: z.ZodOptional<z.ZodEnum<{
                "Screen Off": "Screen Off";
                Active: "Active";
            }>>;
            dpmSignalType: z.ZodOptional<z.ZodEnum<{
                clock: "clock";
                clockAndData: "clockAndData";
            }>>;
            mode: z.ZodOptional<z.ZodEnum<{
                powerOff: "powerOff";
                screenOff: "screenOff";
                screenOffAlways: "screenOffAlways";
                screenOffBacklight: "screenOffBacklight";
                sustainAspectRation: "sustainAspectRation";
                networkReady: "networkReady";
            }>>;
            powerCommandRequest: z.ZodOptional<z.ZodObject<{
                timestamp: z.iso.ZodISODateTime;
                powerCommand: z.ZodEnum<{
                    reboot: "reboot";
                    powerOff: "powerOff";
                }>;
            }, {}, {}>>;
            wakeOnLan: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        }, {}, {}>>;
        security: z.ZodOptional<z.ZodObject<{
            serverCertificateList: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, {}, {}>>;
        signage: z.ZodOptional<z.ZodObject<{
            captureScreenRequest: z.ZodOptional<z.ZodObject<{
                timestamp: z.iso.ZodISODateTime;
                thumbnail: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
                imgResolution: z.ZodDefault<z.ZodOptional<z.ZodEnum<{
                    thumbnail: "thumbnail";
                    FHD: "FHD";
                    HD: "HD";
                }>>>;
            }, {}, {}>>;
            checkScreen: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            digitalAudioInput: z.ZodOptional<z.ZodEnum<{
                audioIn: "audioIn";
                hdmi: "hdmi";
            }>>;
            failoverMode: z.ZodOptional<z.ZodObject<{
                mode: z.ZodEnum<{
                    off: "off";
                    auto: "auto";
                    manual: "manual";
                }>;
                priority: z.ZodArray<z.ZodString>;
            }, {}, {}>>;
            intelligentAuto: z.ZodOptional<z.ZodBoolean>;
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
            lanDaisyChain: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
            mirrorMode: z.ZodOptional<z.ZodEnum<{
                off: "off";
                on: "on";
            }>>;
            noSignalImageMode: z.ZodOptional<z.ZodEnum<{
                off: "off";
                on: "on";
            }>>;
            portraitMode: z.ZodEnum<{
                off: "off";
                90: "90";
                ___undefined___: "___undefined___";
            }>;
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
            quietMode: z.ZodOptional<z.ZodEnum<{
                off: "off";
                on: "on";
            }>>;
            RS232CConfiguration: z.ZodOptional<z.ZodObject<{
                mode: z.ZodNumber;
                port: z.ZodOptional<z.ZodNumber>;
                baudRate: z.ZodOptional<z.ZodLiteral<0 | 1024000 | 110 | 115200 | 1200 | 128000 | 14400 | 19200 | 230400 | 2400 | 256000 | 300 | 38400 | 4800 | 512000 | 57600 | 600 | 768000 | 921600 | 9600>>;
                dataBit: z.ZodOptional<z.ZodLiteral<0 | 8 | 7>>;
                parity: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
                stopBit: z.ZodOptional<z.ZodLiteral<0 | 1 | 2>>;
                flowControl: z.ZodOptional<z.ZodLiteral<0 | 1 | 2 | 3>>;
                rxTimeoutInMs: z.ZodOptional<z.ZodNumber>;
            }, {}, {}>>;
            simplinkStatus: z.ZodOptional<z.ZodEnum<{
                off: "off";
                on: "on";
            }>>;
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
        }, {}, {}>>;
        sound: z.ZodOptional<z.ZodObject<{
            mode: z.ZodDefault<z.ZodEnum<{
                game: "game";
                sports: "sports";
                standard: "standard";
                movie: "movie";
                news: "news";
                music: "music";
            }>>;
            balance: z.ZodOptional<z.ZodNumber>;
            level: z.ZodOptional<z.ZodNumber>;
            muted: z.ZodDefault<z.ZodBoolean>;
            externalSpeaker: z.ZodDefault<z.ZodBoolean>;
            speakerType: z.ZodOptional<z.ZodEnum<{
                tv_speaker: "tv_speaker";
                bt_soundbar: "bt_soundbar";
            }>>;
        }, {}, {}>>;
        time: z.ZodOptional<z.ZodObject<{
            timerList: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                type: z.ZodEnum<{
                    OFFTIMER: "OFFTIMER";
                    ONTIMER: "ONTIMER";
                }>;
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                week: z.ZodNumber;
            }, {}, {}>>>;
            holidayScheduleList: z.ZodOptional<z.ZodArray<z.ZodObject<{
                _id: z.ZodOptional<z.ZodNumber>;
                name: z.ZodOptional<z.ZodString>;
                settings: z.ZodOptional<z.ZodObject<{
                    month: z.ZodOptional<z.ZodNumber>;
                    year: z.ZodOptional<z.ZodNumber>;
                    date: z.ZodOptional<z.ZodNumber>;
                    repeatBy: z.ZodOptional<z.ZodEnum<{
                        dayOfWeek: "dayOfWeek";
                        dayOfMonth: "dayOfMonth";
                        none: "none";
                    }>>;
                    days: z.ZodOptional<z.ZodNumber>;
                    repeat: z.ZodOptional<z.ZodEnum<{
                        none: "none";
                        monthly: "monthly";
                        yearly: "yearly";
                    }>>;
                }, {}, {}>>;
            }, {}, {}>>>;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentState = z.infer<typeof LunaAgentState>;
export declare const LunaAgentStatusDetail: z.ZodObject<{
    configuration: z.ZodOptional<z.ZodObject<{
        currentTime: z.iso.ZodISODateTime;
        localeList: z.ZodArray<z.ZodObject<{
            language: z.ZodString;
            languageCode: z.ZodString;
            countries: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                specifier: z.ZodString;
            }, {}, {}>>;
        }, {}, {}>>;
        timeZoneList: z.ZodArray<z.ZodObject<{
            continent: z.ZodString;
            country: z.ZodString;
            city: z.ZodString;
        }, {}, {}>>;
    }, {}, {}>>;
    deviceInfo: z.ZodOptional<z.ZodObject<{
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
    }, {}, {}>>;
    inputSource: z.ZodOptional<z.ZodObject<{
        externalInputList: z.ZodArray<z.ZodObject<{
            inputPort: z.ZodString;
            signalDetection: z.ZodBoolean;
            vendorID: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
    }, {}, {}>>;
    security: z.ZodOptional<z.ZodObject<{
        serverCertificateList: z.ZodOptional<z.ZodArray<z.ZodObject<{
            domainName: z.ZodOptional<z.ZodString>;
            issuerName: z.ZodOptional<z.ZodString>;
            validFrom: z.ZodOptional<z.iso.ZodISODateTime>;
            validTo: z.ZodOptional<z.iso.ZodISODateTime>;
        }, {}, {}>>>;
    }, {}, {}>>;
    signage: z.ZodOptional<z.ZodObject<{
        captureScreenStatus: z.ZodOptional<z.ZodObject<{
            data: z.ZodBase64;
            size: z.ZodNumber;
            encoding: z.ZodLiteral<"Base64">;
        }, {}, {}>>;
        usageData: z.ZodOptional<z.ZodObject<{
            uptime: z.ZodNumber;
            totalUsed: z.ZodNumber;
        }, {}, {}>>;
    }, {}, {}>>;
    errors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodNumber;
        entries: z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            text: z.ZodString;
            timestamp: z.iso.ZodISODateTime;
        }, {}, {}>>;
    }, {}, {}>>>;
}, {}, {}>;
export type LunaAgentStatusDetail = z.infer<typeof LunaAgentStatusDetail>;
export declare const LunaAgentStatusBase: z.ZodObject<{
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        configuration: z.ZodOptional<z.ZodObject<{
            currentTime: z.iso.ZodISODateTime;
            localeList: z.ZodArray<z.ZodObject<{
                language: z.ZodString;
                languageCode: z.ZodString;
                countries: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    specifier: z.ZodString;
                }, {}, {}>>;
            }, {}, {}>>;
            timeZoneList: z.ZodArray<z.ZodObject<{
                continent: z.ZodString;
                country: z.ZodString;
                city: z.ZodString;
            }, {}, {}>>;
        }, {}, {}>>;
        deviceInfo: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        inputSource: z.ZodOptional<z.ZodObject<{
            externalInputList: z.ZodArray<z.ZodObject<{
                inputPort: z.ZodString;
                signalDetection: z.ZodBoolean;
                vendorID: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, {}, {}>>;
        }, {}, {}>>;
        security: z.ZodOptional<z.ZodObject<{
            serverCertificateList: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domainName: z.ZodOptional<z.ZodString>;
                issuerName: z.ZodOptional<z.ZodString>;
                validFrom: z.ZodOptional<z.iso.ZodISODateTime>;
                validTo: z.ZodOptional<z.iso.ZodISODateTime>;
            }, {}, {}>>>;
        }, {}, {}>>;
        signage: z.ZodOptional<z.ZodObject<{
            captureScreenStatus: z.ZodOptional<z.ZodObject<{
                data: z.ZodBase64;
                size: z.ZodNumber;
                encoding: z.ZodLiteral<"Base64">;
            }, {}, {}>>;
            usageData: z.ZodOptional<z.ZodObject<{
                uptime: z.ZodNumber;
                totalUsed: z.ZodNumber;
            }, {}, {}>>;
        }, {}, {}>>;
        errors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            entries: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                text: z.ZodString;
                timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
        }, {}, {}>>>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentStatusBase = z.infer<typeof LunaAgentStatusBase>;
export declare const LunaAgentStatus: z.ZodObject<{
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        configuration: z.ZodOptional<z.ZodObject<{
            currentTime: z.iso.ZodISODateTime;
            localeList: z.ZodArray<z.ZodObject<{
                language: z.ZodString;
                languageCode: z.ZodString;
                countries: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    specifier: z.ZodString;
                }, {}, {}>>;
            }, {}, {}>>;
            timeZoneList: z.ZodArray<z.ZodObject<{
                continent: z.ZodString;
                country: z.ZodString;
                city: z.ZodString;
            }, {}, {}>>;
        }, {}, {}>>;
        deviceInfo: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        inputSource: z.ZodOptional<z.ZodObject<{
            externalInputList: z.ZodArray<z.ZodObject<{
                inputPort: z.ZodString;
                signalDetection: z.ZodBoolean;
                vendorID: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, {}, {}>>;
        }, {}, {}>>;
        security: z.ZodOptional<z.ZodObject<{
            serverCertificateList: z.ZodOptional<z.ZodArray<z.ZodObject<{
                domainName: z.ZodOptional<z.ZodString>;
                issuerName: z.ZodOptional<z.ZodString>;
                validFrom: z.ZodOptional<z.iso.ZodISODateTime>;
                validTo: z.ZodOptional<z.iso.ZodISODateTime>;
            }, {}, {}>>>;
        }, {}, {}>>;
        signage: z.ZodOptional<z.ZodObject<{
            captureScreenStatus: z.ZodOptional<z.ZodObject<{
                data: z.ZodBase64;
                size: z.ZodNumber;
                encoding: z.ZodLiteral<"Base64">;
            }, {}, {}>>;
            usageData: z.ZodOptional<z.ZodObject<{
                uptime: z.ZodNumber;
                totalUsed: z.ZodNumber;
            }, {}, {}>>;
        }, {}, {}>>;
        errors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            entries: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                text: z.ZodString;
                timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
        }, {}, {}>>>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentStatus = z.infer<typeof LunaAgentStatus>;
