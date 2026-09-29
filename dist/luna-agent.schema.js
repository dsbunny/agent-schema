// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
import { AgentStateSchema, AgentStateBaseSchema, AgentStatusSchema, AgentStatusBaseSchema, } from '@dsbunny/rmm-schema';
import { ConfigurationStateSchema, ConfigurationStatusSchema } from './luna-configuration.schema.js';
import { DeviceStateSchema, DeviceStatusSchema } from './luna-device.schema.js';
import { InputSourceStatusSchema } from './luna-input-source.schema.js';
import { PowerStateSchema, PowerStatusSchema } from './luna-power.schema.js';
import { SecurityStateSchema, SecurityStatusSchema } from './luna-security.schema.js';
import { SignageStateSchema, SignageStatusSchema } from './luna-signage.schema.js';
import { SoundStateSchema, SoundStatusSchema } from './luna-sound.schema.js';
import { TimeStateSchema, TimeStatusSchema } from './luna-time.schema.js';
import { StorageStateSchema, StorageStatusSchema } from './luna-storage.schema.js';
import { CustomJSStateSchema, CustomJSStatusSchema } from './luna-customjs.schema.js';
export const LUNA_AGENT_URN = 'urn:dsbunny:agent:luna';
// #region State
export const LunaAgentStateDetailSchema = z.object({
    configuration: ConfigurationStateSchema.optional(),
    device: DeviceStateSchema.optional(),
    power: PowerStateSchema.optional(),
    security: SecurityStateSchema.optional(),
    signage: SignageStateSchema.optional(),
    sound: SoundStateSchema.optional(),
    storage: StorageStateSchema.optional(),
    time: TimeStateSchema.optional(),
    customJS: CustomJSStateSchema.optional(),
    _debug: z.boolean().optional()
        .describe('Indicates if SCAP debug mode is enabled'),
});
export const LunaAgentStateBaseSchema = AgentStateBaseSchema.extend({
    uri: z.literal(LUNA_AGENT_URN),
    detail: LunaAgentStateDetailSchema.nullable()
        .describe('The detail of the Luna agent state'),
});
export const LunaAgentStateSchema = AgentStateSchema.extend(LunaAgentStateBaseSchema.shape);
// #endregion
// #region Status
export const LunaAgentStatusDetailSchema = z.object({
    configuration: ConfigurationStatusSchema.optional(),
    device: DeviceStatusSchema.optional(),
    inputSource: InputSourceStatusSchema.optional(),
    power: PowerStatusSchema.optional(),
    security: SecurityStatusSchema.optional(),
    signage: SignageStatusSchema.optional(),
    sound: SoundStatusSchema.optional(),
    storage: StorageStatusSchema.optional(),
    time: TimeStatusSchema.optional(),
    customJS: CustomJSStatusSchema.optional(),
    _errorFlags: z.array(z.string()).optional()
        .describe('An array of error flags indicating issues with the Luna agent'),
});
export const LunaAgentStatusBaseSchema = AgentStatusBaseSchema.extend({
    uri: z.literal(LUNA_AGENT_URN),
    detail: LunaAgentStatusDetailSchema.nullable()
        .describe('The detail of the Luna agent status'),
});
export const LunaAgentStatusSchema = AgentStatusSchema.extend(LunaAgentStatusBaseSchema.shape);
// #endregion
//# sourceMappingURL=luna-agent.schema.js.map