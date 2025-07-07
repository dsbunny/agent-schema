// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import { z } from 'zod/v4';

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
export type ServerCertificate = z.infer<typeof ServerCertificate>;

// #region State
export const SecurityState = z.object({
	serverCertificateList: z.array(z.string()).optional()
});
export type SecurityState = z.infer<typeof SecurityState>;
// #endregion

// #region Status
export const SecurityStatus = z.object({
	serverCertificateList: z.array(ServerCertificate).optional()
});
export type SecurityStatus = z.infer<typeof SecurityStatus>;
// #endregion
