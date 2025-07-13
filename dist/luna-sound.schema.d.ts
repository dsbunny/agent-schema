import { z } from 'zod/v4';
export declare const ExternalSpeakerState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    externalSpeaker: z.ZodBoolean;
}, {}, {}>;
export type ExternalSpeakerState = z.infer<typeof ExternalSpeakerState>;
export declare const MutedState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    muted: z.ZodBoolean;
}, {}, {}>;
export type MutedState = z.infer<typeof MutedState>;
export declare const SoundModeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
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
export type SoundModeState = z.infer<typeof SoundModeState>;
export declare const SoundOutState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    speakerType: z.ZodEnum<{
        tv_speaker: "tv_speaker";
        bt_soundbar: "bt_soundbar";
    }>;
}, {}, {}>;
export type SoundOutState = z.infer<typeof SoundOutState>;
export declare const VolumeState: z.ZodObject<{
    _timestamp: z.iso.ZodISODateTime;
    level: z.ZodNumber;
    volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
}, {}, {}>;
export type VolumeState = z.infer<typeof VolumeState>;
export declare const SoundState: z.ZodObject<{
    muted: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        muted: z.ZodBoolean;
    }, {}, {}>>;
    externalSpeaker: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        externalSpeaker: z.ZodBoolean;
    }, {}, {}>>;
    soundMode: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
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
        _timestamp: z.iso.ZodISODateTime;
        speakerType: z.ZodEnum<{
            tv_speaker: "tv_speaker";
            bt_soundbar: "bt_soundbar";
        }>;
    }, {}, {}>>;
    volumeLevel: z.ZodOptional<z.ZodObject<{
        _timestamp: z.iso.ZodISODateTime;
        level: z.ZodNumber;
        volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
    }, {}, {}>>;
}, {}, {}>;
export type SoundState = z.infer<typeof SoundState>;
