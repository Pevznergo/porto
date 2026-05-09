import { FormCard } from "@/components/FormCard";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Get Started"
};

export default function StartPage() {
  return (
    <>
      <Header />
      <main className="form-page">
        <div>
          <p className="eyebrow">Install Portu</p>
          <h1>Start routing agent blockers.</h1>
          <p>Create a workspace, connect MCP or API access, and define which classes of problems should escalate to humans.</p>
        </div>
        <FormCard
          submitLabel="Create Workspace"
          title="Create Workspace"
          eyebrow="Install Portu"
          summary="Set up a workspace to route agent blockers to humans."
          note="Connect MCP or API access and define escalation rules in a few minutes."
          fields={[
            { label: "Name", name: "name", autocomplete: "name", placeholder: "Mira Chen" },
            { label: "Work email", name: "email", type: "email", autocomplete: "email", placeholder: "mira@company.com" },
            {
              label: "Primary use case",
              name: "useCase",
              kind: "select",
              options: [
                { label: "Coding agents" },
                { label: "Customer operations" },
                { label: "Research workflows" },
                { label: "Finance operations" },
                { label: "Custom automation" }
              ]
            }
          ]}
        />
      </main>
    </>
  );
}
