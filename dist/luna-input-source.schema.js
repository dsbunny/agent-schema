// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod/v4";
export const ExternalInputListStatus = z.object({
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
});
// #region Status
export const InputSourceStatus = z.object({
    externalInputList: ExternalInputListStatus.optional()
        .describe('The list of external input sources'),
    _debug: z.string().optional()
        .describe('SCAP debug mode output'),
});
// #endregion
//# sourceMappingURL=luna-input-source.schema.js.map