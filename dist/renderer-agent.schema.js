// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { AgentStateSchema, AgentStateBaseSchema, AgentStatusSchema, AgentStatusBaseSchema, } from '@dsbunny/rmm-schema';
import { RecipeSchema } from '@dsbunny/recipe-schema';
import { CapabilitySchema } from '@dsbunny/capdb-schema';
export const RENDERER_AGENT_URN = 'urn:dsbunny:agent:renderer';
// #region State
export const RendererAgentStateDetailSchema = z.object({
    '@type': z.literal('RendererAgentStateDetail')
        .describe('Type of the renderer agent state detail'),
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
}).register(dsbunnyRegistry, {
    id: 'RendererAgentStateDetailSchema',
    description: 'The detailed state information of the renderer agent, including playlist element, recipe link, storage, and USB device information',
});
// REF: https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation
export const RendererScreenOrientationSchema = z.object({
    '@type': z.literal('RendererScreenOrientation')
        .describe('Type of the renderer screen orientation'),
    type: z.enum([
        'portrait-primary',
        'portrait-secondary',
        'landscape-primary',
        'landscape-secondary',
    ])
        .describe('The orientation of the screen'),
    angle: z.number()
        .describe('The angle of the screen in degrees'),
}).register(dsbunnyRegistry, {
    id: 'RendererScreenOrientationSchema',
    description: 'The screen orientation information of the renderer device, including type and angle',
});
export const RendererScreenSchema = z.object({
    '@type': z.literal('RendererScreen')
        .describe('Type of the renderer screen'),
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
}).register(dsbunnyRegistry, {
    id: 'RendererScreenSchema',
    description: 'The screen information of the renderer device, including width, height, extended status, orientation, and device pixel ratio',
});
export const RendererAgentStateBaseSchema = AgentStateBaseSchema.extend({
    '@type': z.literal('RendererAgentStateBase')
        .describe('Type of the renderer agent state base'),
    uri: z.literal(RENDERER_AGENT_URN),
    detail: RendererAgentStateDetailSchema.nullable()
        .describe('The detail of the renderer agent state'),
}).register(dsbunnyRegistry, {
    id: 'RendererAgentStateBaseSchema',
    description: 'The base state information of the renderer agent, including URI and detail',
});
export const RendererAgentStateSchema = AgentStateSchema.extend(RendererAgentStateBaseSchema.shape).extend({
    '@type': z.literal('RendererAgentState')
        .describe('Type of the renderer agent state'),
}).register(dsbunnyRegistry, {
    id: 'RendererAgentStateSchema',
    description: 'The state information of the renderer agent, including base state and additional details',
});
// #endregion
// #region Status
export const RendererAgentStatusDetailSchema = z.object({
    '@type': z.literal('RendererAgentStatusDetail')
        .describe('Type of the renderer agent status detail'),
    screen: RendererScreenSchema
        .describe('The screen of the renderer device'),
    capabilities: z.array(CapabilitySchema.shape.data)
        .describe('The capabilities of the screen'),
}).register(dsbunnyRegistry, {
    id: 'RendererAgentStatusDetailSchema',
    description: 'The detail status information of the renderer agent, including screen and capabilities',
});
export const RendererAgentStatusBaseSchema = AgentStatusBaseSchema.extend({
    '@type': z.literal('RendererAgentStatusBase')
        .describe('Type of the renderer agent status base'),
    uri: z.literal(RENDERER_AGENT_URN),
    detail: RendererAgentStatusDetailSchema.nullable()
        .describe('The detail of the renderer agent status'),
}).register(dsbunnyRegistry, {
    id: 'RendererAgentStatusBaseSchema',
    description: 'The base status information of the renderer agent, including URI and detail',
});
export const RendererAgentStatusSchema = AgentStatusSchema.extend(RendererAgentStatusBaseSchema.shape).extend({
    '@type': z.literal('RendererAgentStatus')
        .describe('Type of the renderer agent status'),
}).register(dsbunnyRegistry, {
    id: 'RendererAgentStatusSchema',
    description: 'The status information of the renderer agent, including base status and additional details',
});
// #endregion
//# sourceMappingURL=renderer-agent.schema.js.map