// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
import { AgentState, AgentStateBase, AgentStatus, AgentStatusBase, } from '@dsbunny/rmm-schema';
import { RecipeSchema } from '@dsbunny/publisher-schema';
import { CapabilityTypes } from '@dsbunny/capability-schema';
export const RENDERER_AGENT_URN = 'urn:dsbunny:agent:renderer';
// #region State
export const RendererAgentStateDetail = z.object({
    playlist_element_name: z.enum(['luna-play-list', 'css-play-list', 'webgl-play-list'])
        .describe('The name of the playlist element'),
    recipe_link: RecipeSchema.RecipeLink.optional()
        .describe('The link to the recipe'),
    storage: z.enum(['usb', 'internal'])
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
export const RendererScreenOrientation = z.object({
    type: z.enum(['portrait-primary', 'portrait-secondary', 'landscape-primary', 'landscape-secondary'])
        .describe('The orientation of the screen'),
    angle: z.number()
        .describe('The angle of the screen in degrees'),
});
export const RendererScreen = z.object({
    width: z.number()
        .describe('The width of the screen in pixels'),
    height: z.number()
        .describe('The height of the screen in pixels'),
    is_extended: z.boolean()
        .describe('Whether the device has multiple screens'),
    orientation: RendererScreenOrientation
        .describe('The orientation of the screen'),
    device_pixel_ratio: z.number()
        .describe('The ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device'),
});
export const RendererAgentStateBase = AgentStateBase.extend({
    uri: z.literal(RENDERER_AGENT_URN),
    detail: RendererAgentStateDetail.nullable()
        .describe('The detail of the renderer agent state'),
});
export const RendererAgentState = AgentState.extend(RendererAgentStateBase.shape);
// #endregion
// #region Status
export const RendererAgentStatusDetail = z.object({
    screen: RendererScreen
        .describe('The screen of the renderer device'),
    capabilities: z.array(CapabilityTypes)
        .describe('The capabilities of the screen'),
});
export const RendererAgentStatusBase = AgentStatusBase.extend({
    uri: z.literal(RENDERER_AGENT_URN),
    detail: RendererAgentStatusDetail.nullable()
        .describe('The detail of the renderer agent status'),
});
export const RendererAgentStatus = AgentStatus.extend(RendererAgentStatusBase.shape);
// #endregion
//# sourceMappingURL=renderer-agent.schema.js.map