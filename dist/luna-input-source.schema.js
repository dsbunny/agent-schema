// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { lunaRegistry } from './registry.js';
export const ExternalInputListStatusSchema = z.object({
    '@type': z.literal('ExternalInputListStatus')
        .describe('Type of the external input list status'),
    inputSourceList: z.array(z.object({
        inputPort: z.string()
            .describe('The input source label, e.g. "ext://hdmi:1"'),
        signalDetection: z.boolean()
            .describe('Indicates whether the input source is detected or not'),
        vendorID: z.string().optional()
            .describe('The vendor ID of the input source when SIMPLINK is enabled, e.g. 57489'),
        name: z.string().optional()
            .describe('The name of the input source when SIMPLINK is enabled e.g. "BD PLAYER"'),
    }))
        .describe('The list of external input sources'),
    count: z.number().int().min(0).max(100)
        .describe('The number of external input sources'),
    currentInputPort: z.string()
        .describe('The current input source label, e.g. "ext://hdmi:1"'),
}).register(lunaRegistry, {
    id: 'ExternalInputListStatusSchema',
    description: 'The list of external input sources, including input port, signal detection, vendor ID, and name',
});
// #region Status
export const InputSourceStatusSchema = z.object({
    '@type': z.literal('InputSourceStatus')
        .describe('Type of the input source status'),
    externalInputList: ExternalInputListStatusSchema.optional()
        .describe('The list of external input sources'),
    _debug: z.string().optional()
        .describe('SCAP debug mode output'),
}).register(lunaRegistry, {
    id: 'InputSourceStatusSchema',
    description: 'The status of the input source, including the list of external input sources',
});
// #endregion
//# sourceMappingURL=luna-input-source.schema.js.map