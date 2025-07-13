// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

export const TimerWeek = z.number().int().min(0).max(127)
	.describe('The week bitmask for the timer, where Monday = 1, Tuesday = 2, ..., Sunday = 64, and Everyday = 127');
export type TimerWeek = z.infer<typeof TimerWeek>;

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
export type OnOffTimer = z.infer<typeof OnOffTimer>;

export const AllOnOffTimersState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the on/off timers were updated'),
	timerList: z.array(OnOffTimer).max(21)
		.describe('The list of on/off timers, each timer has an ID, type, hour, minute, and week bitmask'),
})
	.describe('The time information of the device, including current time and time zone');
export type AllOnOffTimersState = z.infer<typeof AllOnOffTimersState>;

export const HolidayScheduleState = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the holiday schedule was updated'),
	holidaySchedule: z.array(z.object({
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
				.describe('The duration of a holiday, represented as a bitmask where each bit represents a day of the week'),
			repeat: z.enum(['monthly', 'yearly', 'none']).optional()
				.describe('The repeat type of the holiday schedule, either "monthly", "yearly", or "none"'),
		}).optional()
			.describe('The settings of the holiday schedule, including month, year, date, repeat type, days, and repeat type'),
	})).max(7).optional()
		.describe('The list of holiday schedules, each schedule has a name and settings'),
})
	.describe('The holiday schedule information of the device, including a list of holiday schedules');
export type HolidayScheduleState = z.infer<typeof HolidayScheduleState>;

// #region State
export const TimeState = z.object({
	allOnOffTimers: AllOnOffTimersState.optional(),
	holidaySchedule: HolidayScheduleState.optional(),
})
	.describe('The time information of the device, including current time and time zone');
export type TimeState = z.infer<typeof TimeState>;
// #endregion
