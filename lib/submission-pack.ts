/** Submission pack — RFQ annexures, mandatory §2 docs, and PDF merge order */

export const primaryContact = {
  name: "Fusi Monyolo",
  role: "Primary Proposal Contact",
  email: "services@ibd.co.ls",
  phone: "+266 62554433",
} as const;

export const companyPostalAddress = "P.O. Box 13145, Maseru 100, Lesotho" as const;

/** Extracted from Infinity Compliance Docs (July 2026) */
export const companyProfile = {
  legalName: "INFINITY BUSINESS DYNAMICS (PTY) LTD",
  tradingName: "INFINITY BUSINESS DYNAMICS",
  registrationNo: "A2023/5840",
  tin: "200116903-2",
  taxClearanceCertificateId: "1245456124",
  taxClearanceValidUntil: "12 May 2027",
  businessLicenceRenewed: "23 April 2026",
  businessLicenceExpiry: "23 April 2029",
  registeredAddress: "Lancers Road, House No.16, Maseru, Lesotho",
} as const;

export const bbbeeGapStatement = `Infinity Business Dynamics (Pty) Ltd is a Lesotho-registered enterprise operating primarily within the Kingdom of Lesotho. A formal B-BBEE (Broad-Based Black Economic Empowerment) certificate issued under the South African B-BBEE Codes is not applicable to our Lesotho incorporation.

We confirm our commitment to transformation, local employment and enterprise development within Lesotho, and we will provide any additional empowerment or local-content documentation requested by Barloworld Equipment during due diligence.` as const;

export type SubmissionDocument = {
  id: string;
  title: string;
  purpose: string | null;
  /** Path under /appendices/ for PDF merge or download */
  file?: string;
};

export type SubmissionSection = {
  label: string;
  items: readonly SubmissionDocument[];
};

export const submissionSections: readonly SubmissionSection[] = [
  {
    label: "Barloworld RFQ Annexures",
    items: [
      {
        id: "ANNEXURE A",
        title: "Statement of Work",
        purpose:
          "Technical and functional response to RFQ Annexure A — addressed in the main proposal document (slides 4–38).",
      },
      {
        id: "ANNEXURE B",
        title: "E-Invoicing Gateway API Specification v1.11",
        purpose: "As issued by Barloworld Equipment (RFQ Annexure B).",
        file: "annexure-b-e-invoicing-gateway-api-spec.pdf",
      },
      {
        id: "ANNEXURE C",
        title: "Intent to Respond",
        purpose: "Completed and signed Intent to Respond (RFQ Annexure C).",
        file: "annexure-c-intent-to-respond-signed.pdf",
      },
      {
        id: "ANNEXURE D",
        title: "Pricing Requirements",
        purpose:
          "Detailed pricing model — Year 1 licence & implementation (ZAR 391,500) and annual maintenance from year 2 (ZAR 105,225 p.a.).",
        file: "annexure-d-pricing-requirements.pdf",
      },
      {
        id: "ANNEXURE E",
        title: "Framework Agreement & Clause Deviation Table",
        purpose:
          "Acceptance of BWE Standard Terms & Conditions or submitted deviations (RFQ Annexure E).",
        file: "annexure-e-framework-agreement-deviations.pdf",
      },
      {
        id: "ANNEXURE F",
        title: "Non-Disclosure Agreement (NDA)",
        purpose: "Signed confidentiality agreement (RFQ Annexure F).",
        file: "annexure-f-nda-confidentiality-agreement-signed.pdf",
      },
    ],
  },
  {
    label: "Mandatory Supporting Documents (RFQ §2)",
    items: [
      {
        id: "§2.1",
        title: "Official Company Letterhead",
        purpose: "Executive letter and proposal cover within the main proposal PDF.",
      },
      {
        id: "§2.2",
        title: "Company Registration",
        purpose:
          "Business Identity Card, Certificate of Business Name and company registration (Reg. A2023/5840; renewed 23 April 2026).",
        file: "mandatory-compliance-documents-2026.pdf",
      },
      {
        id: "§2.3",
        title: "Shareholder Identification",
        purpose:
          "Copies of identification and certificates for shareholders as listed in company registration.",
        file: "mandatory-shareholder-identification.pdf",
      },
      {
        id: "§2.4",
        title: "Letter of Good Standing",
        purpose:
          "Latest letter of good standing from the Compensation Commissioner (or regional equivalent).",
        file: "mandatory-good-standing-letter.pdf",
      },
      {
        id: "§2.5",
        title: "Tax Clearance Certificate",
        purpose:
          "Valid RSL tax clearance certificate (TIN 200116903-2; valid until 12 May 2027). Included in compliance pack.",
        file: "mandatory-compliance-documents-2026.pdf",
      },
      {
        id: "VAT",
        title: "VAT Registration Certificate",
        purpose: "Lesotho VAT registration certificate for Infinity Business Dynamics (Pty) Ltd.",
        file: "mandatory-vat-registration-certificate.pdf",
      },
      {
        id: "Banking",
        title: "Banking Details",
        purpose: "Confirmed banking details for supplier payments and remittances.",
        file: "mandatory-banking-details.pdf",
      },
      {
        id: "§2.6",
        title: "B-BBEE Certificate / Gap Statement",
        purpose:
          "B-BBEE certificate or written statement of measures in place to close any empowerment gap (RFQ §2.6).",
        file: "mandatory-bbbee-gap-statement.pdf",
      },
      {
        id: "§2.7",
        title: "Supplier Self-Assessment Questionnaire (Signed)",
        purpose: "Completed Barloworld Equipment supplier self-assessment (RFQ submission pack).",
        file: "support-f-supplier-self-assessment-signed.pdf",
      },
      {
        id: "§2.8",
        title: "BW Group Supplier Code of Conduct (Signed)",
        purpose: "Signed acknowledgement of Barloworld supplier code of conduct.",
        file: "support-g-supplier-code-of-conduct-signed.pdf",
      },
    ],
  },
] as const;

/** Flat list for appendix slide rendering */
export const appendices = submissionSections.flatMap((section) => section.items);

/** PDFs merged after deck slides, in Alliance appendix order */
export const submissionPdfMergeOrder = [
  "support-a-rsl-accreditation-letter.pdf",
  "support-b-motheo-integrator-guide.pdf",
  "appendix-f-commercial-pricing-schedule.pdf",
  "mandatory-compliance-documents-2026.pdf",
  "mandatory-tax-clearance-certificate.pdf",
  "mandatory-banking-details.pdf",
  "mandatory-vat-registration-certificate.pdf",
] as const;
