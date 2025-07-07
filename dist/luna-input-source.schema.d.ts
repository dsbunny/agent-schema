import { z } from 'zod/v4';
export declare const InputSourceState: z.ZodObject<{
    currentInputSource: z.ZodString;
}, {}, {}>;
export type InputSourceState = z.infer<typeof InputSourceState>;
export declare const InputSourceStatus: z.ZodObject<{
    externalInputList: z.ZodArray<z.ZodObject<{
        inputPort: z.ZodString;
        signalDetection: z.ZodBoolean;
        vendorID: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
}, {}, {}>;
export type InputSourceStatus = z.infer<typeof InputSourceStatus>;
