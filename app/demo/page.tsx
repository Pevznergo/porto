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
