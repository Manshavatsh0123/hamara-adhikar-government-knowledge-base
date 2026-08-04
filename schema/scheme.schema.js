const { z } = require("zod");

const BenefitSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const EligibilitySchema = z.object({
  title: z.string(),
  description: z.string(),
});

const StepSchema = z.object({
  step: z.number().int().positive(),
  title: z.string(),
  description: z.string(),
});

const DocumentSchema = z.object({
  name: z.string(),
  mandatory: z.boolean(),
  remarks: z.string(),
});

const OfficialSourceSchema = z.object({
  website: z.string(),
  apply_link: z.string(),
  status_link: z.string(),
  download_link: z.string(),
  helpline: z.string(),
  email: z.string(),
});

const MetadataSchema = z.object({
  language: z.string(),

  status: z.string(),

  last_verified: z.string(),

  created_at: z.string(),

  updated_at: z.string(),

  version: z.string(),
});

const FAQSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const ApplicationProcessSchema = z.object({
  mode: z.string(),

  registration_steps: z.array(StepSchema),

  application_steps: z.array(StepSchema),
});

const SchemeSchema = z.object({
  id: z.coerce.number(),

  scheme_code: z.string(),

  scheme_name: z.string(),

  state: z.string(),

  department: z.string(),

  categories: z.array(z.string()),

  description: z.string(),

  objectives: z.array(z.string()),

  benefits: z.array(BenefitSchema),

  eligibility: z.array(EligibilitySchema),

  application_process: ApplicationProcessSchema,

  documents_required: z.array(DocumentSchema),

  official_source: OfficialSourceSchema,

  important_notes: z.array(z.string()),

  faqs: z.array(FAQSchema),

  metadata: MetadataSchema,
});

module.exports = {
  SchemeSchema,
};