import { faker } from "@faker-js/faker";

export const salutation = ["Mr.", "Ms.", "Mrs.", "Dr.", "Prof.", "Mx."];

export const leadSource = ["Web", "Phone Inquiry", "Partner Referral", "Purchased List", "Other"];

export const industry = [
  "Agriculture",
  "Apparel",
  "Banking",
  "Biotechnology",
  "Chemicals",
  "Communications",
  "Construction",
  "Consulting",
  "Education",
  "Electronics",
  "Energy",
  "Engineering",
  "Entertainment",
  "Environmental",
  "Finance",
  "Food & Beverage",
  "Government",
  "Healthcare",
  "Hospitality",
  "Insurance",
  "Machinery",
  "Manufacturing",
  "Media",
  "Not For Profit",
  "Recreation",
  "Retail",
  "Shipping",
  "Technology",
  "Telecommunications",
  "Transportation",
  "Utilities",
  "Other",
];

export const leadStatus = ["Open - Not Contacted", "Working - Contacted", "Closed - Converted"];

export const rating = ["Hot", "Warm", "Cold"];

export interface LeadData {
  salutation: string;
  firstName: string;
  lastName: string;
  company: string;
  title: string;
  annualRevenue: string;
  phone: string;
  mobile: string;
  fax: string;
  email: string;
  website: string;
  numberOfEmployees: string;
  leadSource: string;
  industry: string;
  leadStatus: string;
  rating: string;
}

export function generateLeadData(): LeadData {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    salutation: faker.helpers.arrayElement(salutation),
    firstName,
    lastName,
    company: faker.company.name(),
    title: faker.person.jobTitle(),
    annualRevenue: faker.number.int({ min: 100, max: 999 }).toString(),
    phone: `02${faker.string.numeric(8)}`,
    mobile: `09${faker.string.numeric(9)}`,
    fax: faker.string.numeric(10),
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    website: faker.internet.url(),
    numberOfEmployees: faker.number.int({ min: 100, max: 999 }).toString(),
    leadSource: faker.helpers.arrayElement(leadSource),
    industry: faker.helpers.arrayElement(industry),
    leadStatus: faker.helpers.arrayElement(leadStatus),
    rating: faker.helpers.arrayElement(rating),
  };
}
