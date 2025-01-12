import { PricingPlan } from "@/types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Standard",
    price: 9,
    description: "Get started with...",
    features: [
      "Live chat for support",
      "Team inboxes",
      "Ticketing workflows",
      "Service Level Agreement rules",
      "Workload management",
      "Role-based permissions",
      "Outcome reporting",
    ],
  },
  {
    name: "Plus",
    price: 29,
    description: "All Standard features and...",
    features: [
      "Outbound email and in-product messaging",
      "Push messages & notifications",
      "Custom bots",
      "Mobile Carousels",
      "Banner messages",
      "Multi-channel campaigns A/B testing & control groups",
      "Message versioning",
    ],
  },
  {
    name: "Pro",
    price: 59,
    description: "All Plus features and...",
    features: [
      "Conversational chatbots",
      "Live chat for sales",
      "Smart lead qualification",
      "Service Level Agreement rules",
      "Workload management",
      "Role-based permissions",
      "Outcome reporting",
      "Multiple team inboxes",
      "Automatic meeting booking",
      "Conversation routing rules",
    ],
  },
];
