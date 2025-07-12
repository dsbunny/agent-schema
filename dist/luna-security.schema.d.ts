import { z } from 'zod/v4';
export declare const PEMChain: z.ZodString;
export type PEMChain = z.infer<typeof PEMChain>;
export declare const ServerCertificate: z.ZodObject<{
    domainName: z.ZodOptional<z.ZodString>;
    issuerName: z.ZodOptional<z.ZodString>;
    validFrom: z.ZodOptional<z.iso.ZodISODateTime>;
    validTo: z.ZodOptional<z.iso.ZodISODateTime>;
}, {}, {}>;
export type ServerCertificate = z.infer<typeof ServerCertificate>;
export declare const ServerCertificateListState: z.ZodObject<{
    serverCertificateList: z.ZodArray<z.ZodString>;
}, {}, {}>;
export type ServerCertificateListState = z.infer<typeof ServerCertificateListState>;
export declare const ServerCertificateListStatus: z.ZodObject<{
    serverCertificateList: z.ZodArray<z.ZodObject<{
        domainName: z.ZodOptional<z.ZodString>;
        issuerName: z.ZodOptional<z.ZodString>;
        validFrom: z.ZodOptional<z.iso.ZodISODateTime>;
        validTo: z.ZodOptional<z.iso.ZodISODateTime>;
    }, {}, {}>>;
}, {}, {}>;
export type ServerCertificateListStatus = z.infer<typeof ServerCertificateListStatus>;
export declare const SecurityState: z.ZodObject<{
    serverCertificateList: z.ZodOptional<z.ZodObject<{
        serverCertificateList: z.ZodArray<z.ZodString>;
    }, {}, {}>>;
}, {}, {}>;
export type SecurityState = z.infer<typeof SecurityState>;
export declare const SecurityStatus: z.ZodObject<{
    serverCertificateList: z.ZodOptional<z.ZodObject<{
        serverCertificateList: z.ZodArray<z.ZodObject<{
            domainName: z.ZodOptional<z.ZodString>;
            issuerName: z.ZodOptional<z.ZodString>;
            validFrom: z.ZodOptional<z.iso.ZodISODateTime>;
            validTo: z.ZodOptional<z.iso.ZodISODateTime>;
        }, {}, {}>>;
    }, {}, {}>>;
}, {}, {}>;
export type SecurityStatus = z.infer<typeof SecurityStatus>;
