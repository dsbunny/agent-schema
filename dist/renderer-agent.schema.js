// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
import { RecipeSchema } from '@dsbunny/publisher-schema';
import { CapabilityBase } from '@dsbunny/capability-schema';
export const RENDERER_AGENT_URN = 'urn:dsbunny:agent:renderer';
export const RendererAgentState = z.object({
    type: z.literal('renderer'),
    playlist_element_name: z.string(),
    recipe_link: RecipeSchema.RecipeLink.optional(),
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
export const RendererAgentStatus = z.object({
    type: z.literal('renderer'),
    screen: RendererScreen
        .describe('The screen of the renderer device'),
    capabilities: z.array(CapabilityBase)
        .describe('The capabilities of the screen'),
});
//# sourceMappingURL=renderer-agent.schema.js.map