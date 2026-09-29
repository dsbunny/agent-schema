import * as z from "zod/v4";
export declare const PEMChainSchema: z.ZodString;
export type PEMChain = z.infer<typeof PEMChainSchema>;
export declare const ServerCertificateSchema: z.ZodObject<{
    domainName: z.ZodOptional<z.ZodString>;
    issuerName: z.ZodOptional<z.ZodString>;
    validFrom: z.ZodOptional<z.ZodISODateTime>;
    validTo: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
export type ServerCertificate = z.infer<typeof ServerCertificateSchema>;
export declare const ServerCertificateListStateSchema: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    serverCertificateList: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ServerCertificateListState = z.infer<typeof ServerCertificateListStateSchema>;
export declare const ServerCertificateListStatusSchema: z.ZodObject<{
    serverCertificateList: z.ZodArray<z.ZodObject<{
        domainName: z.ZodOptional<z.ZodString>;
        issuerName: z.ZodOptional<z.ZodString>;
        validFrom: z.ZodOptional<z.ZodISODateTime>;
        validTo: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ServerCertificateListStatus = z.infer<typeof ServerCertificateListStatusSchema>;
export declare const SecurityStateSchema: z.ZodObject<{
    serverCertificateList: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        serverCertificateList: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecurityState = z.infer<typeof SecurityStateSchema>;
export declare const SecurityStatusSchema: z.ZodObject<{
    serverCertificateList: z.ZodOptional<z.ZodObject<{
        serverCertificateList: z.ZodArray<z.ZodObject<{
            domainName: z.ZodOptional<z.ZodString>;
            issuerName: z.ZodOptional<z.ZodString>;
            validFrom: z.ZodOptional<z.ZodISODateTime>;
            validTo: z.ZodOptional<z.ZodISODateTime>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    _debug: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SecurityStatus = z.infer<typeof SecurityStatusSchema>;
