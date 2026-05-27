import { CalendarDays, Car, MapPin, Phone } from "lucide-react";

export type VerticalId = "auto-service";

export type LeadMockupConfig = {
  business_name: string;
  town: string;
  category: string;
  verified_url: string;
  verified_contact_method: string;
  verified_contact_value: string;
  service_1: string;
  service_2: string;
  pain_point: string;
  customer_action: string;
  verified_trust_signal: string;
};

type MockupConfig = {
  name: string;
  category: string;
  business: string;
  town: string;
  icon: typeof CalendarDays;
  accent: string;
  dark: string;
  soft: string;
  eyebrow: string;
  headline: string;
  hero: string;
  cta: string;
  secondary: string;
  proof: string;
  services: string[];
  serviceDetails?: string[];
  trustFacts?: string[];
  contact?: string;
  address?: string;
  sourceUrl?: string;
  contactSourceUrl?: string;
  pain: string;
  rhythm: string;
  image: string;
};

export const requiredLeadConfigFields: (keyof LeadMockupConfig)[] = [
  "business_name",
  "town",
  "category",
  "verified_url",
  "verified_contact_method",
  "verified_contact_value",
  "service_1",
  "service_2",
  "pain_point",
  "customer_action",
  "verified_trust_signal"
];

export const mockups: Record<VerticalId, MockupConfig> = {
  "auto-service": {
    name: "Long's Car Care",
    category: "auto-service",
    business: "Long's Car Care",
    town: "Platteville, WI",
    icon: Car,
    accent: "#f2b544",
    dark: "#0f1720",
    soft: "#edf2f6",
    eyebrow: "20 N Chestnut St, Platteville, WI",
    headline: "Auto & Small Engine Repair in Platteville",
    hero:
      "Local repair service for oil changes, brakes, engine work, and small-engine equipment - all from one trusted shop on Chestnut Street.",
    cta: "Call to Schedule",
    secondary: "View Services",
    proof: "Locally-owned and operated auto repair shop and service center",
    services: ["Oil Changes", "Brake Service", "Small Engine Repair", "Auto Repair"],
    serviceDetails: [
      "Routine maintenance and oil changes for Platteville drivers.",
      "Brake service for safe, reliable stopping.",
      "Snow blowers, chainsaws, lawnmowers, and other small-engine equipment.",
      "General auto repair for everyday service needs."
    ],
    trustFacts: [
      "Auto repair and small-engine repair",
      "20 N Chestnut St, Platteville",
      "Call 608-348-5636 to schedule"
    ],
    contact: "608-348-5636",
    address: "20 N Chestnut St, Platteville, WI 53818",
    sourceUrl: "https://www.longscarcare.net/services",
    contactSourceUrl: "https://www.longscarcare.net/contact",
    pain:
      "Help Platteville drivers quickly find the services Long's offers, call the shop, and stop in.",
    rhythm: "Local hero with shop address, clear service cards, visible phone number, and verified shop details.",
    image:
      "linear-gradient(135deg, rgba(15,23,32,.93), rgba(15,23,32,.7) 52%, rgba(242,181,68,.24)), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1800&q=80')"
  }
};

export const verticalIds = Object.keys(mockups) as VerticalId[];

export const sharedIcons = {
  CalendarDays,
  MapPin,
  Phone
};
