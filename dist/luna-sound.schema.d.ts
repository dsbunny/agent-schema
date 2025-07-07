import { z } from 'zod/v4';
export declare const SoundState: z.ZodObject<{
    mode: z.ZodDefault<z.ZodEnum<{
        game: "game";
        sports: "sports";
        standard: "standard";
        movie: "movie";
        news: "news";
        music: "music";
    }>>;
    balance: z.ZodOptional<z.ZodNumber>;
    level: z.ZodOptional<z.ZodNumber>;
    muted: z.ZodDefault<z.ZodBoolean>;
    externalSpeaker: z.ZodDefault<z.ZodBoolean>;
    speakerType: z.ZodOptional<z.ZodEnum<{
        tv_speaker: "tv_speaker";
        bt_soundbar: "bt_soundbar";
    }>>;
}, {}, {}>;
export type SoundState = z.infer<typeof SoundState>;
