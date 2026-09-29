import * as z from "zod/v4";
export declare const RENDERER_AGENT_URN = "urn:dsbunny:agent:renderer";
export declare const RendererAgentStateDetailSchema: z.ZodObject<{
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
        recipe_id: z.ZodUUID;
        ref_id: z.ZodOptional<z.ZodString>;
        href: z.ZodURL;
        expires: z.ZodOptional<z.ZodISODateTime>;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, z.core.$strip>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, z.core.$strip>>;
    storage: z.ZodEnum<{
        usb: "usb";
        internal: "internal";
    }>;
    usb: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        vendor: z.ZodString;
        product: z.ZodString;
        device_id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RendererAgentStateDetail = z.infer<typeof RendererAgentStateDetailSchema>;
export declare const RendererScreenOrientationSchema: z.ZodObject<{
    type: z.ZodEnum<{
        "portrait-primary": "portrait-primary";
        "portrait-secondary": "portrait-secondary";
        "landscape-primary": "landscape-primary";
        "landscape-secondary": "landscape-secondary";
    }>;
    angle: z.ZodNumber;
}, z.core.$strip>;
export type RendererScreenOrientation = z.infer<typeof RendererScreenOrientationSchema>;
export declare const RendererScreenSchema: z.ZodObject<{
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
    }, z.core.$strip>;
    device_pixel_ratio: z.ZodNumber;
}, z.core.$strip>;
export type RendererScreen = z.infer<typeof RendererScreenSchema>;
export declare const RendererAgentStateBaseSchema: z.ZodObject<{
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
            recipe_id: z.ZodUUID;
            ref_id: z.ZodOptional<z.ZodString>;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>>;
        storage: z.ZodEnum<{
            usb: "usb";
            internal: "internal";
        }>;
        usb: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            device_id: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RendererAgentStateBase = z.infer<typeof RendererAgentStateBaseSchema>;
export declare const RendererAgentStateSchema: z.ZodObject<{
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
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
            recipe_id: z.ZodUUID;
            ref_id: z.ZodOptional<z.ZodString>;
            href: z.ZodURL;
            expires: z.ZodOptional<z.ZodISODateTime>;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, z.core.$strip>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, z.core.$strip>>;
        storage: z.ZodEnum<{
            usb: "usb";
            internal: "internal";
        }>;
        usb: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            device_id: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RendererAgentState = z.infer<typeof RendererAgentStateSchema>;
export declare const RendererAgentStatusDetailSchema: z.ZodObject<{
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
        }, z.core.$strip>;
        device_pixel_ratio: z.ZodNumber;
    }, z.core.$strip>;
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
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }, z.core.$strip>], "mime_type">>;
}, z.core.$strip>;
export type RendererAgentStatusDetail = z.infer<typeof RendererAgentStatusDetailSchema>;
export declare const RendererAgentStatusBaseSchema: z.ZodObject<{
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
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
            }, z.core.$strip>;
            device_pixel_ratio: z.ZodNumber;
        }, z.core.$strip>;
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
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }, z.core.$strip>], "mime_type">>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RendererAgentStatusBase = z.infer<typeof RendererAgentStatusBaseSchema>;
export declare const RendererAgentStatusSchema: z.ZodObject<{
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
    has_error: z.ZodDefault<z.ZodBoolean>;
    error_stack: z.ZodNullable<z.ZodString>;
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
            }, z.core.$strip>;
            device_pixel_ratio: z.ZodNumber;
        }, z.core.$strip>;
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
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }, z.core.$strip>, z.ZodObject<{
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }, z.core.$strip>], "mime_type">>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RendererAgentStatus = z.infer<typeof RendererAgentStatusSchema>;
