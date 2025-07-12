// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import { z } from 'zod/v4';
export const PEMChain = z.string().refine((val) => {
    return val.trim().startsWith('-----BEGIN CERTIFICATE-----') && val.trim().endsWith('-----END CERTIFICATE-----');
});
export const ServerCertificate = z.object({
    domainName: z.string().optional()
        .describe('The domain name of the server certificate, e.g., "example.com"'),
    issuerName: z.string().optional()
        .describe('The issuer name of the server certificate, e.g., "Example CA"'),
    validFrom: z.iso.datetime().optional()
        .describe('The start date of the server certificate validity period, e.g., "2023-01-01T00:00:00Z"'),
    validTo: z.iso.datetime().optional()
        .describe('The end date of the server certificate validity period, e.g., "2024-01-01T00:00:00Z"'),
})
    .describe('The server certificate information, including domain name, issuer name, and validity period');
export const ServerCertificateListState = z.object({
    serverCertificateList: z.array(PEMChain)
        .describe('The list of server certificates, each containing domain name, issuer name, and validity period'),
})
    .describe('The state of server certificates, including a list of certificates with their details');
export const ServerCertificateListStatus = z.object({
    serverCertificateList: z.array(ServerCertificate)
        .describe('The list of server certificates, each containing domain name, issuer name, and validity period'),
})
    .describe('The status of server certificates, including a list of certificates with their details');
// #region State
export const SecurityState = z.object({
    serverCertificateList: ServerCertificateListState.optional()
});
// #endregion
// #region Status
export const SecurityStatus = z.object({
    serverCertificateList: ServerCertificateListStatus.optional()
});
// #endregion
//# sourceMappingURL=luna-security.schema.js.map