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
export declare const AllOnOffTimers: z.ZodObject<{
    timeList: z.ZodArray<z.ZodObject<{
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
export type AllOnOffTimers = z.infer<typeof AllOnOffTimers>;
export declare const HolidaySchedule: z.ZodObject<{
    holidaySchedule: z.ZodArray<z.ZodObject<{
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
    }, {}, {}>>;
}, {}, {}>;
export type HolidaySchedule = z.infer<typeof HolidaySchedule>;
export declare const TimeState: z.ZodObject<{
    allOnOffTimers: z.ZodOptional<z.ZodObject<{
        timeList: z.ZodArray<z.ZodObject<{
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
        holidaySchedule: z.ZodArray<z.ZodObject<{
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
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type TimeState = z.infer<typeof TimeState>;
