import { z } from 'zod';
export declare const RENDERER_AGENT_URN = "urn:dsbunny:agent:renderer";
export declare const RendererAgentStateDetail: z.ZodObject<{
    playlist_element_name: z.ZodEnum<["luna-play-list", "css-play-list", "webgl-play-list"]>;
    recipe_link: z.ZodOptional<z.ZodObject<{
        "@type": z.ZodLiteral<"RecipeLink">;
        id: z.ZodString;
        href: z.ZodString;
        size: z.ZodNumber;
        hash: z.ZodObject<{
            method: z.ZodLiteral<"SHA256">;
            hex: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            method: "SHA256";
            hex: string;
        }, {
            method: "SHA256";
            hex: string;
        }>;
        md5: z.ZodString;
        integrity: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        "@type": "RecipeLink";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }, {
        "@type": "RecipeLink";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    }>>;
    storage: z.ZodEnum<["usb", "internal"]>;
    usb: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
        vendor: z.ZodString;
        product: z.ZodString;
        device_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        vendor: string;
        product: string;
        device_id: string;
    }, {
        name: string;
        vendor: string;
        product: string;
        device_id: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
    storage: "usb" | "internal";
    recipe_link?: {
        "@type": "RecipeLink";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    } | undefined;
    usb?: {
        name: string;
        vendor: string;
        product: string;
        device_id: string;
    } | undefined;
}, {
    playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
    storage: "usb" | "internal";
    recipe_link?: {
        "@type": "RecipeLink";
        id: string;
        href: string;
        size: number;
        hash: {
            method: "SHA256";
            hex: string;
        };
        md5: string;
        integrity: string;
    } | undefined;
    usb?: {
        name: string;
        vendor: string;
        product: string;
        device_id: string;
    } | undefined;
}>;
export type RendererAgentStateDetail = z.infer<typeof RendererAgentStateDetail>;
export declare const RendererScreenOrientation: z.ZodObject<{
    type: z.ZodEnum<["portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"]>;
    angle: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
    angle: number;
}, {
    type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
    angle: number;
}>;
export type RendererScreenOrientation = z.infer<typeof RendererScreenOrientation>;
export declare const RendererScreen: z.ZodObject<{
    width: z.ZodNumber;
    height: z.ZodNumber;
    is_extended: z.ZodBoolean;
    orientation: z.ZodObject<{
        type: z.ZodEnum<["portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"]>;
        angle: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
        angle: number;
    }, {
        type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
        angle: number;
    }>;
    device_pixel_ratio: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    is_extended: boolean;
    orientation: {
        type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
        angle: number;
    };
    device_pixel_ratio: number;
}, {
    width: number;
    height: number;
    is_extended: boolean;
    orientation: {
        type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
        angle: number;
    };
    device_pixel_ratio: number;
}>;
export type RendererScreen = z.infer<typeof RendererScreen>;
export declare const RendererAgentStateBase: z.ZodObject<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    pull_interval: z.ZodNullable<z.ZodNumber>;
    push_interval: z.ZodNullable<z.ZodNumber>;
    min_backoff_interval: z.ZodNullable<z.ZodNumber>;
    max_backoff_interval: z.ZodNullable<z.ZodNumber>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, {
    url: z.ZodLiteral<"urn:dsbunny:agent:renderer">;
    detail: z.ZodNullable<z.ZodObject<{
        playlist_element_name: z.ZodEnum<["luna-play-list", "css-play-list", "webgl-play-list"]>;
        recipe_link: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            id: z.ZodString;
            href: z.ZodString;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                method: "SHA256";
                hex: string;
            }, {
                method: "SHA256";
                hex: string;
            }>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }, {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }>>;
        storage: z.ZodEnum<["usb", "internal"]>;
        usb: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            device_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        }, {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
        storage: "usb" | "internal";
        recipe_link?: {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | undefined;
        usb?: {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        } | undefined;
    }, {
        playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
        storage: "usb" | "internal";
        recipe_link?: {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | undefined;
        usb?: {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        } | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:renderer";
    detail: {
        playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
        storage: "usb" | "internal";
        recipe_link?: {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | undefined;
        usb?: {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        } | undefined;
    } | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
}, {
    url: "urn:dsbunny:agent:renderer";
    detail: {
        playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
        storage: "usb" | "internal";
        recipe_link?: {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | undefined;
        usb?: {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        } | undefined;
    } | null;
    pull_interval: number | null;
    push_interval: number | null;
    min_backoff_interval: number | null;
    max_backoff_interval: number | null;
}>;
export type RendererAgentStateBase = z.infer<typeof RendererAgentStateBase>;
export declare const RendererAgentState: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    url: z.ZodLiteral<"urn:dsbunny:agent:renderer">;
    detail: z.ZodNullable<z.ZodObject<{
        playlist_element_name: z.ZodEnum<["luna-play-list", "css-play-list", "webgl-play-list"]>;
        recipe_link: z.ZodOptional<z.ZodObject<{
            "@type": z.ZodLiteral<"RecipeLink">;
            id: z.ZodString;
            href: z.ZodString;
            size: z.ZodNumber;
            hash: z.ZodObject<{
                method: z.ZodLiteral<"SHA256">;
                hex: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                method: "SHA256";
                hex: string;
            }, {
                method: "SHA256";
                hex: string;
            }>;
            md5: z.ZodString;
            integrity: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }, {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        }>>;
        storage: z.ZodEnum<["usb", "internal"]>;
        usb: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            vendor: z.ZodString;
            product: z.ZodString;
            device_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        }, {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
        storage: "usb" | "internal";
        recipe_link?: {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | undefined;
        usb?: {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        } | undefined;
    }, {
        playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
        storage: "usb" | "internal";
        recipe_link?: {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | undefined;
        usb?: {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
        } | undefined;
    }>>;
}>>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:renderer";
    detail: {
        playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
        storage: "usb" | "internal";
        recipe_link?: {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | undefined;
        usb?: {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
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
    url: "urn:dsbunny:agent:renderer";
    detail: {
        playlist_element_name: "luna-play-list" | "css-play-list" | "webgl-play-list";
        storage: "usb" | "internal";
        recipe_link?: {
            "@type": "RecipeLink";
            id: string;
            href: string;
            size: number;
            hash: {
                method: "SHA256";
                hex: string;
            };
            md5: string;
            integrity: string;
        } | undefined;
        usb?: {
            name: string;
            vendor: string;
            product: string;
            device_id: string;
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
export type RendererAgentState = z.infer<typeof RendererAgentState>;
export declare const RendererAgentStatusDetail: z.ZodObject<{
    screen: z.ZodObject<{
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_extended: z.ZodBoolean;
        orientation: z.ZodObject<{
            type: z.ZodEnum<["portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"]>;
            angle: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
            angle: number;
        }, {
            type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
            angle: number;
        }>;
        device_pixel_ratio: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        is_extended: boolean;
        orientation: {
            type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
            angle: number;
        };
        device_pixel_ratio: number;
    }, {
        width: number;
        height: number;
        is_extended: boolean;
        orientation: {
            type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
            angle: number;
        };
        device_pixel_ratio: number;
    }>;
    capabilities: z.ZodArray<z.ZodDiscriminatedUnion<"mime_type", [z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"video">;
        codec: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        frame_rate: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    }, {
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"audio">;
        codec: z.ZodString;
        sample_rate: z.ZodNumber;
        channels: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    }, {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        mime_type: z.ZodString;
        mime_subtype: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, {
        mime_type: z.ZodLiteral<"image">;
        width: z.ZodNumber;
        height: z.ZodNumber;
        is_smooth: z.ZodLiteral<false>;
        is_power_efficient: z.ZodLiteral<true>;
    }>, "strip", z.ZodTypeAny, {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    }, {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    screen: {
        width: number;
        height: number;
        is_extended: boolean;
        orientation: {
            type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
            angle: number;
        };
        device_pixel_ratio: number;
    };
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
}, {
    screen: {
        width: number;
        height: number;
        is_extended: boolean;
        orientation: {
            type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
            angle: number;
        };
        device_pixel_ratio: number;
    };
    capabilities: ({
        mime_type: "video";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        width: number;
        height: number;
        frame_rate: number;
    } | {
        mime_type: "audio";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
        codec: string;
        sample_rate: number;
        channels: string;
    } | {
        mime_type: "image";
        mime_subtype: string;
        is_supported: boolean;
        is_smooth: false;
        is_power_efficient: true;
        width: number;
        height: number;
    })[];
}>;
export type RendererAgentStatusDetail = z.infer<typeof RendererAgentStatusDetail>;
export declare const RendererAgentStatusBase: z.ZodObject<z.objectUtil.extendShape<{
    url: z.ZodNullable<z.ZodString>;
    detail: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, {
    url: z.ZodLiteral<"urn:dsbunny:agent:renderer">;
    detail: z.ZodNullable<z.ZodObject<{
        screen: z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_extended: z.ZodBoolean;
            orientation: z.ZodObject<{
                type: z.ZodEnum<["portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"]>;
                angle: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            }, {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            }>;
            device_pixel_ratio: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        }, {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        }>;
        capabilities: z.ZodArray<z.ZodDiscriminatedUnion<"mime_type", [z.ZodObject<z.objectUtil.extendShape<{
            mime_type: z.ZodString;
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
        }, {
            mime_type: z.ZodLiteral<"video">;
            codec: z.ZodString;
            width: z.ZodNumber;
            height: z.ZodNumber;
            frame_rate: z.ZodNumber;
        }>, "strip", z.ZodTypeAny, {
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        }, {
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            mime_type: z.ZodString;
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
        }, {
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        }, {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            mime_type: z.ZodString;
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
        }, {
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }>, "strip", z.ZodTypeAny, {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        }, {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        screen: {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        };
        capabilities: ({
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        } | {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        } | {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        })[];
    }, {
        screen: {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        };
        capabilities: ({
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        } | {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        } | {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        })[];
    }>>;
}>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:renderer";
    detail: {
        screen: {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        };
        capabilities: ({
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        } | {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        } | {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        })[];
    } | null;
}, {
    url: "urn:dsbunny:agent:renderer";
    detail: {
        screen: {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        };
        capabilities: ({
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        } | {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        } | {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        })[];
    } | null;
}>;
export type RendererAgentStatusBase = z.infer<typeof RendererAgentStatusBase>;
export declare const RendererAgentStatus: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
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
    url: z.ZodLiteral<"urn:dsbunny:agent:renderer">;
    detail: z.ZodNullable<z.ZodObject<{
        screen: z.ZodObject<{
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_extended: z.ZodBoolean;
            orientation: z.ZodObject<{
                type: z.ZodEnum<["portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"]>;
                angle: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            }, {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            }>;
            device_pixel_ratio: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        }, {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        }>;
        capabilities: z.ZodArray<z.ZodDiscriminatedUnion<"mime_type", [z.ZodObject<z.objectUtil.extendShape<{
            mime_type: z.ZodString;
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
        }, {
            mime_type: z.ZodLiteral<"video">;
            codec: z.ZodString;
            width: z.ZodNumber;
            height: z.ZodNumber;
            frame_rate: z.ZodNumber;
        }>, "strip", z.ZodTypeAny, {
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        }, {
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            mime_type: z.ZodString;
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
        }, {
            mime_type: z.ZodLiteral<"audio">;
            codec: z.ZodString;
            sample_rate: z.ZodNumber;
            channels: z.ZodString;
        }>, "strip", z.ZodTypeAny, {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        }, {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        }>, z.ZodObject<z.objectUtil.extendShape<{
            mime_type: z.ZodString;
            mime_subtype: z.ZodString;
            is_supported: z.ZodBoolean;
            is_smooth: z.ZodBoolean;
            is_power_efficient: z.ZodBoolean;
        }, {
            mime_type: z.ZodLiteral<"image">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            is_smooth: z.ZodLiteral<false>;
            is_power_efficient: z.ZodLiteral<true>;
        }>, "strip", z.ZodTypeAny, {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        }, {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        screen: {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        };
        capabilities: ({
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        } | {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        } | {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        })[];
    }, {
        screen: {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        };
        capabilities: ({
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        } | {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        } | {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        })[];
    }>>;
}>>, "strip", z.ZodTypeAny, {
    url: "urn:dsbunny:agent:renderer";
    detail: {
        screen: {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        };
        capabilities: ({
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        } | {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        } | {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        })[];
    } | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted: boolean;
}, {
    url: "urn:dsbunny:agent:renderer";
    detail: {
        screen: {
            width: number;
            height: number;
            is_extended: boolean;
            orientation: {
                type: "portrait-primary" | "portrait-secondary" | "landscape-primary" | "landscape-secondary";
                angle: number;
            };
            device_pixel_ratio: number;
        };
        capabilities: ({
            mime_type: "video";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            width: number;
            height: number;
            frame_rate: number;
        } | {
            mime_type: "audio";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: boolean;
            is_power_efficient: boolean;
            codec: string;
            sample_rate: number;
            channels: string;
        } | {
            mime_type: "image";
            mime_subtype: string;
            is_supported: boolean;
            is_smooth: false;
            is_power_efficient: true;
            width: number;
            height: number;
        })[];
    } | null;
    create_timestamp: string;
    modify_timestamp: string;
    is_deleted?: boolean | undefined;
}>;
export type RendererAgentStatus = z.infer<typeof RendererAgentStatus>;
