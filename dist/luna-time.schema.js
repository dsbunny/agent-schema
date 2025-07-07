// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const TimerWeek = z.number().int().min(0).max(127)
    .describe('The week bitmask for the timer, where Monday = 1, Tuesday = 2, ..., Sunday = 64, and Everyday = 127');
export const OnOffTimer = z.object({
    id: z.number().optional()
        .describe('The ID of the timer, used for identification'),
    type: z.enum(['OFFTIMER', 'ONTIMER'])
        .describe('The type of the timer, either "OFFTIMER" or "ONTIMER"'),
    hour: z.number().int().min(0).max(23)
        .describe('The hour of the timer, Range: [0–23]'),
    minute: z.number().int().min(0).max(59)
        .describe('The minute of the timer, Range: [0–59]'),
    week: TimerWeek
        .describe('The week bitmask for the timer, where Monday = 1, Tuesday = 2, ..., Sunday = 64, and Everyday = 127'),
})
    .describe('The on/off timer information of the device, including ID, type, hour, minute, and week bitmask');
export const HolidaySchedule = z.object({
    _id: z.number().optional()
        .describe('The ID of the holiday schedule, used for identification'),
    name: z.string().optional()
        .describe('The name of the holiday schedule'),
    settings: z.object({
        month: z.number().int().min(1).max(12).optional()
            .describe('The month of the holiday schedule, Range: [1–12]'),
        year: z.number().int().min(1970).max(2100).optional()
            .describe('The year of the holiday schedule, Range: [1970–2100]'),
        date: z.number().int().min(1).max(31).optional()
            .describe('The date of the holiday schedule, Range: [1–31]'),
        repeatBy: z.enum(['dayOfWeek', 'dayOfMonth', 'none']).optional()
            .describe('The repeat type of the holiday schedule, either "dayOfWeek", "dayOfMonth", or "none"'),
        days: z.number().int().min(0).max(127).optional()
            .describe('The duration of a holiday.'),
        repeat: z.enum(['monthly', 'yearly', 'none']).optional()
            .describe('The repeat type of the holiday schedule, either "monthly", "yearly", or "none"'),
    }).optional(),
})
    .describe('The holiday schedule information of the device, including ID, name, and settings');
export const TimeState = z.object({
    timerList: z.array(OnOffTimer).max(21).optional()
        .describe('The list of on/off timers, each timer has an ID, type, hour, minute, and week bitmask'),
    holidayScheduleList: z.array(HolidaySchedule).max(7).optional(),
})
    .describe('The time information of the device, including current time and time zone');
//# sourceMappingURL=luna-time.schema.js.map