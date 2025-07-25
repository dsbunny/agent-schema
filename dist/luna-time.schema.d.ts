import { z } from 'zod/v4';
export declare const TimerWeek: z.ZodNumber;
export type TimerWeek = z.infer<typeof TimerWeek>;
export declare const OnOffTimer: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    type: z.ZodEnum<{
        OFFTIMER: "OFFTIMER";
        ONTIMER: "ONTIMER";
    }>;
    hour: z.ZodNumber;
    minute: z.ZodNumber;
    week: z.ZodNumber;
}, {}, {}>;
export type OnOffTimer = z.infer<typeof OnOffTimer>;
export declare const AllOnOffTimersState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    timerList: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        type: z.ZodEnum<{
            OFFTIMER: "OFFTIMER";
            ONTIMER: "ONTIMER";
        }>;
        hour: z.ZodNumber;
        minute: z.ZodNumber;
        week: z.ZodNumber;
    }, {}, {}>>;
}, {}, {}>;
export type AllOnOffTimersState = z.infer<typeof AllOnOffTimersState>;
export declare const HolidayScheduleState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
        }, {}, {}>>;
    }, {}, {}>>>;
}, {}, {}>;
export type HolidayScheduleState = z.infer<typeof HolidayScheduleState>;
export declare const TimeState: z.ZodObject<{
    allOnOffTimers: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        timerList: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            type: z.ZodEnum<{
                OFFTIMER: "OFFTIMER";
                ONTIMER: "ONTIMER";
            }>;
            hour: z.ZodNumber;
            minute: z.ZodNumber;
            week: z.ZodNumber;
        }, {}, {}>>;
    }, {}, {}>>;
    holidaySchedule: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
            }, {}, {}>>;
        }, {}, {}>>>;
    }, {}, {}>>;
}, {}, {}>;
export type TimeState = z.infer<typeof TimeState>;
export declare const TimeStatus: z.ZodObject<{
    _debug: z.ZodOptional<z.ZodString>;
}, {}, {}>;
export type TimeStatus = z.infer<typeof TimeStatus>;
