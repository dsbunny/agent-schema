// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod/v4";

export const PEMChainSchema = z.string().refine((val) => {
	return val.trim().startsWith('-----BEGIN CERTIFICATE-----') && val.trim().endsWith('-----END CERTIFICATE-----');
});
export type PEMChain = z.infer<typeof PEMChainSchema>;

export const ServerCertificateSchema = z.object({
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
export type ServerCertificate = z.infer<typeof ServerCertificateSchema>;

export const ServerCertificateListStateSchema = z.object({
	_timestamp: z.iso.datetime()
		.describe('The timestamp of the last time the server certificate list was updated, e.g., "2023-01-01T00:00:00Z"'),
	serverCertificateList: z.array(PEMChainSchema)
		.describe('The list of server certificates, each containing domain name, issuer name, and validity period'),
})
	.describe('The state of server certificates, including a list of certificates with their details');
export type ServerCertificateListState = z.infer<typeof ServerCertificateListStateSchema>;

export const ServerCertificateListStatusSchema = z.object({
	serverCertificateList: z.array(ServerCertificateSchema)
		.describe('The list of server certificates, each containing domain name, issuer name, and validity period'),
})
	.describe('The status of server certificates, including a list of certificates with their details');
export type ServerCertificateListStatus = z.infer<typeof ServerCertificateListStatusSchema>;

// #region State
export const SecurityStateSchema = z.object({
	serverCertificateList: ServerCertificateListStateSchema.optional()
});
export type SecurityState = z.infer<typeof SecurityStateSchema>;
// #endregion

// #region Status
export const SecurityStatusSchema = z.object({
	serverCertificateList: ServerCertificateListStatusSchema.optional(),
	_debug: z.string().optional()
		.describe('SCAP debug mode output'),
});
export type SecurityStatus = z.infer<typeof SecurityStatusSchema>;
// #endregion
