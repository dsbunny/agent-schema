import { z } from 'zod/v4';
export declare const LUNA_AGENT_URN = "urn:dsbunny:agent:luna";
export declare const LunaAgentStateDetail: z.ZodObject<{
    ntp: z.ZodOptional<z.ZodBoolean>;
    ntpServerAddress: z.ZodOptional<z.ZodString>;
    pm_mode: z.ZodOptional<z.ZodEnum<{
        powerOff: "powerOff";
        screenOff: "screenOff";
        screenOffAlways: "screenOffAlways";
        screenOffBacklight: "screenOffBacklight";
        sustainAspectRation: "sustainAspectRation";
        networkReady: "networkReady";
    }>>;
    display_mode: z.ZodOptional<z.ZodEnum<{
        "Screen Off": "Screen Off";
        Active: "Active";
    }>>;
    screenshot_timestamp: z.ZodOptional<z.iso.ZodISODateTime>;
    screenshot_resolution: z.ZodOptional<z.ZodEnum<{
        thumbnail: "thumbnail";
        FHD: "FHD";
        HD: "HD";
    }>>;
    firmware_version: z.ZodOptional<z.ZodString>;
    firmware_url: z.ZodOptional<z.ZodURL>;
    app_version: z.ZodOptional<z.ZodString>;
    app_url: z.ZodOptional<z.ZodURL>;
    timer_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            OFFTIMER: "OFFTIMER";
            ONTIMER: "ONTIMER";
        }>;
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        week: z.ZodNumber;
    }, {}, {}>>>;
}, {}, {}>;
export type LunaAgentStateDetail = z.infer<typeof LunaAgentStateDetail>;
export declare const LunaAgentStateBase: z.ZodObject<{
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        ntp: z.ZodOptional<z.ZodBoolean>;
        ntpServerAddress: z.ZodOptional<z.ZodString>;
        pm_mode: z.ZodOptional<z.ZodEnum<{
            powerOff: "powerOff";
            screenOff: "screenOff";
            screenOffAlways: "screenOffAlways";
            screenOffBacklight: "screenOffBacklight";
            sustainAspectRation: "sustainAspectRation";
            networkReady: "networkReady";
        }>>;
        display_mode: z.ZodOptional<z.ZodEnum<{
            "Screen Off": "Screen Off";
            Active: "Active";
        }>>;
        screenshot_timestamp: z.ZodOptional<z.iso.ZodISODateTime>;
        screenshot_resolution: z.ZodOptional<z.ZodEnum<{
            thumbnail: "thumbnail";
            FHD: "FHD";
            HD: "HD";
        }>>;
        firmware_version: z.ZodOptional<z.ZodString>;
        firmware_url: z.ZodOptional<z.ZodURL>;
        app_version: z.ZodOptional<z.ZodString>;
        app_url: z.ZodOptional<z.ZodURL>;
        timer_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                OFFTIMER: "OFFTIMER";
                ONTIMER: "ONTIMER";
            }>;
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            week: z.ZodNumber;
        }, {}, {}>>>;
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
        ntp: z.ZodOptional<z.ZodBoolean>;
        ntpServerAddress: z.ZodOptional<z.ZodString>;
        pm_mode: z.ZodOptional<z.ZodEnum<{
            powerOff: "powerOff";
            screenOff: "screenOff";
            screenOffAlways: "screenOffAlways";
            screenOffBacklight: "screenOffBacklight";
            sustainAspectRation: "sustainAspectRation";
            networkReady: "networkReady";
        }>>;
        display_mode: z.ZodOptional<z.ZodEnum<{
            "Screen Off": "Screen Off";
            Active: "Active";
        }>>;
        screenshot_timestamp: z.ZodOptional<z.iso.ZodISODateTime>;
        screenshot_resolution: z.ZodOptional<z.ZodEnum<{
            thumbnail: "thumbnail";
            FHD: "FHD";
            HD: "HD";
        }>>;
        firmware_version: z.ZodOptional<z.ZodString>;
        firmware_url: z.ZodOptional<z.ZodURL>;
        app_version: z.ZodOptional<z.ZodString>;
        app_url: z.ZodOptional<z.ZodURL>;
        timer_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                OFFTIMER: "OFFTIMER";
                ONTIMER: "ONTIMER";
            }>;
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            week: z.ZodNumber;
        }, {}, {}>>>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentState = z.infer<typeof LunaAgentState>;
export declare const LunaAgentStatusDetail: z.ZodObject<{
    date: z.iso.ZodISODateTime;
    cpus: z.ZodOptional<z.ZodArray<z.ZodObject<{
        model: z.ZodString;
        times: z.ZodObject<{
            user: z.ZodNumber;
            nice: z.ZodNumber;
            sys: z.ZodNumber;
            idle: z.ZodNumber;
            irq: z.ZodNumber;
        }, {}, {}>;
    }, {}, {}>>>;
    memory: z.ZodOptional<z.ZodObject<{
        total: z.ZodNumber;
        free: z.ZodNumber;
        used: z.ZodNumber;
        buffer: z.ZodNumber;
        cached: z.ZodNumber;
    }, {}, {}>>;
    screenshot: z.ZodOptional<z.ZodObject<{
        data: z.ZodBase64;
        size: z.ZodNumber;
        encoding: z.ZodLiteral<"Base64">;
    }, {}, {}>>;
    firmware_status: z.ZodOptional<z.ZodEnum<{
        idle: "idle";
        downloading: "downloading";
        ready: "ready";
        "in progress": "in progress";
        completed: "completed";
        fail: "fail";
    }>>;
    firmware_download_progress: z.ZodOptional<z.ZodNumber>;
    firmware_upgrade_progress: z.ZodOptional<z.ZodNumber>;
    usb_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
        usbName: z.ZodString;
        vendor: z.ZodString;
        product: z.ZodString;
        deviceId: z.ZodOptional<z.ZodString>;
    }, {}, {}>>>;
    errors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodNumber;
        entries: z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            text: z.ZodString;
            timestamp: z.ZodString;
        }, {}, {}>>;
    }, {}, {}>>>;
}, {}, {}>;
export type LunaAgentStatusDetail = z.infer<typeof LunaAgentStatusDetail>;
export declare const LunaAgentStatusBase: z.ZodObject<{
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{
        date: z.iso.ZodISODateTime;
        cpus: z.ZodOptional<z.ZodArray<z.ZodObject<{
            model: z.ZodString;
            times: z.ZodObject<{
                user: z.ZodNumber;
                nice: z.ZodNumber;
                sys: z.ZodNumber;
                idle: z.ZodNumber;
                irq: z.ZodNumber;
            }, {}, {}>;
        }, {}, {}>>>;
        memory: z.ZodOptional<z.ZodObject<{
            total: z.ZodNumber;
            free: z.ZodNumber;
            used: z.ZodNumber;
            buffer: z.ZodNumber;
            cached: z.ZodNumber;
        }, {}, {}>>;
        screenshot: z.ZodOptional<z.ZodObject<{
            data: z.ZodBase64;
            size: z.ZodNumber;
            encoding: z.ZodLiteral<"Base64">;
        }, {}, {}>>;
        firmware_status: z.ZodOptional<z.ZodEnum<{
            idle: "idle";
            downloading: "downloading";
            ready: "ready";
            "in progress": "in progress";
            completed: "completed";
            fail: "fail";
        }>>;
        firmware_download_progress: z.ZodOptional<z.ZodNumber>;
        firmware_upgrade_progress: z.ZodOptional<z.ZodNumber>;
        usb_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            usbName: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            deviceId: z.ZodOptional<z.ZodString>;
        }, {}, {}>>>;
        errors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            entries: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                text: z.ZodString;
                timestamp: z.ZodString;
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
        date: z.iso.ZodISODateTime;
        cpus: z.ZodOptional<z.ZodArray<z.ZodObject<{
            model: z.ZodString;
            times: z.ZodObject<{
                user: z.ZodNumber;
                nice: z.ZodNumber;
                sys: z.ZodNumber;
                idle: z.ZodNumber;
                irq: z.ZodNumber;
            }, {}, {}>;
        }, {}, {}>>>;
        memory: z.ZodOptional<z.ZodObject<{
            total: z.ZodNumber;
            free: z.ZodNumber;
            used: z.ZodNumber;
            buffer: z.ZodNumber;
            cached: z.ZodNumber;
        }, {}, {}>>;
        screenshot: z.ZodOptional<z.ZodObject<{
            data: z.ZodBase64;
            size: z.ZodNumber;
            encoding: z.ZodLiteral<"Base64">;
        }, {}, {}>>;
        firmware_status: z.ZodOptional<z.ZodEnum<{
            idle: "idle";
            downloading: "downloading";
            ready: "ready";
            "in progress": "in progress";
            completed: "completed";
            fail: "fail";
        }>>;
        firmware_download_progress: z.ZodOptional<z.ZodNumber>;
        firmware_upgrade_progress: z.ZodOptional<z.ZodNumber>;
        usb_list: z.ZodOptional<z.ZodArray<z.ZodObject<{
            usbName: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            deviceId: z.ZodOptional<z.ZodString>;
        }, {}, {}>>>;
        errors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            entries: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                text: z.ZodString;
                timestamp: z.ZodString;
            }, {}, {}>>;
        }, {}, {}>>>;
    }, {}, {}>>;
}, {}, {}>;
export type LunaAgentStatus = z.infer<typeof LunaAgentStatus>;
