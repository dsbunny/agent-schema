import { z } from 'zod';
export declare const RENDERER_AGENT_URN = "urn:dsbunny:agent:renderer";
export declare const RendererAgentState: z.ZodObject<{
    type: z.ZodLiteral<"renderer">;
    playlist_element_name: z.ZodString;
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
}, "strip", z.ZodTypeAny, {
    type: "renderer";
    playlist_element_name: string;
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
}, {
    type: "renderer";
    playlist_element_name: string;
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
}>;
export type RendererAgentState = z.infer<typeof RendererAgentState>;
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
export declare const RendererScreenCapability: z.ZodObject<Omit<{
    tenant_id: z.ZodString;
    width: z.ZodNumber;
    height: z.ZodNumber;
    fps: z.ZodNumber;
    codec: z.ZodString;
    is_supported: z.ZodBoolean;
    is_smooth: z.ZodBoolean;
    is_power_efficient: z.ZodBoolean;
}, "tenant_id">, "strip", z.ZodTypeAny, {
    width: number;
    height: number;
    fps: number;
    codec: string;
    is_supported: boolean;
    is_smooth: boolean;
    is_power_efficient: boolean;
}, {
    width: number;
    height: number;
    fps: number;
    codec: string;
    is_supported: boolean;
    is_smooth: boolean;
    is_power_efficient: boolean;
}>;
export type RendererScreenCapability = z.infer<typeof RendererScreenCapability>;
export declare const RendererAgentStatus: z.ZodObject<{
    type: z.ZodLiteral<"renderer">;
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
    capabilities: z.ZodArray<z.ZodObject<Omit<{
        tenant_id: z.ZodString;
        width: z.ZodNumber;
        height: z.ZodNumber;
        fps: z.ZodNumber;
        codec: z.ZodString;
        is_supported: z.ZodBoolean;
        is_smooth: z.ZodBoolean;
        is_power_efficient: z.ZodBoolean;
    }, "tenant_id">, "strip", z.ZodTypeAny, {
        width: number;
        height: number;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
    }, {
        width: number;
        height: number;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "renderer";
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
    capabilities: {
        width: number;
        height: number;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
    }[];
}, {
    type: "renderer";
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
    capabilities: {
        width: number;
        height: number;
        fps: number;
        codec: string;
        is_supported: boolean;
        is_smooth: boolean;
        is_power_efficient: boolean;
    }[];
}>;
export type RendererAgentStatus = z.infer<typeof RendererAgentStatus>;
