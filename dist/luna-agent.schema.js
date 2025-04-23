// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod';
import { AgentState, AgentStateBase, AgentStatus, AgentStatusBase, } from '@dsbunny/rmm-schema';
export const LUNA_AGENT_URN = 'urn:dsbunny:agent:luna';
// #region State
export const LunaAgentStateDetail = z.object({
    screenshot: z.object({
        timestamp: z.string().datetime()
            .describe('The timestamp of the screenshot request'),
        url: z.string().url()
            .describe('The URL of the screenshot'),
    }).optional(),
    firmware: z.object({
        version: z.string()
            .describe('The version of the firmware'),
        url: z.string().url()
            .describe('The URL of the firmware'),
    }).optional(),
    app: z.object({
        version: z.string()
            .describe('The version of the app'),
        url: z.string().url()
            .describe('The URL of the app'),
    }).optional(),
});
export const LunaAgentStateBase = AgentStateBase.merge(z.object({
    url: z.literal(LUNA_AGENT_URN),
    detail: LunaAgentStateDetail.nullable()
        .describe('The detail of the Luna agent state'),
}));
export const LunaAgentState = AgentState.merge(LunaAgentStateBase);
// #endregion
// #region Status
export const LunaAgentStatusDetail = z.object({
// ...
});
export const LunaAgentStatusBase = AgentStatusBase.merge(z.object({
    url: z.literal(LUNA_AGENT_URN),
    detail: LunaAgentStatusDetail.nullable()
        .describe('The detail of the Luna agent status'),
}));
export const LunaAgentStatus = AgentStatus.merge(LunaAgentStatusBase);
// #endregion
//# sourceMappingURL=luna-agent.schema.js.map