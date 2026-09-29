// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
import { AgentStateSchema, AgentStateBaseSchema, AgentStatusSchema, AgentStatusBaseSchema, } from '@dsbunny/rmm-schema';
import { RecipeSchema } from '@dsbunny/recipe-schema';
import { CapabilityTypesSchema } from '@dsbunny/capdb-schema';
export const RENDERER_AGENT_URN = 'urn:dsbunny:agent:renderer';
// #region State
export const RendererAgentStateDetailSchema = z.object({
    playlist_element_name: z.enum([
        'android-play-list',
        'brightsign-play-list',
        'brightsign-webgl-play-list',
        'luna-play-list',
        'web-play-list',
        'webgl-play-list',
        'webgpu-play-list',
    ])
        .describe('The name of the playlist element'),
    recipe_link: RecipeSchema.RecipeLinkSchema.optional()
        .describe('The link to the recipe'),
    storage: z.enum([
        'usb',
        'internal',
    ])
        .describe('The storage location for the renderer'),
    usb: z.object({
        name: z.string()
            .describe('The name of the USB device'),
        vendor: z.string()
            .describe('The vendor of the USB device'),
        product: z.string()
            .describe('The product of the USB device'),
        device_id: z.string()
            .describe('The device ID of the USB device'),
    }).optional()
        .describe('The USB device information'),
});
// REF: https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation
export const RendererScreenOrientationSchema = z.object({
    type: z.enum([
        'portrait-primary',
        'portrait-secondary',
        'landscape-primary',
        'landscape-secondary',
    ])
        .describe('The orientation of the screen'),
    angle: z.number()
        .describe('The angle of the screen in degrees'),
});
export const RendererScreenSchema = z.object({
    width: z.number()
        .describe('The width of the screen in pixels'),
    height: z.number()
        .describe('The height of the screen in pixels'),
    is_extended: z.boolean()
        .describe('Whether the device has multiple screens'),
    orientation: RendererScreenOrientationSchema
        .describe('The orientation of the screen'),
    device_pixel_ratio: z.number()
        .describe('The ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device'),
});
export const RendererAgentStateBaseSchema = AgentStateBaseSchema.extend({
    uri: z.literal(RENDERER_AGENT_URN),
    detail: RendererAgentStateDetailSchema.nullable()
        .describe('The detail of the renderer agent state'),
});
export const RendererAgentStateSchema = AgentStateSchema.extend(RendererAgentStateBaseSchema.shape);
// #endregion
// #region Status
export const RendererAgentStatusDetailSchema = z.object({
    screen: RendererScreenSchema
        .describe('The screen of the renderer device'),
    capabilities: z.array(CapabilityTypesSchema)
        .describe('The capabilities of the screen'),
});
export const RendererAgentStatusBaseSchema = AgentStatusBaseSchema.extend({
    uri: z.literal(RENDERER_AGENT_URN),
    detail: RendererAgentStatusDetailSchema.nullable()
        .describe('The detail of the renderer agent status'),
});
export const RendererAgentStatusSchema = AgentStatusSchema.extend(RendererAgentStatusBaseSchema.shape);
// #endregion
//# sourceMappingURL=renderer-agent.schema.js.map