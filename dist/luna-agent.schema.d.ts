import { z } from 'zod';
export declare const LUNA_AGENT_URN = "urn:dsbunny:agent:luna";
export declare const LunaAgentStateDetail: z.ZodObject<{
    ntp: z.ZodOptional<z.ZodBoolean>;
    ntpServerAddress: z.ZodOptional<z.ZodString>;
    pm_mode: z.ZodOptional<z.ZodEnum<["PowerOff", "ScreenOff", "ScreenOffAlways", "ScreenOffBacklight", "SustainAspectRation", "NetworkReady"]>>;
    display_mode: z.ZodOptional<z.ZodEnum<["DISPLAY_OFF", "DISPLAY_ON"]>>;
    screenshot_timestamp: z.ZodOptional<z.ZodString>;
    screenshot_resolution: z.ZodOptional<z.ZodEnum<["thumbnail", "FHD", "HD"]>>;
    firmware_version: z.ZodOptional<z.ZodString>;
    firmware_url: z.ZodOptional<z.ZodString>;
    app_version: z.ZodOptional<z.ZodString>;
    app_url: z.ZodOptional<z.ZodString>;
    timer_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["OFFTIMER", "ONTIMER"]>;
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        week: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "OFFTIMER" | "ONTIMER";
        hour: number;
        minute: number;
        week: number;
    }, {
        type: "OFFTIMER" | "ONTIMER";
        hour: number;
        minute: number;
        week: number;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    ntp?: boolean | undefined;
    ntpServerAddress?: string | undefined;
    pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
    display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
    screenshot_timestamp?: string | undefined;
    screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
    firmware_version?: string | undefined;
    firmware_url?: string | undefined;
    app_version?: string | undefined;
    app_url?: string | undefined;
    timer_list?: {
        type: "OFFTIMER" | "ONTIMER";
        hour: number;
        minute: number;
        week: number;
    }[] | undefined;
}, {
    ntp?: boolean | undefined;
    ntpServerAddress?: string | undefined;
    pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
    display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
    screenshot_timestamp?: string | undefined;
    screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
    firmware_version?: string | undefined;
    firmware_url?: string | undefined;
    app_version?: string | undefined;
    app_url?: string | undefined;
    timer_list?: {
        type: "OFFTIMER" | "ONTIMER";
        hour: number;
        minute: number;
        week: number;
    }[] | undefined;
}>;
export type LunaAgentStateDetail = z.infer<typeof LunaAgentStateDetail>;
export declare const LunaAgentStateBase: z.ZodObject<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, {
    url: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        ntp: z.ZodOptional<z.ZodBoolean>;
        ntpServerAddress: z.ZodOptional<z.ZodString>;
        pm_mode: z.ZodOptional<z.ZodEnum<["PowerOff", "ScreenOff", "ScreenOffAlways", "ScreenOffBacklight", "SustainAspectRation", "NetworkReady"]>>;
        display_mode: z.ZodOptional<z.ZodEnum<["DISPLAY_OFF", "DISPLAY_ON"]>>;
        screenshot_timestamp: z.ZodOptional<z.ZodString>;
        screenshot_resolution: z.ZodOptional<z.ZodEnum<["thumbnail", "FHD", "HD"]>>;
        firmware_version: z.ZodOptional<z.ZodString>;
        firmware_url: z.ZodOptional<z.ZodString>;
        app_version: z.ZodOptional<z.ZodString>;
        app_url: z.ZodOptional<z.ZodString>;
        timer_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["OFFTIMER", "ONTIMER"]>;
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            week: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }, {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        ntp?: boolean | undefined;
        ntpServerAddress?: string | undefined;
        pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
        display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
        screenshot_timestamp?: string | undefined;
        screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
        firmware_version?: string | undefined;
        firmware_url?: string | undefined;
        app_version?: string | undefined;
        app_url?: string | undefined;
        timer_list?: {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }[] | undefined;
    }, {
        ntp?: boolean | undefined;
        ntpServerAddress?: string | undefined;
        pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
        display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
        screenshot_timestamp?: string | undefined;
        screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
        firmware_version?: string | undefined;
        firmware_url?: string | undefined;
        app_version?: string | undefined;
        app_url?: string | undefined;
        timer_list?: {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }[] | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        ntp?: boolean | undefined;
        ntpServerAddress?: string | undefined;
        pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
        display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
        screenshot_timestamp?: string | undefined;
        screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
        firmware_version?: string | undefined;
        firmware_url?: string | undefined;
        app_version?: string | undefined;
        app_url?: string | undefined;
        timer_list?: {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }[] | undefined;
    } | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
}, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        ntp?: boolean | undefined;
        ntpServerAddress?: string | undefined;
        pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
        display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
        screenshot_timestamp?: string | undefined;
        screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
        firmware_version?: string | undefined;
        firmware_url?: string | undefined;
        app_version?: string | undefined;
        app_url?: string | undefined;
        timer_list?: {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }[] | undefined;
    } | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
}>;
export type LunaAgentStateBase = z.infer<typeof LunaAgentStateBase>;
export declare const LunaAgentState: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, {
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>, z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, {
    url: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        ntp: z.ZodOptional<z.ZodBoolean>;
        ntpServerAddress: z.ZodOptional<z.ZodString>;
        pm_mode: z.ZodOptional<z.ZodEnum<["PowerOff", "ScreenOff", "ScreenOffAlways", "ScreenOffBacklight", "SustainAspectRation", "NetworkReady"]>>;
        display_mode: z.ZodOptional<z.ZodEnum<["DISPLAY_OFF", "DISPLAY_ON"]>>;
        screenshot_timestamp: z.ZodOptional<z.ZodString>;
        screenshot_resolution: z.ZodOptional<z.ZodEnum<["thumbnail", "FHD", "HD"]>>;
        firmware_version: z.ZodOptional<z.ZodString>;
        firmware_url: z.ZodOptional<z.ZodString>;
        app_version: z.ZodOptional<z.ZodString>;
        app_url: z.ZodOptional<z.ZodString>;
        timer_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["OFFTIMER", "ONTIMER"]>;
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            week: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }, {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        ntp?: boolean | undefined;
        ntpServerAddress?: string | undefined;
        pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
        display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
        screenshot_timestamp?: string | undefined;
        screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
        firmware_version?: string | undefined;
        firmware_url?: string | undefined;
        app_version?: string | undefined;
        app_url?: string | undefined;
        timer_list?: {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }[] | undefined;
    }, {
        ntp?: boolean | undefined;
        ntpServerAddress?: string | undefined;
        pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
        display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
        screenshot_timestamp?: string | undefined;
        screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
        firmware_version?: string | undefined;
        firmware_url?: string | undefined;
        app_version?: string | undefined;
        app_url?: string | undefined;
        timer_list?: {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }[] | undefined;
    }>>;
}>>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        ntp?: boolean | undefined;
        ntpServerAddress?: string | undefined;
        pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
        display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
        screenshot_timestamp?: string | undefined;
        screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
        firmware_version?: string | undefined;
        firmware_url?: string | undefined;
        app_version?: string | undefined;
        app_url?: string | undefined;
        timer_list?: {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }[] | undefined;
    } | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        ntp?: boolean | undefined;
        ntpServerAddress?: string | undefined;
        pm_mode?: "PowerOff" | "ScreenOff" | "ScreenOffAlways" | "ScreenOffBacklight" | "SustainAspectRation" | "NetworkReady" | undefined;
        display_mode?: "DISPLAY_OFF" | "DISPLAY_ON" | undefined;
        screenshot_timestamp?: string | undefined;
        screenshot_resolution?: "thumbnail" | "FHD" | "HD" | undefined;
        firmware_version?: string | undefined;
        firmware_url?: string | undefined;
        app_version?: string | undefined;
        app_url?: string | undefined;
        timer_list?: {
            type: "OFFTIMER" | "ONTIMER";
            hour: number;
            minute: number;
            week: number;
        }[] | undefined;
    } | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type LunaAgentState = z.infer<typeof LunaAgentState>;
export declare const LunaAgentStatusDetail: z.ZodObject<{
    year: z.ZodNumber;
    month: z.ZodNumber;
    day: z.ZodNumber;
    hour: z.ZodNumber;
    minute: z.ZodNumber;
    sec: z.ZodNumber;
    cpus: z.ZodOptional<z.ZodArray<z.ZodObject<{
        model: z.ZodString;
        times: z.ZodObject<{
            user: z.ZodNumber;
            nice: z.ZodNumber;
            sys: z.ZodNumber;
            idle: z.ZodNumber;
            irq: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            user: number;
            nice: number;
            sys: number;
            idle: number;
            irq: number;
        }, {
            user: number;
            nice: number;
            sys: number;
            idle: number;
            irq: number;
        }>;
        memory: z.ZodObject<{
            total: z.ZodNumber;
            free: z.ZodNumber;
            used: z.ZodNumber;
            buffer: z.ZodNumber;
            cached: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            total: number;
            free: number;
            used: number;
            buffer: number;
            cached: number;
        }, {
            total: number;
            free: number;
            used: number;
            buffer: number;
            cached: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        model: string;
        times: {
            user: number;
            nice: number;
            sys: number;
            idle: number;
            irq: number;
        };
        memory: {
            total: number;
            free: number;
            used: number;
            buffer: number;
            cached: number;
        };
    }, {
        model: string;
        times: {
            user: number;
            nice: number;
            sys: number;
            idle: number;
            irq: number;
        };
        memory: {
            total: number;
            free: number;
            used: number;
            buffer: number;
            cached: number;
        };
    }>, "many">>;
    screenshot: z.ZodOptional<z.ZodObject<{
        data: z.ZodString;
        size: z.ZodNumber;
        encoding: z.ZodLiteral<"Base64">;
    }, "strip", z.ZodTypeAny, {
        data: string;
        size: number;
        encoding: "Base64";
    }, {
        data: string;
        size: number;
        encoding: "Base64";
    }>>;
    firmware_status: z.ZodOptional<z.ZodEnum<["idle", "downloading", "ready", "in progress", "completed", "fail"]>>;
    firmware_download_progress: z.ZodOptional<z.ZodNumber>;
    firmware_upgrade_progress: z.ZodOptional<z.ZodNumber>;
    usb_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        usbName: z.ZodString;
        vendor: z.ZodString;
        product: z.ZodString;
        deviceId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        usbName: string;
        vendor: string;
        product: string;
        deviceId: string;
    }, {
        usbName: string;
        vendor: string;
        product: string;
        deviceId: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    hour: number;
    minute: number;
    year: number;
    month: number;
    day: number;
    sec: number;
    cpus?: {
        model: string;
        times: {
            user: number;
            nice: number;
            sys: number;
            idle: number;
            irq: number;
        };
        memory: {
            total: number;
            free: number;
            used: number;
            buffer: number;
            cached: number;
        };
    }[] | undefined;
    screenshot?: {
        data: string;
        size: number;
        encoding: "Base64";
    } | undefined;
    firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
    firmware_download_progress?: number | undefined;
    firmware_upgrade_progress?: number | undefined;
    usb_list?: {
        usbName: string;
        vendor: string;
        product: string;
        deviceId: string;
    }[] | undefined;
}, {
    hour: number;
    minute: number;
    year: number;
    month: number;
    day: number;
    sec: number;
    cpus?: {
        model: string;
        times: {
            user: number;
            nice: number;
            sys: number;
            idle: number;
            irq: number;
        };
        memory: {
            total: number;
            free: number;
            used: number;
            buffer: number;
            cached: number;
        };
    }[] | undefined;
    screenshot?: {
        data: string;
        size: number;
        encoding: "Base64";
    } | undefined;
    firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
    firmware_download_progress?: number | undefined;
    firmware_upgrade_progress?: number | undefined;
    usb_list?: {
        usbName: string;
        vendor: string;
        product: string;
        deviceId: string;
    }[] | undefined;
}>;
export type LunaAgentStatusDetail = z.infer<typeof LunaAgentStatusDetail>;
export declare const LunaAgentStatusBase: z.ZodObject<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, {
    url: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        year: z.ZodNumber;
        month: z.ZodNumber;
        day: z.ZodNumber;
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        sec: z.ZodNumber;
        cpus: z.ZodOptional<z.ZodArray<z.ZodObject<{
            model: z.ZodString;
            times: z.ZodObject<{
                user: z.ZodNumber;
                nice: z.ZodNumber;
                sys: z.ZodNumber;
                idle: z.ZodNumber;
                irq: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            }, {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            }>;
            memory: z.ZodObject<{
                total: z.ZodNumber;
                free: z.ZodNumber;
                used: z.ZodNumber;
                buffer: z.ZodNumber;
                cached: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            }, {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }, {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }>, "many">>;
        screenshot: z.ZodOptional<z.ZodObject<{
            data: z.ZodString;
            size: z.ZodNumber;
            encoding: z.ZodLiteral<"Base64">;
        }, "strip", z.ZodTypeAny, {
            data: string;
            size: number;
            encoding: "Base64";
        }, {
            data: string;
            size: number;
            encoding: "Base64";
        }>>;
        firmware_status: z.ZodOptional<z.ZodEnum<["idle", "downloading", "ready", "in progress", "completed", "fail"]>>;
        firmware_download_progress: z.ZodOptional<z.ZodNumber>;
        firmware_upgrade_progress: z.ZodOptional<z.ZodNumber>;
        usb_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            usbName: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            deviceId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }, {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        hour: number;
        minute: number;
        year: number;
        month: number;
        day: number;
        sec: number;
        cpus?: {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }[] | undefined;
        screenshot?: {
            data: string;
            size: number;
            encoding: "Base64";
        } | undefined;
        firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
        firmware_download_progress?: number | undefined;
        firmware_upgrade_progress?: number | undefined;
        usb_list?: {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }[] | undefined;
    }, {
        hour: number;
        minute: number;
        year: number;
        month: number;
        day: number;
        sec: number;
        cpus?: {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }[] | undefined;
        screenshot?: {
            data: string;
            size: number;
            encoding: "Base64";
        } | undefined;
        firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
        firmware_download_progress?: number | undefined;
        firmware_upgrade_progress?: number | undefined;
        usb_list?: {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }[] | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        hour: number;
        minute: number;
        year: number;
        month: number;
        day: number;
        sec: number;
        cpus?: {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }[] | undefined;
        screenshot?: {
            data: string;
            size: number;
            encoding: "Base64";
        } | undefined;
        firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
        firmware_download_progress?: number | undefined;
        firmware_upgrade_progress?: number | undefined;
        usb_list?: {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }[] | undefined;
    } | null;
}, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        hour: number;
        minute: number;
        year: number;
        month: number;
        day: number;
        sec: number;
        cpus?: {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }[] | undefined;
        screenshot?: {
            data: string;
            size: number;
            encoding: "Base64";
        } | undefined;
        firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
        firmware_download_progress?: number | undefined;
        firmware_upgrade_progress?: number | undefined;
        usb_list?: {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }[] | undefined;
    } | null;
}>;
export type LunaAgentStatusBase = z.infer<typeof LunaAgentStatusBase>;
export declare const LunaAgentStatus: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, {
    create_timestamp: z.ZodString;
    modify_timestamp: z.ZodString;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}>, z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, {
    url: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        year: z.ZodNumber;
        month: z.ZodNumber;
        day: z.ZodNumber;
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        sec: z.ZodNumber;
        cpus: z.ZodOptional<z.ZodArray<z.ZodObject<{
            model: z.ZodString;
            times: z.ZodObject<{
                user: z.ZodNumber;
                nice: z.ZodNumber;
                sys: z.ZodNumber;
                idle: z.ZodNumber;
                irq: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            }, {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            }>;
            memory: z.ZodObject<{
                total: z.ZodNumber;
                free: z.ZodNumber;
                used: z.ZodNumber;
                buffer: z.ZodNumber;
                cached: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            }, {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            }>;
        }, "strip", z.ZodTypeAny, {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }, {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }>, "many">>;
        screenshot: z.ZodOptional<z.ZodObject<{
            data: z.ZodString;
            size: z.ZodNumber;
            encoding: z.ZodLiteral<"Base64">;
        }, "strip", z.ZodTypeAny, {
            data: string;
            size: number;
            encoding: "Base64";
        }, {
            data: string;
            size: number;
            encoding: "Base64";
        }>>;
        firmware_status: z.ZodOptional<z.ZodEnum<["idle", "downloading", "ready", "in progress", "completed", "fail"]>>;
        firmware_download_progress: z.ZodOptional<z.ZodNumber>;
        firmware_upgrade_progress: z.ZodOptional<z.ZodNumber>;
        usb_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            usbName: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            deviceId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }, {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        hour: number;
        minute: number;
        year: number;
        month: number;
        day: number;
        sec: number;
        cpus?: {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }[] | undefined;
        screenshot?: {
            data: string;
            size: number;
            encoding: "Base64";
        } | undefined;
        firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
        firmware_download_progress?: number | undefined;
        firmware_upgrade_progress?: number | undefined;
        usb_list?: {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }[] | undefined;
    }, {
        hour: number;
        minute: number;
        year: number;
        month: number;
        day: number;
        sec: number;
        cpus?: {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }[] | undefined;
        screenshot?: {
            data: string;
            size: number;
            encoding: "Base64";
        } | undefined;
        firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
        firmware_download_progress?: number | undefined;
        firmware_upgrade_progress?: number | undefined;
        usb_list?: {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }[] | undefined;
    }>>;
}>>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        hour: number;
        minute: number;
        year: number;
        month: number;
        day: number;
        sec: number;
        cpus?: {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }[] | undefined;
        screenshot?: {
            data: string;
            size: number;
            encoding: "Base64";
        } | undefined;
        firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
        firmware_download_progress?: number | undefined;
        firmware_upgrade_progress?: number | undefined;
        usb_list?: {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }[] | undefined;
    } | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        hour: number;
        minute: number;
        year: number;
        month: number;
        day: number;
        sec: number;
        cpus?: {
            model: string;
            times: {
                user: number;
                nice: number;
                sys: number;
                idle: number;
                irq: number;
            };
            memory: {
                total: number;
                free: number;
                used: number;
                buffer: number;
                cached: number;
            };
        }[] | undefined;
        screenshot?: {
            data: string;
            size: number;
            encoding: "Base64";
        } | undefined;
        firmware_status?: "idle" | "downloading" | "ready" | "in progress" | "completed" | "fail" | undefined;
        firmware_download_progress?: number | undefined;
        firmware_upgrade_progress?: number | undefined;
        usb_list?: {
            usbName: string;
            vendor: string;
            product: string;
            deviceId: string;
        }[] | undefined;
    } | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type LunaAgentStatus = z.infer<typeof LunaAgentStatus>;
