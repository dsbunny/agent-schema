import * as z from "zod";
export declare const TimerWeekSchema: z.ZodNumber;
export type TimerWeek = z.infer<typeof TimerWeekSchema>;
export declare const OnOffTimerSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"OnOffTimer">;
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
    '@type': z.ZodLiteral<"AllOnOffTimersState">;
    '@timestamp': z.ZodISODateTime;
    timerList: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"OnOffTimer">;
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
    '@type': z.ZodLiteral<"HolidayScheduleState">;
    '@timestamp': z.ZodISODateTime;
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
    '@type': z.ZodLiteral<"TimeState">;
    allOnOffTimers: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"AllOnOffTimersState">;
        '@timestamp': z.ZodISODateTime;
        timerList: z.ZodArray<z.ZodObject<{
            '@type': z.ZodLiteral<"OnOffTimer">;
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
        '@type': z.ZodLiteral<"HolidayScheduleState">;
        '@timestamp': z.ZodISODateTime;
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
    '@type': z.ZodLiteral<"TimeStatus">;
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TimeStatus = z.infer<typeof TimeStatusSchema>;
