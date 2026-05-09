import { Footer } from "@/components/Footer";
import { FormCard } from "@/components/FormCard";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Book Demo"
};

export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="form-page">
        <div>
          <p className="eyebrow">Teams</p>
          <h1>Book a Portu demo.</h1>
          <p>See how expert escalation works for coding agents, internal copilots, research workflows, and operations automation.</p>
        </div>
        <FormCard
          submitLabel="Request Demo"
          submitHref="/login"
          secondary={{ href: "/login", label: "Go to Login" }}
          title="Select a Date & Time"
          eyebrow="Humwork Demo"
          summary="Book a 15 minute call to see the workflow live."
          note="We’ll share conferencing details after confirmation."
          fields={[
            { label: "Work email", name: "email", type: "email", placeholder: "you@company.com" },
            { label: "Company", name: "company", placeholder: "Company name" },
            {
              label: "Team size",
              name: "teamSize",
              kind: "select",
              options: [{ label: "1-10" }, { label: "11-50" }, { label: "51-250" }, { label: "251+" }]
            },
            {
              label: "What agents are you deploying?",
              name: "agents",
              kind: "textarea",
              placeholder: "Coding, support, research, operations, finance..."
            }
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
