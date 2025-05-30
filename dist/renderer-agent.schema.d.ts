import { z } from 'zod/v4';
export declare const RENDERER_AGENT_URN = "urn:dsbunny:agent:renderer";
export declare const RendererAgentStateDetail: z.ZodObject<{
    playlist_element_name: z.ZodEnum<{
        "android-play-list": "android-play-list";
        "brightsign-play-list": "brightsign-play-list";
        "brightsign-webgl-play-list": "brightsign-webgl-play-list";
        "luna-play-list": "luna-play-list";
        "web-play-list": "web-play-list";
        "webgl-play-list": "webgl-play-list";
        "webgpu-play-list": "webgpu-play-list";
    }>;
    recipe_link: z.ZodOptional<z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        id: z.ZodUUID;
        href: z.ZodURL;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, {}, {}>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, {}, {}>>;
    storage: z.ZodEnum<{
        usb: "usb";
        internal: "internal";
    }>;
    usb: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        vendor: z.ZodString;
        product: z.ZodString;
        device_id: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type RendererAgentStateDetail = z.infer<typeof RendererAgentStateDetail>;
export declare const RendererScreenOrientation: z.ZodObject<{
    type: z.ZodEnum<{
        "portrait-primary": "portrait-primary";
        "portrait-secondary": "portrait-secondary";
        "landscape-primary": "landscape-primary";
        "landscape-secondary": "landscape-secondary";
    }>;
    angle: z.ZodNumber;
}, {}, {}>;
export type RendererScreenOrientation = z.infer<typeof RendererScreenOrientation>;
export declare const RendererScreen: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_extended: z.ZodBoolean;
    orientation: z.ZodObject<{
        type: z.ZodEnum<{
            "portrait-primary": "portrait-primary";
            "portrait-secondary": "portrait-secondary";
            "landscape-primary": "landscape-primary";
            "landscape-secondary": "landscape-secondary";
        }>;
        angle: z.ZodNumber;
    }, {}, {}>;
    device_pixel_ratio: z.ZodNumber;
}, {}, {}>;
export type RendererScreen = z.infer<typeof RendererScreen>;
export declare const RendererAgentStateBase: z.ZodObject<{
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:renderer">;
    detail: z.ZodNullable<z.ZodObject<{
        playlist_element_name: z.ZodEnum<{
            "android-play-list": "android-play-list";
            "brightsign-play-list": "brightsign-play-list";
            "brightsign-webgl-play-list": "brightsign-webgl-play-list";
            "luna-play-list": "luna-play-list";
            "web-play-list": "web-play-list";
            "webgl-play-list": "webgl-play-list";
            "webgpu-play-list": "webgpu-play-list";
        }>;
        recipe_link: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            id: z.ZodUUID;
            href: z.ZodURL;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, {}, {}>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, {}, {}>>;
        storage: z.ZodEnum<{
            usb: "usb";
            internal: "internal";
        }>;
        usb: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            device_id: z.ZodString;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type RendererAgentStateBase = z.infer<typeof RendererAgentStateBase>;
export declare const RendererAgentState: z.ZodObject<{
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:renderer">;
    detail: z.ZodNullable<z.ZodObject<{
        playlist_element_name: z.ZodEnum<{
            "android-play-list": "android-play-list";
            "brightsign-play-list": "brightsign-play-list";
            "brightsign-webgl-play-list": "brightsign-webgl-play-list";
            "luna-play-list": "luna-play-list";
            "web-play-list": "web-play-list";
            "webgl-play-list": "webgl-play-list";
            "webgpu-play-list": "webgpu-play-list";
        }>;
        recipe_link: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            id: z.ZodUUID;
            href: z.ZodURL;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, {}, {}>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, {}, {}>>;
        storage: z.ZodEnum<{
            usb: "usb";
            internal: "internal";
        }>;
        usb: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            device_id: z.ZodString;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type RendererAgentState = z.infer<typeof RendererAgentState>;
export declare const RendererAgentStatusDetail: z.ZodObject<{
    screen: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_extended: z.ZodBoolean;
        orientation: z.ZodObject<{
            type: z.ZodEnum<{
                "portrait-primary": "portrait-primary";
                "portrait-secondary": "portrait-secondary";
                "landscape-primary": "landscape-primary";
                "landscape-secondary": "landscape-secondary";
            }>;
            angle: z.ZodNumber;
        }, {}, {}>;
        device_pixel_ratio: z.ZodNumber;
    }, {}, {}>;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }, {}, {}>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, {}, {}>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, {}, {}>]>>;
}, {}, {}>;
export type RendererAgentStatusDetail = z.infer<typeof RendererAgentStatusDetail>;
export declare const RendererAgentStatusBase: z.ZodObject<{
    uri: z.ZodLiteral<"urn:dsbunny:agent:renderer">;
    detail: z.ZodNullable<z.ZodObject<{
        screen: z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_extended: z.ZodBoolean;
            orientation: z.ZodObject<{
                type: z.ZodEnum<{
                    "portrait-primary": "portrait-primary";
                    "portrait-secondary": "portrait-secondary";
                    "landscape-primary": "landscape-primary";
                    "landscape-secondary": "landscape-secondary";
                }>;
                angle: z.ZodNumber;
            }, {}, {}>;
            device_pixel_ratio: z.ZodNumber;
        }, {}, {}>;
        capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
            mime_type: z.ZodLiteral<"video">;
            codec: z.ZodString;
            width: z.ZodNumber;
            height: z.ZodNumber;
            frame_rate: z.ZodNumber;
        }, {}, {}>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, {}, {}>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }, {}, {}>]>>;
    }, {}, {}>>;
}, {}, {}>;
export type RendererAgentStatusBase = z.infer<typeof RendererAgentStatusBase>;
export declare const RendererAgentStatus: z.ZodObject<{
    create_timestamp: z.iso.ZodISODateTime;
    modify_timestamp: z.iso.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    uri: z.ZodLiteral<"urn:dsbunny:agent:renderer">;
    detail: z.ZodNullable<z.ZodObject<{
        screen: z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_extended: z.ZodBoolean;
            orientation: z.ZodObject<{
                type: z.ZodEnum<{
                    "portrait-primary": "portrait-primary";
                    "portrait-secondary": "portrait-secondary";
                    "landscape-primary": "landscape-primary";
                    "landscape-secondary": "landscape-secondary";
                }>;
                angle: z.ZodNumber;
            }, {}, {}>;
            device_pixel_ratio: z.ZodNumber;
        }, {}, {}>;
        capabilities: z.ZodArray<z.ZodDiscriminatedUnion<[z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
            mime_type: z.ZodLiteral<"video">;
            codec: z.ZodString;
            width: z.ZodNumber;
            height: z.ZodNumber;
            frame_rate: z.ZodNumber;
        }, {}, {}>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, {}, {}>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }, {}, {}>]>>;
    }, {}, {}>>;
}, {}, {}>;
export type RendererAgentStatus = z.infer<typeof RendererAgentStatus>;
