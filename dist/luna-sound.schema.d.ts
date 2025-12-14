import * as z from "zod/v4";
export declare const ExternalSpeakerState: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    externalSpeaker: z.ZodBoolean;
}, z.core.$strip>;
export type ExternalSpeakerState = z.infer<typeof ExternalSpeakerState>;
export declare const MutedState: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    muted: z.ZodBoolean;
}, z.core.$strip>;
export type MutedState = z.infer<typeof MutedState>;
export declare const SoundModeState: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    mode: z.ZodEnum<{
        game: "game";
        sports: "sports";
        standard: "standard";
        movie: "movie";
        news: "news";
        music: "music";
    }>;
    balance: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export type SoundModeState = z.infer<typeof SoundModeState>;
export declare const SoundOutState: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    speakerType: z.ZodEnum<{
        tv_speaker: "tv_speaker";
        bt_soundbar: "bt_soundbar";
    }>;
}, z.core.$strip>;
export type SoundOutState = z.infer<typeof SoundOutState>;
export declare const VolumeState: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    level: z.ZodNumber;
    volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type VolumeState = z.infer<typeof VolumeState>;
export declare const SoundState: z.ZodObject<{
    muted: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        muted: z.ZodBoolean;
    }, z.core.$strip>>;
    externalSpeaker: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        externalSpeaker: z.ZodBoolean;
    }, z.core.$strip>>;
    soundMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        mode: z.ZodEnum<{
            game: "game";
            sports: "sports";
            standard: "standard";
            movie: "movie";
            news: "news";
            music: "music";
        }>;
        balance: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    }, z.core.$strip>>;
    soundOut: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        speakerType: z.ZodEnum<{
            tv_speaker: "tv_speaker";
            bt_soundbar: "bt_soundbar";
        }>;
    }, z.core.$strip>>;
    volumeLevel: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        level: z.ZodNumber;
        volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SoundState = z.infer<typeof SoundState>;
export declare const SoundStatus: z.ZodObject<{
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SoundStatus = z.infer<typeof SoundStatus>;
