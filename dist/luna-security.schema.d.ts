import * as z from "zod";
export declare const PEMChain: z.ZodString;
export type PEMChain = z.infer<typeof PEMChain>;
export declare const ServerCertificate: z.ZodObject<{
    domainName: z.ZodOptional<z.ZodString>;
    issuerName: z.ZodOptional<z.ZodString>;
    validFrom: z.ZodOptional<z.ZodISODateTime>;
    validTo: z.ZodOptional<z.ZodISODateTime>;
}, z.core.$strip>;
export type ServerCertificate = z.infer<typeof ServerCertificate>;
export declare const ServerCertificateListState: z.ZodObject<{
    _timestamp: z.ZodISODateTime;
    serverCertificateList: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ServerCertificateListState = z.infer<typeof ServerCertificateListState>;
export declare const ServerCertificateListStatus: z.ZodObject<{
    serverCertificateList: z.ZodArray<z.ZodObject<{
        domainName: z.ZodOptional<z.ZodString>;
        issuerName: z.ZodOptional<z.ZodString>;
        validFrom: z.ZodOptional<z.ZodISODateTime>;
        validTo: z.ZodOptional<z.ZodISODateTime>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ServerCertificateListStatus = z.infer<typeof ServerCertificateListStatus>;
export declare const SecurityState: z.ZodObject<{
    serverCertificateList: z.ZodOptional<z.ZodObject<{
        _timestamp: z.ZodISODateTime;
        serverCertificateList: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SecurityState = z.infer<typeof SecurityState>;
export declare const SecurityStatus: z.ZodObject<{
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
export type SecurityStatus = z.infer<typeof SecurityStatus>;
