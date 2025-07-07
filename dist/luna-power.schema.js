// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const PowerCommandRequest = z.object({
    timestamp: z.iso.datetime()
        .describe('The timestamp of the last power command request'),
    powerCommand: z.enum([
        'reboot',
        'powerOff',
    ])
        .describe('The power command to be executed, either "reboot" or "powerOff"'),
})
    .describe('The request to control the power state of the signage device, including the power command and the timestamp of the request');
// #region State
export const PowerState = z.object({
    delayTime: z.number().int().min(0).max(250).optional()
        .describe('The power-on delay. Unit: Seconds (0–250)'),
    displayMode: z.enum([
        'Screen Off',
        'Active',
    ]).optional()
        .describe('Indicates whether the device screen is turned on or off.'),
    dpmSignalType: z.enum([
        'clock',
        'clockAndData',
    ]).optional()
        .describe('The DPM (Display Power Management) signal type, either "clock" or "clockAndData"'),
    mode: z.enum([
        'powerOff',
        'screenOff',
        'screenOffAlways',
        'screenOffBacklight',
        'sustainAspectRation',
        'networkReady',
    ]).optional()
        .describe('The power management mode. The power management modes determine how a signage device acts when its power is turned off.'),
    powerCommandRequest: PowerCommandRequest.optional(),
    wakeOnLan: z.boolean().optional().default(false)
        .describe('Whether Wake-on-LAN is enabled or not'),
    // Skip `offTimerList` and `onTimerList` as deprecated.
});
// #endregion
//# sourceMappingURL=luna-power.schema.js.map