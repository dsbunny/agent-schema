// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
import { AgentState, AgentStateBase, AgentStatus, AgentStatusBase, } from '@dsbunny/rmm-schema';
import { ConfigurationState, ConfigurationStatus } from './luna-configuration.schema.js';
import { DeviceState, DeviceStatus } from './luna-device.schema.js';
import { InputSourceStatus } from './luna-input-source.schema.js';
import { PowerState, PowerStatus } from './luna-power.schema.js';
import { SecurityState, SecurityStatus } from './luna-security.schema.js';
import { SignageState, SignageStatus } from './luna-signage.schema.js';
import { SoundState, SoundStatus } from './luna-sound.schema.js';
import { TimeState, TimeStatus } from './luna-time.schema.js';
import { StorageState, StorageStatus } from './luna-storage.schema.js';
import { CustomJSState, CustomJSStatus } from './luna-customjs.schema.js';
export const LUNA_AGENT_URN = 'urn:dsbunny:agent:luna';
// #region State
export const LunaAgentStateDetail = z.object({
    configuration: ConfigurationState.optional(),
    device: DeviceState.optional(),
    power: PowerState.optional(),
    security: SecurityState.optional(),
    signage: SignageState.optional(),
    sound: SoundState.optional(),
    storage: StorageState.optional(),
    time: TimeState.optional(),
    customJS: CustomJSState.optional(),
    _debug: z.boolean().optional()
        .describe('Indicates if SCAP debug mode is enabled'),
});
export const LunaAgentStateBase = AgentStateBase.extend({
    uri: z.literal(LUNA_AGENT_URN),
    detail: LunaAgentStateDetail.nullable()
        .describe('The detail of the Luna agent state'),
});
export const LunaAgentState = AgentState.extend(LunaAgentStateBase.shape);
// #endregion
// #region Status
export const LunaAgentStatusDetail = z.object({
    configuration: ConfigurationStatus.optional(),
    device: DeviceStatus.optional(),
    inputSource: InputSourceStatus.optional(),
    power: PowerStatus.optional(),
    security: SecurityStatus.optional(),
    signage: SignageStatus.optional(),
    sound: SoundStatus.optional(),
    storage: StorageStatus.optional(),
    time: TimeStatus.optional(),
    customJS: CustomJSStatus.optional(),
    _errorFlags: z.array(z.string()).optional()
        .describe('An array of error flags indicating issues with the Luna agent'),
});
export const LunaAgentStatusBase = AgentStatusBase.extend({
    uri: z.literal(LUNA_AGENT_URN),
    detail: LunaAgentStatusDetail.nullable()
        .describe('The detail of the Luna agent status'),
});
export const LunaAgentStatus = AgentStatus.extend(LunaAgentStatusBase.shape);
// #endregion
//# sourceMappingURL=luna-agent.schema.js.map