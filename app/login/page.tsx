import { FormCard } from "@/components/FormCard";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Log in"
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="form-page">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Log in to Portu.</h1>
          <p>Access routing rules, active expert sessions, invoices, and integration settings.</p>
        </div>
        <FormCard
          submitLabel="Log in"
          secondary={{ href: "/start", label: "Create account" }}
          fields={[
            { label: "Email", name: "email", type: "email", autocomplete: "email", placeholder: "you@company.com" },
            { label: "Password", name: "password", type: "password", autocomplete: "current-password", placeholder: "password" }
          ]}
        />
      </main>
    </>
  );
}
