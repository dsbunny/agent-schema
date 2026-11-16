import * as z from "zod";
export declare const ExternalSpeakerStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ExternalSpeakerState">;
    '@timestamp': z.ZodISODateTime;
    externalSpeaker: z.ZodBoolean;
}, z.core.$strip>;
export type ExternalSpeakere = z.infer<typeof ExternalSpeakerStateSchema>;
export declare const MutedStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"MutedState">;
    '@timestamp': z.ZodISODateTime;
    muted: z.ZodBoolean;
}, z.core.$strip>;
export type MutedState = z.infer<typeof MutedStateSchema>;
export declare const SoundModeStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"SoundModeState">;
    '@timestamp': z.ZodISODateTime;
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
export type SoundModeState = z.infer<typeof SoundModeStateSchema>;
export declare const SoundOutStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"SoundOutState">;
    '@timestamp': z.ZodISODateTime;
    speakerType: z.ZodEnum<{
        tv_speaker: "tv_speaker";
        bt_soundbar: "bt_soundbar";
    }>;
}, z.core.$strip>;
export type SoundOutState = z.infer<typeof SoundOutStateSchema>;
export declare const VolumeStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"VolumeState">;
    '@timestamp': z.ZodISODateTime;
    level: z.ZodNumber;
    volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type VolumeState = z.infer<typeof VolumeStateSchema>;
export declare const SoundStateSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"SoundState">;
    muted: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"MutedState">;
        '@timestamp': z.ZodISODateTime;
        muted: z.ZodBoolean;
    }, z.core.$strip>>;
    externalSpeaker: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"ExternalSpeakerState">;
        '@timestamp': z.ZodISODateTime;
        externalSpeaker: z.ZodBoolean;
    }, z.core.$strip>>;
    soundMode: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"SoundModeState">;
        '@timestamp': z.ZodISODateTime;
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
        '@type': z.ZodLiteral<"SoundOutState">;
        '@timestamp': z.ZodISODateTime;
        speakerType: z.ZodEnum<{
            tv_speaker: "tv_speaker";
            bt_soundbar: "bt_soundbar";
        }>;
    }, z.core.$strip>>;
    volumeLevel: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"VolumeState">;
        '@timestamp': z.ZodISODateTime;
        level: z.ZodNumber;
        volOsdEnabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SoundState = z.infer<typeof SoundStateSchema>;
export declare const SoundStatusSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"SoundStatus">;
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SoundStatus = z.infer<typeof SoundStatusSchema>;
//# sourceMappingURL=luna-sound.schema.d.ts.map