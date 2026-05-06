export const navItems = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/experts", label: "For Experts" },
  { href: "/demo", label: "Book Demo" },
  { href: "/login", label: "Log in" }
];

export const platforms = ["Claude Code", "Codex", "Cursor", "Lovable", "Replit", "Any MCP"];

export const domains = [
  {
    title: "Software Engineering",
    body: "Debug loops, architecture reviews, migrations, production incidents, and test failures."
  },
  {
    title: "Design & UX",
    body: "Flow critique, interface polish, accessibility, product taste, and conversion issues."
  },
  {
    title: "Strategy & GTM",
    body: "Positioning, pricing, sales motion, competitive research, and launch planning."
  },
  {
    title: "Finance & Ops",
    body: "Forecasting, reconciliation, vendor workflows, compliance checks, and operating models."
  }
];

export const workflowSteps = [
  {
    number: "01",
    title: "Agent gets blocked",
    body: "The workflow hits a bug, edge case, design decision, policy review, or business question it cannot resolve confidently."
  },
  {
    number: "02",
    title: "Porto matches the right expert",
    body: "Skills, urgency, context, and availability are used to route the request to a verified specialist."
  },
  {
    number: "03",
    title: "Expert works in context",
    body: "The specialist sees the agent trace, files, prior attempts, and constraints, then responds with concrete guidance."
  },
  {
    number: "04",
    title: "Agent continues",
    body: "The expert answer returns to the agent context so the task continues without a manual handoff."
  }
];
