import { z } from 'zod/v4';
export declare const ExternalInputListStatus: z.ZodObject<{
    inputSourceList: z.ZodArray<z.ZodObject<{
        inputPort: z.ZodString;
        signalDetection: z.ZodBoolean;
        vendorID: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, {}, {}>>;
    count: z.ZodNumber;
    currentInputPort: z.ZodString;
}, {}, {}>;
export type ExternalInputListStatus = z.infer<typeof ExternalInputListStatus>;
export declare const InputSourceStatus: z.ZodObject<{
    externalInputList: z.ZodOptional<z.ZodObject<{
        inputSourceList: z.ZodArray<z.ZodObject<{
            inputPort: z.ZodString;
            signalDetection: z.ZodBoolean;
            vendorID: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, {}, {}>>;
        count: z.ZodNumber;
        currentInputPort: z.ZodString;
    }, {}, {}>>;
}, {}, {}>;
export type InputSourceStatus = z.infer<typeof InputSourceStatus>;
