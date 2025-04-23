import { z } from 'zod';
export declare const LUNA_AGENT_URN = "urn:dsbunny:agent:luna";
export declare const LunaAgentStateDetail: z.ZodObject<{
    screenshot: z.ZodOptional<z.ZodObject<{
        timestamp: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        timestamp: string;
    }, {
        url: string;
        timestamp: string;
    }>>;
    firmware: z.ZodOptional<z.ZodObject<{
        version: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        version: string;
    }, {
        url: string;
        version: string;
    }>>;
    app: z.ZodOptional<z.ZodObject<{
        version: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        version: string;
    }, {
        url: string;
        version: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    screenshot?: {
        url: string;
        timestamp: string;
    } | undefined;
    firmware?: {
        url: string;
        version: string;
    } | undefined;
    app?: {
        url: string;
        version: string;
    } | undefined;
}, {
    screenshot?: {
        url: string;
        timestamp: string;
    } | undefined;
    firmware?: {
        url: string;
        version: string;
    } | undefined;
    app?: {
        url: string;
        version: string;
    } | undefined;
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
        screenshot: z.ZodOptional<z.ZodObject<{
            timestamp: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            timestamp: string;
        }, {
            url: string;
            timestamp: string;
        }>>;
        firmware: z.ZodOptional<z.ZodObject<{
            version: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            version: string;
        }, {
            url: string;
            version: string;
        }>>;
        app: z.ZodOptional<z.ZodObject<{
            version: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            version: string;
        }, {
            url: string;
            version: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        screenshot?: {
            url: string;
            timestamp: string;
        } | undefined;
        firmware?: {
            url: string;
            version: string;
        } | undefined;
        app?: {
            url: string;
            version: string;
        } | undefined;
    }, {
        screenshot?: {
            url: string;
            timestamp: string;
        } | undefined;
        firmware?: {
            url: string;
            version: string;
        } | undefined;
        app?: {
            url: string;
            version: string;
        } | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        screenshot?: {
            url: string;
            timestamp: string;
        } | undefined;
        firmware?: {
            url: string;
            version: string;
        } | undefined;
        app?: {
            url: string;
            version: string;
        } | undefined;
    } | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
}, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        screenshot?: {
            url: string;
            timestamp: string;
        } | undefined;
        firmware?: {
            url: string;
            version: string;
        } | undefined;
        app?: {
            url: string;
            version: string;
        } | undefined;
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
        screenshot: z.ZodOptional<z.ZodObject<{
            timestamp: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            timestamp: string;
        }, {
            url: string;
            timestamp: string;
        }>>;
        firmware: z.ZodOptional<z.ZodObject<{
            version: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            version: string;
        }, {
            url: string;
            version: string;
        }>>;
        app: z.ZodOptional<z.ZodObject<{
            version: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
            version: string;
        }, {
            url: string;
            version: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        screenshot?: {
            url: string;
            timestamp: string;
        } | undefined;
        firmware?: {
            url: string;
            version: string;
        } | undefined;
        app?: {
            url: string;
            version: string;
        } | undefined;
    }, {
        screenshot?: {
            url: string;
            timestamp: string;
        } | undefined;
        firmware?: {
            url: string;
            version: string;
        } | undefined;
        app?: {
            url: string;
            version: string;
        } | undefined;
    }>>;
}>>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:luna";
    detail: {
        screenshot?: {
            url: string;
            timestamp: string;
        } | undefined;
        firmware?: {
            url: string;
            version: string;
        } | undefined;
        app?: {
            url: string;
            version: string;
        } | undefined;
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
        screenshot?: {
            url: string;
            timestamp: string;
        } | undefined;
        firmware?: {
            url: string;
            version: string;
        } | undefined;
        app?: {
            url: string;
            version: string;
        } | undefined;
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
export declare const LunaAgentStatusDetail: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export type LunaAgentStatusDetail = z.infer<typeof LunaAgentStatusDetail>;
export declare const LunaAgentStatusBase: z.ZodObject<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, {
    url: z.ZodLiteral<"urn:dsbunny:agent:luna">;
    detail: z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:luna";
    detail: {} | null;
}, {
    url: "urn:dsbunny:agent:luna";
    detail: {} | null;
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
    detail: z.ZodNullable<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}>>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:luna";
    detail: {} | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    url: "urn:dsbunny:agent:luna";
    detail: {} | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type LunaAgentStatus = z.infer<typeof LunaAgentStatus>;
