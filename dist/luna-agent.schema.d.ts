import { z } from 'zod/v4';
export declare const LUNA_AGENT_URN = "urn:dsbunny:agent:luna";
export declare const LunaAgentStateDetail: z.ZodObject<{
    configuration: z.ZodOptional<z.ZodObject<{
        _clearCacheRequest: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
        }, {}, {}>>;
        _restartApplicationRequest: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
        }, {}, {}>>;
        currentTime: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            ntp: z.ZodOptional<z.ZodBoolean>;
            ntpServerAddress: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        masterPin: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            activated: z.ZodBoolean;
        }, {}, {}>>;
        OSDLanguage: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            specifier: z.ZodString;
        }, {}, {}>>;
        OSDLock: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            enabled: z.ZodBoolean;
        }, {}, {}>>;
        pictureMode: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            mode: z.ZodEnum<{
                eco: "eco";
                cinema: "cinema";
                expert1: "expert1";
                expert2: "expert2";
                game: "game";
                sports: "sports";
                normal: "normal";
                vivid: "vivid";
            }>;
        }, {}, {}>>;
        pictureProperty: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
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
            superResolution: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                off: "off";
                low: "low";
                medium: "medium";
                high: "high";
            }>>>;
            colorGamut: z.ZodOptional<z.ZodEnum<{
                normal: "normal";
                extended: "extended";
            }>>;
            dynamicColor: z.ZodOptional<z.ZodEnum<{
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
        property: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            alias: z.ZodOptional<z.ZodString>;
            operation_mode_after_screen_share: z.ZodOptional<z.ZodString>;
            key_delivery_to_simplink: z.ZodOptional<z.ZodString>;
            cec_device_control: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, {}, {}>>;
        proxyBypassList: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            urlList: z.ZodArray<z.ZodString>;
        }, {}, {}>>;
        serverProperty: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            serverIp: z.ZodString;
            serverPort: z.ZodNumber;
            secureConnection: z.ZodBoolean;
            appLaunchMode: z.ZodEnum<{
                local: "local";
                remote: "remote";
                usb: "usb";
            }>;
            appType: z.ZodOptional<z.ZodEnum<{
                IPK: "IPK";
                ZIP: "ZIP";
            }>>;
            fqdnMode: z.ZodBoolean;
            fqdnAddr: z.ZodString;
            appLaunchDeviceId: z.ZodOptional<z.ZodString>;
            autoSet: z.ZodOptional<z.ZodEnum<{
                off: "off";
                on: "on";
            }>>;
        }, {}, {}>>;
        timeZone: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            timeZone: z.ZodObject<{
                continent: z.ZodString;
                country: z.ZodString;
                city: z.ZodString;
            }, {}, {}>;
        }, {}, {}>>;
        USBLock: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            enabled: z.ZodBoolean;
        }, {}, {}>>;
    }, {}, {}>>;
    device: z.ZodOptional<z.ZodObject<{
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
    }, {}, {}>>;
    power: z.ZodOptional<z.ZodObject<{
        _powerCommandRequest: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            powerCommand: z.ZodEnum<{
                powerOff: "powerOff";
                reboot: "reboot";
            }>;
        }, {}, {}>>;
        displayMode: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            displayMode: z.ZodEnum<{
                "Screen Off": "Screen Off";
                Active: "Active";
            }>;
        }, {}, {}>>;
        dpmWakeup: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            dpmSignalType: z.ZodEnum<{
                clock: "clock";
                clockAndData: "clockAndData";
            }>;
        }, {}, {}>>;
        pmMode: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            mode: z.ZodEnum<{
                powerOff: "powerOff";
                screenOff: "screenOff";
                screenOffAlways: "screenOffAlways";
                screenOffBacklight: "screenOffBacklight";
                sustainAspectRatio: "sustainAspectRatio";
                networkReady: "networkReady";
            }>;
        }, {}, {}>>;
        powerOnDelay: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            delayTime: z.ZodNumber;
        }, {}, {}>>;
        wakeOnLan: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            wakeOnLan: z.ZodBoolean;
        }, {}, {}>>;
    }, {}, {}>>;
    security: z.ZodOptional<z.ZodObject<{
        serverCertificateList: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            serverCertificateList: z.ZodArray<z.ZodString>;
        }, {}, {}>>;
    }, {}, {}>>;
    signage: z.ZodOptional<z.ZodObject<{
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
    }, {}, {}>>;
    sound: z.ZodOptional<z.ZodObject<{
        muted: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            muted: z.ZodBoolean;
        }, {}, {}>>;
        externalSpeaker: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            externalSpeaker: z.ZodBoolean;
        }, {}, {}>>;
        soundMode: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            mode: z.ZodEnum<{
                game: "game";
                sports: "sports";
                standard: "standard";
                movie: "movie";
                news: "news";
                music: "music";
            }>;
            balance: z.ZodOptional<z.coerce.ZodCoercedNumber>;
        }, {}, {}>>;
        soundOut: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            speakerType: z.ZodEnum<{
                tv_speaker: "tv_speaker";
                bt_soundbar: "bt_soundbar";
            }>;
        }, {}, {}>>;
        volumeLevel: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            level: z.ZodNumber;
            volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
        }, {}, {}>>;
    }, {}, {}>>;
    storage: z.ZodOptional<z.ZodObject<{
        _changeLogoImageRequest: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            uri: z.ZodString;
        }, {}, {}>>;
        _upgradeApplicationRequest: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            to: z.ZodEnum<{
                local: "local";
                usb: "usb";
            }>;
            recovery: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodEnum<{
                ipk: "ipk";
                zip: "zip";
            }>;
        }, {}, {}>>;
        _upgradeFirmwareRequest: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            uri: z.ZodURL;
        }, {}, {}>>;
    }, {}, {}>>;
    time: z.ZodOptional<z.ZodObject<{
        allOnOffTimers: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            timerList: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                type: z.ZodEnum<{
                    OFFTIMER: "OFFTIMER";
                    ONTIMER: "ONTIMER";
                }>;
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                week: z.ZodNumber;
            }, {}, {}>>;
        }, {}, {}>>;
        holidaySchedule: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            holidayScheduleList: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    customJS: z.ZodOptional<z.ZodObject<{
        _clearBrowsingDataRequest: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                all: "all";
                appcache: "appcache";
                cache: "cache";
                channelIDs: "channelIDs";
                cookies: "cookies";
                fileSystems: "fileSystems";
                indexedDB: "indexedDB";
                localStorage: "localStorage";
                serviceWorkers: "serviceWorkers";
                webSQL: "webSQL";
            }>>>;
        }, {}, {}>>;
        _disableApplicationRequest: z.ZodOptional<z.ZodObject<{
            _timestamp: z.iso.ZodISODateTime;
            reset: z.ZodOptional<z.ZodBoolean>;
        }, {}, {}>>;
    }, {}, {}>>;
    _debug: z.ZodOptional<z.ZodBoolean>;
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
            _clearCacheRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
            _restartApplicationRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
            currentTime: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                ntp: z.ZodOptional<z.ZodBoolean>;
                ntpServerAddress: z.ZodOptional<z.ZodString>;
            }, {}, {}>>;
            masterPin: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                activated: z.ZodBoolean;
            }, {}, {}>>;
            OSDLanguage: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                specifier: z.ZodString;
            }, {}, {}>>;
            OSDLock: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                enabled: z.ZodBoolean;
            }, {}, {}>>;
            pictureMode: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                mode: z.ZodEnum<{
                    eco: "eco";
                    cinema: "cinema";
                    expert1: "expert1";
                    expert2: "expert2";
                    game: "game";
                    sports: "sports";
                    normal: "normal";
                    vivid: "vivid";
                }>;
            }, {}, {}>>;
            pictureProperty: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
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
                superResolution: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                }>>>;
                colorGamut: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    extended: "extended";
                }>>;
                dynamicColor: z.ZodOptional<z.ZodEnum<{
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
            property: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                alias: z.ZodOptional<z.ZodString>;
                operation_mode_after_screen_share: z.ZodOptional<z.ZodString>;
                key_delivery_to_simplink: z.ZodOptional<z.ZodString>;
                cec_device_control: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, {}, {}>>;
            proxyBypassList: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                urlList: z.ZodArray<z.ZodString>;
            }, {}, {}>>;
            serverProperty: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                serverIp: z.ZodString;
                serverPort: z.ZodNumber;
                secureConnection: z.ZodBoolean;
                appLaunchMode: z.ZodEnum<{
                    local: "local";
                    remote: "remote";
                    usb: "usb";
                }>;
                appType: z.ZodOptional<z.ZodEnum<{
                    IPK: "IPK";
                    ZIP: "ZIP";
                }>>;
                fqdnMode: z.ZodBoolean;
                fqdnAddr: z.ZodString;
                appLaunchDeviceId: z.ZodOptional<z.ZodString>;
                autoSet: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    on: "on";
                }>>;
            }, {}, {}>>;
            timeZone: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                timeZone: z.ZodObject<{
                    continent: z.ZodString;
                    country: z.ZodString;
                    city: z.ZodString;
                }, {}, {}>;
            }, {}, {}>>;
            USBLock: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                enabled: z.ZodBoolean;
            }, {}, {}>>;
        }, {}, {}>>;
        device: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        power: z.ZodOptional<z.ZodObject<{
            _powerCommandRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                powerCommand: z.ZodEnum<{
                    powerOff: "powerOff";
                    reboot: "reboot";
                }>;
            }, {}, {}>>;
            displayMode: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                displayMode: z.ZodEnum<{
                    "Screen Off": "Screen Off";
                    Active: "Active";
                }>;
            }, {}, {}>>;
            dpmWakeup: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                dpmSignalType: z.ZodEnum<{
                    clock: "clock";
                    clockAndData: "clockAndData";
                }>;
            }, {}, {}>>;
            pmMode: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                mode: z.ZodEnum<{
                    powerOff: "powerOff";
                    screenOff: "screenOff";
                    screenOffAlways: "screenOffAlways";
                    screenOffBacklight: "screenOffBacklight";
                    sustainAspectRatio: "sustainAspectRatio";
                    networkReady: "networkReady";
                }>;
            }, {}, {}>>;
            powerOnDelay: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                delayTime: z.ZodNumber;
            }, {}, {}>>;
            wakeOnLan: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                wakeOnLan: z.ZodBoolean;
            }, {}, {}>>;
        }, {}, {}>>;
        security: z.ZodOptional<z.ZodObject<{
            serverCertificateList: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                serverCertificateList: z.ZodArray<z.ZodString>;
            }, {}, {}>>;
        }, {}, {}>>;
        signage: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        sound: z.ZodOptional<z.ZodObject<{
            muted: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                muted: z.ZodBoolean;
            }, {}, {}>>;
            externalSpeaker: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                externalSpeaker: z.ZodBoolean;
            }, {}, {}>>;
            soundMode: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                mode: z.ZodEnum<{
                    game: "game";
                    sports: "sports";
                    standard: "standard";
                    movie: "movie";
                    news: "news";
                    music: "music";
                }>;
                balance: z.ZodOptional<z.coerce.ZodCoercedNumber>;
            }, {}, {}>>;
            soundOut: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                speakerType: z.ZodEnum<{
                    tv_speaker: "tv_speaker";
                    bt_soundbar: "bt_soundbar";
                }>;
            }, {}, {}>>;
            volumeLevel: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                level: z.ZodNumber;
                volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
            }, {}, {}>>;
        }, {}, {}>>;
        storage: z.ZodOptional<z.ZodObject<{
            _changeLogoImageRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                uri: z.ZodString;
            }, {}, {}>>;
            _upgradeApplicationRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                to: z.ZodEnum<{
                    local: "local";
                    usb: "usb";
                }>;
                recovery: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodEnum<{
                    ipk: "ipk";
                    zip: "zip";
                }>;
            }, {}, {}>>;
            _upgradeFirmwareRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                uri: z.ZodURL;
            }, {}, {}>>;
        }, {}, {}>>;
        time: z.ZodOptional<z.ZodObject<{
            allOnOffTimers: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                timerList: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodEnum<{
                        OFFTIMER: "OFFTIMER";
                        ONTIMER: "ONTIMER";
                    }>;
                    hour: z.ZodNumber;
                    minute: z.ZodNumber;
                    week: z.ZodNumber;
                }, {}, {}>>;
            }, {}, {}>>;
            holidaySchedule: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                holidayScheduleList: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        customJS: z.ZodOptional<z.ZodObject<{
            _clearBrowsingDataRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    all: "all";
                    appcache: "appcache";
                    cache: "cache";
                    channelIDs: "channelIDs";
                    cookies: "cookies";
                    fileSystems: "fileSystems";
                    indexedDB: "indexedDB";
                    localStorage: "localStorage";
                    serviceWorkers: "serviceWorkers";
                    webSQL: "webSQL";
                }>>>;
            }, {}, {}>>;
            _disableApplicationRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                reset: z.ZodOptional<z.ZodBoolean>;
            }, {}, {}>>;
        }, {}, {}>>;
        _debug: z.ZodOptional<z.ZodBoolean>;
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
            _clearCacheRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
            _restartApplicationRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
            }, {}, {}>>;
            currentTime: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                ntp: z.ZodOptional<z.ZodBoolean>;
                ntpServerAddress: z.ZodOptional<z.ZodString>;
            }, {}, {}>>;
            masterPin: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                activated: z.ZodBoolean;
            }, {}, {}>>;
            OSDLanguage: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                specifier: z.ZodString;
            }, {}, {}>>;
            OSDLock: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                enabled: z.ZodBoolean;
            }, {}, {}>>;
            pictureMode: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                mode: z.ZodEnum<{
                    eco: "eco";
                    cinema: "cinema";
                    expert1: "expert1";
                    expert2: "expert2";
                    game: "game";
                    sports: "sports";
                    normal: "normal";
                    vivid: "vivid";
                }>;
            }, {}, {}>>;
            pictureProperty: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
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
                superResolution: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    off: "off";
                    low: "low";
                    medium: "medium";
                    high: "high";
                }>>>;
                colorGamut: z.ZodOptional<z.ZodEnum<{
                    normal: "normal";
                    extended: "extended";
                }>>;
                dynamicColor: z.ZodOptional<z.ZodEnum<{
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
            property: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                alias: z.ZodOptional<z.ZodString>;
                operation_mode_after_screen_share: z.ZodOptional<z.ZodString>;
                key_delivery_to_simplink: z.ZodOptional<z.ZodString>;
                cec_device_control: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, {}, {}>>;
            proxyBypassList: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                urlList: z.ZodArray<z.ZodString>;
            }, {}, {}>>;
            serverProperty: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                serverIp: z.ZodString;
                serverPort: z.ZodNumber;
                secureConnection: z.ZodBoolean;
                appLaunchMode: z.ZodEnum<{
                    local: "local";
                    remote: "remote";
                    usb: "usb";
                }>;
                appType: z.ZodOptional<z.ZodEnum<{
                    IPK: "IPK";
                    ZIP: "ZIP";
                }>>;
                fqdnMode: z.ZodBoolean;
                fqdnAddr: z.ZodString;
                appLaunchDeviceId: z.ZodOptional<z.ZodString>;
                autoSet: z.ZodOptional<z.ZodEnum<{
                    off: "off";
                    on: "on";
                }>>;
            }, {}, {}>>;
            timeZone: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                timeZone: z.ZodObject<{
                    continent: z.ZodString;
                    country: z.ZodString;
                    city: z.ZodString;
                }, {}, {}>;
            }, {}, {}>>;
            USBLock: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                enabled: z.ZodBoolean;
            }, {}, {}>>;
        }, {}, {}>>;
        device: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        power: z.ZodOptional<z.ZodObject<{
            _powerCommandRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                powerCommand: z.ZodEnum<{
                    powerOff: "powerOff";
                    reboot: "reboot";
                }>;
            }, {}, {}>>;
            displayMode: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                displayMode: z.ZodEnum<{
                    "Screen Off": "Screen Off";
                    Active: "Active";
                }>;
            }, {}, {}>>;
            dpmWakeup: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                dpmSignalType: z.ZodEnum<{
                    clock: "clock";
                    clockAndData: "clockAndData";
                }>;
            }, {}, {}>>;
            pmMode: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                mode: z.ZodEnum<{
                    powerOff: "powerOff";
                    screenOff: "screenOff";
                    screenOffAlways: "screenOffAlways";
                    screenOffBacklight: "screenOffBacklight";
                    sustainAspectRatio: "sustainAspectRatio";
                    networkReady: "networkReady";
                }>;
            }, {}, {}>>;
            powerOnDelay: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                delayTime: z.ZodNumber;
            }, {}, {}>>;
            wakeOnLan: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                wakeOnLan: z.ZodBoolean;
            }, {}, {}>>;
        }, {}, {}>>;
        security: z.ZodOptional<z.ZodObject<{
            serverCertificateList: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                serverCertificateList: z.ZodArray<z.ZodString>;
            }, {}, {}>>;
        }, {}, {}>>;
        signage: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        sound: z.ZodOptional<z.ZodObject<{
            muted: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                muted: z.ZodBoolean;
            }, {}, {}>>;
            externalSpeaker: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                externalSpeaker: z.ZodBoolean;
            }, {}, {}>>;
            soundMode: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                mode: z.ZodEnum<{
                    game: "game";
                    sports: "sports";
                    standard: "standard";
                    movie: "movie";
                    news: "news";
                    music: "music";
                }>;
                balance: z.ZodOptional<z.coerce.ZodCoercedNumber>;
            }, {}, {}>>;
            soundOut: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                speakerType: z.ZodEnum<{
                    tv_speaker: "tv_speaker";
                    bt_soundbar: "bt_soundbar";
                }>;
            }, {}, {}>>;
            volumeLevel: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                level: z.ZodNumber;
                volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
            }, {}, {}>>;
        }, {}, {}>>;
        storage: z.ZodOptional<z.ZodObject<{
            _changeLogoImageRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                uri: z.ZodString;
            }, {}, {}>>;
            _upgradeApplicationRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                to: z.ZodEnum<{
                    local: "local";
                    usb: "usb";
                }>;
                recovery: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodEnum<{
                    ipk: "ipk";
                    zip: "zip";
                }>;
            }, {}, {}>>;
            _upgradeFirmwareRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                uri: z.ZodURL;
            }, {}, {}>>;
        }, {}, {}>>;
        time: z.ZodOptional<z.ZodObject<{
            allOnOffTimers: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                timerList: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodNumber>;
                    type: z.ZodEnum<{
                        OFFTIMER: "OFFTIMER";
                        ONTIMER: "ONTIMER";
                    }>;
                    hour: z.ZodNumber;
                    minute: z.ZodNumber;
                    week: z.ZodNumber;
                }, {}, {}>>;
            }, {}, {}>>;
            holidaySchedule: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                holidayScheduleList: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        customJS: z.ZodOptional<z.ZodObject<{
            _clearBrowsingDataRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                types: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    all: "all";
                    appcache: "appcache";
                    cache: "cache";
                    channelIDs: "channelIDs";
                    cookies: "cookies";
                    fileSystems: "fileSystems";
                    indexedDB: "indexedDB";
                    localStorage: "localStorage";
                    serviceWorkers: "serviceWorkers";
                    webSQL: "webSQL";
                }>>>;
            }, {}, {}>>;
            _disableApplicationRequest: z.ZodOptional<z.ZodObject<{
                _timestamp: z.iso.ZodISODateTime;
                reset: z.ZodOptional<z.ZodBoolean>;
            }, {}, {}>>;
        }, {}, {}>>;
        _debug: z.ZodOptional<z.ZodBoolean>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentState = z.infer<typeof LunaAgentState>;
export declare const LunaAgentStatusDetail: z.ZodObject<{
    configuration: z.ZodOptional<z.ZodObject<{
        currentTime: z.ZodOptional<z.ZodObject<{
            year: z.ZodNumber;
            month: z.ZodNumber;
            day: z.ZodNumber;
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            sec: z.ZodNumber;
        }, {}, {}>>;
        localeList: z.ZodOptional<z.ZodObject<{
            localeList: z.ZodArray<z.ZodObject<{
                language: z.ZodString;
                languageCode: z.ZodString;
                countries: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    specifier: z.ZodString;
                }, {}, {}>>;
            }, {}, {}>>;
        }, {}, {}>>;
        timeZoneList: z.ZodOptional<z.ZodObject<{
            timeZone: z.ZodArray<z.ZodObject<{
                continent: z.ZodString;
                country: z.ZodString;
                city: z.ZodString;
            }, {}, {}>>;
        }, {}, {}>>;
        _debug: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    device: z.ZodOptional<z.ZodObject<{
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
            checkScreen: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                colorValid: z.ZodBoolean;
                drawRGB: z.ZodNumber;
                hexValue: z.ZodString;
                readRGB: z.ZodNumber;
            }, {}, {}>>>;
            fan: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                closedLoop: z.ZodOptional<z.ZodBoolean>;
                openLoop: z.ZodOptional<z.ZodBoolean>;
            }, {}, {}>>>;
            humidity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            illuminance: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            rotation: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                0: "0";
                90: "90";
                180: "180";
                270: "270";
            }>>>;
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
        _debug: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    inputSource: z.ZodOptional<z.ZodObject<{
        externalInputList: z.ZodOptional<z.ZodObject<{
            inputSourceList: z.ZodArray<z.ZodObject<{
                inputPort: z.ZodString;
                signalDetection: z.ZodBoolean;
                vendorID: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, {}, {}>>;
            count: z.ZodNumber;
            currentInputPort: z.ZodString;
        }, {}, {}>>;
        _debug: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    power: z.ZodOptional<z.ZodObject<{
        _debug: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    security: z.ZodOptional<z.ZodObject<{
        serverCertificateList: z.ZodOptional<z.ZodObject<{
            serverCertificateList: z.ZodArray<z.ZodObject<{
                domainName: z.ZodOptional<z.ZodString>;
                issuerName: z.ZodOptional<z.ZodString>;
                validFrom: z.ZodOptional<z.iso.ZodISODateTime>;
                validTo: z.ZodOptional<z.iso.ZodISODateTime>;
            }, {}, {}>>;
        }, {}, {}>>;
        _debug: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    signage: z.ZodOptional<z.ZodObject<{
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
    }, {}, {}>>;
    sound: z.ZodOptional<z.ZodObject<{
        _debug: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    storage: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        usbInfo: z.ZodOptional<z.ZodObject<{
            usbList: z.ZodArray<z.ZodObject<{
                usbName: z.ZodString;
                vendor: z.ZodString;
                product: z.ZodString;
                deviceId: z.ZodOptional<z.ZodString>;
            }, {}, {}>>;
        }, {}, {}>>;
        storageInfo: z.ZodOptional<z.ZodObject<{
            free: z.coerce.ZodCoercedNumber;
            total: z.coerce.ZodCoercedNumber;
            used: z.coerce.ZodCoercedNumber;
            externalMemory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                free: z.coerce.ZodCoercedNumber;
                total: z.coerce.ZodCoercedNumber;
                used: z.coerce.ZodCoercedNumber;
            }, {}, {}>>>;
        }, {}, {}>>;
        _debug: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    time: z.ZodOptional<z.ZodObject<{
        _debug: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    customJS: z.ZodOptional<z.ZodObject<{
        applicationInfo: z.ZodOptional<z.ZodObject<{
            appinfo: z.ZodObject<{
                icon: z.ZodString;
                id: z.ZodLiteral<"com.lg.app.signage">;
                main: z.ZodString;
                title: z.ZodString;
                type: z.ZodLiteral<"web">;
                version: z.ZodString;
                allowAudioCapture: z.ZodOptional<z.ZodBoolean>;
                allowVideoCapture: z.ZodOptional<z.ZodBoolean>;
                appDescription: z.ZodOptional<z.ZodString>;
                crossDomainSecurity: z.ZodOptional<z.ZodEnum<{
                    low: "low";
                    high: "high";
                    disable: "disable";
                }>>;
                disableBackHistoryAPI: z.ZodOptional<z.ZodBoolean>;
                inspectable: z.ZodOptional<z.ZodBoolean>;
                largeIcon: z.ZodOptional<z.ZodString>;
                splashBackground: z.ZodOptional<z.ZodString>;
                supportedOrientations: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    Landscape: "Landscape";
                    InvertedPortrait: "InvertedPortrait";
                    InvertedLandscape: "InvertedLandscape";
                    Portrait: "Portrait";
                }>>>;
                useVirtualKeyboard: z.ZodOptional<z.ZodBoolean>;
                vendor: z.ZodOptional<z.ZodString>;
            }, {}, {}>;
        }, {}, {}>>;
        powerOnOffHistory: z.ZodOptional<z.ZodObject<{
            powerOnOffHistory: z.ZodArray<z.ZodString>;
        }, {}, {}>>;
        webOSVersion: z.ZodOptional<z.ZodObject<{
            webOSVersion: z.ZodString;
        }, {}, {}>>;
        _debug: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentStatusDetail = z.infer<typeof LunaAgentStatusDetail>;
export declare const LunaAgentStatusBase: z.ZodObject<{
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        configuration: z.ZodOptional<z.ZodObject<{
            currentTime: z.ZodOptional<z.ZodObject<{
                year: z.ZodNumber;
                month: z.ZodNumber;
                day: z.ZodNumber;
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                sec: z.ZodNumber;
            }, {}, {}>>;
            localeList: z.ZodOptional<z.ZodObject<{
                localeList: z.ZodArray<z.ZodObject<{
                    language: z.ZodString;
                    languageCode: z.ZodString;
                    countries: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        specifier: z.ZodString;
                    }, {}, {}>>;
                }, {}, {}>>;
            }, {}, {}>>;
            timeZoneList: z.ZodOptional<z.ZodObject<{
                timeZone: z.ZodArray<z.ZodObject<{
                    continent: z.ZodString;
                    country: z.ZodString;
                    city: z.ZodString;
                }, {}, {}>>;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        device: z.ZodOptional<z.ZodObject<{
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
                checkScreen: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    colorValid: z.ZodBoolean;
                    drawRGB: z.ZodNumber;
                    hexValue: z.ZodString;
                    readRGB: z.ZodNumber;
                }, {}, {}>>>;
                fan: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    closedLoop: z.ZodOptional<z.ZodBoolean>;
                    openLoop: z.ZodOptional<z.ZodBoolean>;
                }, {}, {}>>>;
                humidity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                illuminance: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                rotation: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    0: "0";
                    90: "90";
                    180: "180";
                    270: "270";
                }>>>;
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
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        inputSource: z.ZodOptional<z.ZodObject<{
            externalInputList: z.ZodOptional<z.ZodObject<{
                inputSourceList: z.ZodArray<z.ZodObject<{
                    inputPort: z.ZodString;
                    signalDetection: z.ZodBoolean;
                    vendorID: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, {}, {}>>;
                count: z.ZodNumber;
                currentInputPort: z.ZodString;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        power: z.ZodOptional<z.ZodObject<{
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        security: z.ZodOptional<z.ZodObject<{
            serverCertificateList: z.ZodOptional<z.ZodObject<{
                serverCertificateList: z.ZodArray<z.ZodObject<{
                    domainName: z.ZodOptional<z.ZodString>;
                    issuerName: z.ZodOptional<z.ZodString>;
                    validFrom: z.ZodOptional<z.iso.ZodISODateTime>;
                    validTo: z.ZodOptional<z.iso.ZodISODateTime>;
                }, {}, {}>>;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        signage: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        sound: z.ZodOptional<z.ZodObject<{
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        storage: z.ZodOptional<z.ZodObject<{
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
            }, {}, {}>>;
            usbInfo: z.ZodOptional<z.ZodObject<{
                usbList: z.ZodArray<z.ZodObject<{
                    usbName: z.ZodString;
                    vendor: z.ZodString;
                    product: z.ZodString;
                    deviceId: z.ZodOptional<z.ZodString>;
                }, {}, {}>>;
            }, {}, {}>>;
            storageInfo: z.ZodOptional<z.ZodObject<{
                free: z.coerce.ZodCoercedNumber;
                total: z.coerce.ZodCoercedNumber;
                used: z.coerce.ZodCoercedNumber;
                externalMemory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    free: z.coerce.ZodCoercedNumber;
                    total: z.coerce.ZodCoercedNumber;
                    used: z.coerce.ZodCoercedNumber;
                }, {}, {}>>>;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        time: z.ZodOptional<z.ZodObject<{
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        customJS: z.ZodOptional<z.ZodObject<{
            applicationInfo: z.ZodOptional<z.ZodObject<{
                appinfo: z.ZodObject<{
                    icon: z.ZodString;
                    id: z.ZodLiteral<"com.lg.app.signage">;
                    main: z.ZodString;
                    title: z.ZodString;
                    type: z.ZodLiteral<"web">;
                    version: z.ZodString;
                    allowAudioCapture: z.ZodOptional<z.ZodBoolean>;
                    allowVideoCapture: z.ZodOptional<z.ZodBoolean>;
                    appDescription: z.ZodOptional<z.ZodString>;
                    crossDomainSecurity: z.ZodOptional<z.ZodEnum<{
                        low: "low";
                        high: "high";
                        disable: "disable";
                    }>>;
                    disableBackHistoryAPI: z.ZodOptional<z.ZodBoolean>;
                    inspectable: z.ZodOptional<z.ZodBoolean>;
                    largeIcon: z.ZodOptional<z.ZodString>;
                    splashBackground: z.ZodOptional<z.ZodString>;
                    supportedOrientations: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                        Landscape: "Landscape";
                        InvertedPortrait: "InvertedPortrait";
                        InvertedLandscape: "InvertedLandscape";
                        Portrait: "Portrait";
                    }>>>;
                    useVirtualKeyboard: z.ZodOptional<z.ZodBoolean>;
                    vendor: z.ZodOptional<z.ZodString>;
                }, {}, {}>;
            }, {}, {}>>;
            powerOnOffHistory: z.ZodOptional<z.ZodObject<{
                powerOnOffHistory: z.ZodArray<z.ZodString>;
            }, {}, {}>>;
            webOSVersion: z.ZodOptional<z.ZodObject<{
                webOSVersion: z.ZodString;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
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
            currentTime: z.ZodOptional<z.ZodObject<{
                year: z.ZodNumber;
                month: z.ZodNumber;
                day: z.ZodNumber;
                hour: z.ZodNumber;
                minute: z.ZodNumber;
                sec: z.ZodNumber;
            }, {}, {}>>;
            localeList: z.ZodOptional<z.ZodObject<{
                localeList: z.ZodArray<z.ZodObject<{
                    language: z.ZodString;
                    languageCode: z.ZodString;
                    countries: z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        specifier: z.ZodString;
                    }, {}, {}>>;
                }, {}, {}>>;
            }, {}, {}>>;
            timeZoneList: z.ZodOptional<z.ZodObject<{
                timeZone: z.ZodArray<z.ZodObject<{
                    continent: z.ZodString;
                    country: z.ZodString;
                    city: z.ZodString;
                }, {}, {}>>;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        device: z.ZodOptional<z.ZodObject<{
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
                checkScreen: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    colorValid: z.ZodBoolean;
                    drawRGB: z.ZodNumber;
                    hexValue: z.ZodString;
                    readRGB: z.ZodNumber;
                }, {}, {}>>>;
                fan: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                    closedLoop: z.ZodOptional<z.ZodBoolean>;
                    openLoop: z.ZodOptional<z.ZodBoolean>;
                }, {}, {}>>>;
                humidity: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                illuminance: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                rotation: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
                    0: "0";
                    90: "90";
                    180: "180";
                    270: "270";
                }>>>;
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
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        inputSource: z.ZodOptional<z.ZodObject<{
            externalInputList: z.ZodOptional<z.ZodObject<{
                inputSourceList: z.ZodArray<z.ZodObject<{
                    inputPort: z.ZodString;
                    signalDetection: z.ZodBoolean;
                    vendorID: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                }, {}, {}>>;
                count: z.ZodNumber;
                currentInputPort: z.ZodString;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        power: z.ZodOptional<z.ZodObject<{
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        security: z.ZodOptional<z.ZodObject<{
            serverCertificateList: z.ZodOptional<z.ZodObject<{
                serverCertificateList: z.ZodArray<z.ZodObject<{
                    domainName: z.ZodOptional<z.ZodString>;
                    issuerName: z.ZodOptional<z.ZodString>;
                    validFrom: z.ZodOptional<z.iso.ZodISODateTime>;
                    validTo: z.ZodOptional<z.iso.ZodISODateTime>;
                }, {}, {}>>;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        signage: z.ZodOptional<z.ZodObject<{
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
        }, {}, {}>>;
        sound: z.ZodOptional<z.ZodObject<{
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        storage: z.ZodOptional<z.ZodObject<{
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
            }, {}, {}>>;
            usbInfo: z.ZodOptional<z.ZodObject<{
                usbList: z.ZodArray<z.ZodObject<{
                    usbName: z.ZodString;
                    vendor: z.ZodString;
                    product: z.ZodString;
                    deviceId: z.ZodOptional<z.ZodString>;
                }, {}, {}>>;
            }, {}, {}>>;
            storageInfo: z.ZodOptional<z.ZodObject<{
                free: z.coerce.ZodCoercedNumber;
                total: z.coerce.ZodCoercedNumber;
                used: z.coerce.ZodCoercedNumber;
                externalMemory: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    free: z.coerce.ZodCoercedNumber;
                    total: z.coerce.ZodCoercedNumber;
                    used: z.coerce.ZodCoercedNumber;
                }, {}, {}>>>;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        time: z.ZodOptional<z.ZodObject<{
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        customJS: z.ZodOptional<z.ZodObject<{
            applicationInfo: z.ZodOptional<z.ZodObject<{
                appinfo: z.ZodObject<{
                    icon: z.ZodString;
                    id: z.ZodLiteral<"com.lg.app.signage">;
                    main: z.ZodString;
                    title: z.ZodString;
                    type: z.ZodLiteral<"web">;
                    version: z.ZodString;
                    allowAudioCapture: z.ZodOptional<z.ZodBoolean>;
                    allowVideoCapture: z.ZodOptional<z.ZodBoolean>;
                    appDescription: z.ZodOptional<z.ZodString>;
                    crossDomainSecurity: z.ZodOptional<z.ZodEnum<{
                        low: "low";
                        high: "high";
                        disable: "disable";
                    }>>;
                    disableBackHistoryAPI: z.ZodOptional<z.ZodBoolean>;
                    inspectable: z.ZodOptional<z.ZodBoolean>;
                    largeIcon: z.ZodOptional<z.ZodString>;
                    splashBackground: z.ZodOptional<z.ZodString>;
                    supportedOrientations: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                        Landscape: "Landscape";
                        InvertedPortrait: "InvertedPortrait";
                        InvertedLandscape: "InvertedLandscape";
                        Portrait: "Portrait";
                    }>>>;
                    useVirtualKeyboard: z.ZodOptional<z.ZodBoolean>;
                    vendor: z.ZodOptional<z.ZodString>;
                }, {}, {}>;
            }, {}, {}>>;
            powerOnOffHistory: z.ZodOptional<z.ZodObject<{
                powerOnOffHistory: z.ZodArray<z.ZodString>;
            }, {}, {}>>;
            webOSVersion: z.ZodOptional<z.ZodObject<{
                webOSVersion: z.ZodString;
            }, {}, {}>>;
            _debug: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentStatus = z.infer<typeof LunaAgentStatus>;
