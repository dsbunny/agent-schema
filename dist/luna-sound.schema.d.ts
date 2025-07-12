import { z } from 'zod/v4';
export declare const ExternalSpeaker: z.ZodObject<{
    externalSpeaker: z.ZodBoolean;
}, {}, {}>;
export type ExternalSpeaker = z.infer<typeof ExternalSpeaker>;
export declare const Muted: z.ZodObject<{
    muted: z.ZodBoolean;
}, {}, {}>;
export type Muted = z.infer<typeof Muted>;
export declare const SoundMode: z.ZodObject<{
    mode: z.ZodEnum<{
        game: "game";
        sports: "sports";
        standard: "standard";
        movie: "movie";
        news: "news";
        music: "music";
    }>;
    balance: z.ZodOptional<z.ZodNumber>;
}, {}, {}>;
export type SoundMode = z.infer<typeof SoundMode>;
export declare const SoundOut: z.ZodObject<{
    speakerType: z.ZodEnum<{
        tv_speaker: "tv_speaker";
        bt_soundbar: "bt_soundbar";
    }>;
}, {}, {}>;
export type SoundOut = z.infer<typeof SoundOut>;
export declare const VolumeLevel: z.ZodObject<{
    level: z.ZodNumber;
    volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
}, {}, {}>;
export type VolumeLevel = z.infer<typeof VolumeLevel>;
export declare const SoundState: z.ZodObject<{
    muted: z.ZodOptional<z.ZodObject<{
        muted: z.ZodBoolean;
    }, {}, {}>>;
    externalSpeaker: z.ZodOptional<z.ZodObject<{
        externalSpeaker: z.ZodBoolean;
    }, {}, {}>>;
    soundMode: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<{
            game: "game";
            sports: "sports";
            standard: "standard";
            movie: "movie";
            news: "news";
            music: "music";
        }>;
        balance: z.ZodOptional<z.ZodNumber>;
    }, {}, {}>>;
    soundOut: z.ZodOptional<z.ZodObject<{
        speakerType: z.ZodEnum<{
            tv_speaker: "tv_speaker";
            bt_soundbar: "bt_soundbar";
        }>;
    }, {}, {}>>;
    volumeLevel: z.ZodOptional<z.ZodObject<{
        level: z.ZodNumber;
        volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
    }, {}, {}>>;
}, {}, {}>;
export type SoundState = z.infer<typeof SoundState>;
