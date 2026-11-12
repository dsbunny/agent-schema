// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { lunaRegistry } from './registry.js';
export const PEMChainSchema = z.string().refine((val) => {
    return val.trim().startsWith('-----BEGIN CERTIFICATE-----') && val.trim().endsWith('-----END CERTIFICATE-----');
}).register(lunaRegistry, {
    id: 'PEMChainSchema',
    description: 'A PEM-encoded certificate chain, starting with "-----BEGIN CERTIFICATE-----" and ending with "-----END CERTIFICATE-----"',
});
export const ServerCertificateSchema = z.object({
    '@type': z.literal('ServerCertificate')
        .describe('Type of the server certificate'),
    domainName: z.string().optional()
        .describe('The domain name of the server certificate, e.g., "example.com"'),
    issuerName: z.string().optional()
        .describe('The issuer name of the server certificate, e.g., "Example CA"'),
    validFrom: z.iso.datetime().optional()
        .describe('The start date of the server certificate validity period, e.g., "2023-01-01T00:00:00Z"'),
    validTo: z.iso.datetime().optional()
        .describe('The end date of the server certificate validity period, e.g., "2024-01-01T00:00:00Z"'),
}).register(lunaRegistry, {
    id: 'ServerCertificateSchema',
    description: 'The server certificate information, including domain name, issuer name, and validity period',
});
export const ServerCertificateListStateSchema = z.object({
    '@type': z.literal('ServerCertificateListState')
        .describe('Type of the server certificate list state'),
    '@timestamp': z.iso.datetime()
        .describe('The timestamp of the last time the server certificate list was updated, e.g., "2023-01-01T00:00:00Z"'),
    serverCertificateList: z.array(PEMChainSchema)
        .describe('The list of server certificates, each containing domain name, issuer name, and validity period'),
}).register(lunaRegistry, {
    id: 'ServerCertificateListStateSchema',
    description: 'The state of server certificates, including a list of certificates with their details',
});
export const ServerCertificateListStatusSchema = z.object({
    '@type': z.literal('ServerCertificateListStatus')
        .describe('Type of the server certificate list status'),
    serverCertificateList: z.array(ServerCertificateSchema)
        .describe('The list of server certificates, each containing domain name, issuer name, and validity period'),
}).register(lunaRegistry, {
    id: 'ServerCertificateListStatusSchema',
    description: 'The status of server certificates, including a list of certificates with their details',
});
// #region State
export const SecurityStateSchema = z.object({
    '@type': z.literal('SecurityState')
        .describe('Type of the security state'),
    serverCertificateList: ServerCertificateListStateSchema.optional()
}).register(lunaRegistry, {
    id: 'SecurityStateSchema',
    description: 'The security state of the signage device, including the server certificate list',
});
// #endregion
// #region Status
export const SecurityStatusSchema = z.object({
    '@type': z.literal('SecurityStatus')
        .describe('Type of the security status'),
    serverCertificateList: ServerCertificateListStatusSchema.optional(),
    _debug: z.string().optional()
        .describe('SCAP debug mode output'),
}).register(lunaRegistry, {
    id: 'SecurityStatusSchema',
    description: 'The security status of the signage device, including the server certificate list and debug information',
});
// #endregion
//# sourceMappingURL=luna-security.schema.js.map