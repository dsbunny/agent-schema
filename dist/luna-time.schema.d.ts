import * as z from "zod/v4";
export declare const TimerWeekSchema: z.ZodNumber;
export type TimerWeek = z.infer<typeof TimerWeekSchema>;
export declare const OnOffTimerSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    type: z.ZodEnum<{
        OFFTIMER: "OFFTIMER";
        ONTIMER: "ONTIMER";
    }>;
    hour: z.ZodNumber;
    minute: z.ZodNumber;
    week: z.ZodNumber;
}, z.core.$strip>;
export type OnOffTimer = z.infer<typeof OnOffTimerSchema>;
export declare const AllOnOffTimersStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    timerList: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        type: z.ZodEnum<{
            OFFTIMER: "OFFTIMER";
            ONTIMER: "ONTIMER";
        }>;
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        week: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AllOnOffTimersState = z.infer<typeof AllOnOffTimersStateSchema>;
export declare const HolidayScheduleStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    holidayScheduleList: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        settings: z.ZodOptional<z.ZodObject<{
            month: z.ZodOptional<z.ZodNumber>;
            year: z.ZodOptional<z.ZodNumber>;
            date: z.ZodOptional<z.ZodNumber>;
            repeatBy: z.ZodOptional<z.ZodEnum<{
                dayOfWeek: "dayOfWeek";
                dayOfMonth: "dayOfMonth";
                none: "none";
            }>>;
            days: z.ZodOptional<z.ZodNumber>;
            repeat: z.ZodOptional<z.ZodEnum<{
                none: "none";
                monthly: "monthly";
                yearly: "yearly";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HolidayScheduleState = z.infer<typeof HolidayScheduleStateSchema>;
export declare const TimeStateSchema: z.ZodObject<{
    allOnOffTimers: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        timerList: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<{
                OFFTIMER: "OFFTIMER";
                ONTIMER: "ONTIMER";
            }>;
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            week: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    holidaySchedule: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        holidayScheduleList: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            settings: z.ZodOptional<z.ZodObject<{
                month: z.ZodOptional<z.ZodNumber>;
                year: z.ZodOptional<z.ZodNumber>;
                date: z.ZodOptional<z.ZodNumber>;
                repeatBy: z.ZodOptional<z.ZodEnum<{
                    dayOfWeek: "dayOfWeek";
                    dayOfMonth: "dayOfMonth";
                    none: "none";
                }>>;
                days: z.ZodOptional<z.ZodNumber>;
                repeat: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    monthly: "monthly";
                    yearly: "yearly";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TimeState = z.infer<typeof TimeStateSchema>;
export declare const TimeStatusSchema: z.ZodObject<{
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TimeStatus = z.infer<typeof TimeStatusSchema>;
