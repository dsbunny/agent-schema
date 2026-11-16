import * as z from "zod";
export declare const ExternalInputListStatusSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"ExternalInputListStatus">;
    inputSourceList: z.ZodArray<z.ZodObject<{
        inputPort: z.ZodString;
        signalDetection: z.ZodBoolean;
        vendorID: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    count: z.ZodNumber;
    currentInputPort: z.ZodString;
}, z.core.$strip>;
export type ExternalInputListStatus = z.infer<typeof ExternalInputListStatusSchema>;
export declare const InputSourceStatusSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"InputSourceStatus">;
    externalInputList: z.ZodOptional<z.ZodObject<{
        '@type': z.ZodLiteral<"ExternalInputListStatus">;
        inputSourceList: z.ZodArray<z.ZodObject<{
            inputPort: z.ZodString;
            signalDetection: z.ZodBoolean;
            vendorID: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        count: z.ZodNumber;
        currentInputPort: z.ZodString;
    }, z.core.$strip>>;
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type InputSourceStatus = z.infer<typeof InputSourceStatusSchema>;
//# sourceMappingURL=luna-input-source.schema.d.ts.map