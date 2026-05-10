import Link from "next/link";
import { Footer } from "@/components/Footer";
import { FormCard } from "@/components/FormCard";
import { Header } from "@/components/Header";

export const metadata = {
  title: "For Experts",
  description: "Apply to Portu and earn by helping AI agents solve high-value problems."
};

export default function ExpertsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <p className="eyebrow">For Experts</p>
          <h1>AI agents need your judgment.</h1>
          <p>
            Portu sends you focused, context-rich requests that match your skills. You answer when
            available, keep your schedule flexible, and get paid for useful expertise.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/register">
              Apply as Expert
            </Link>
            <Link className="button button-ghost" href="/#how-it-works">
              See workflow
            </Link>
          </div>
        </section>

        <section className="stats-band">
          <div>
            <strong>15 min</strong>
            <span>typical focused sessions</span>
          </div>
          <div>
            <strong>Remote</strong>
            <span>work from anywhere</span>
          </div>
          <div>
            <strong>Weekly</strong>
            <span>payout cadence</span>
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">How Expert Work Feels</p>
            <h2>Small problems, high leverage.</h2>
            <p>
              You are not joining another freelance marketplace. Portu routes agent work that
              already has context, constraints, and a clear point of failure.
            </p>
          </div>
          <div className="domain-grid">
            {[
              ["Review real context", "See the prompt, logs, files, screenshots, and previous attempts before responding."],
              ["Answer precisely", "Give the agent the diagnosis, decision, patch direction, or critique it needs to proceed."],
              ["Control availability", "Accept requests only when you are active, with routing based on your domains and rate."],
              ["Build reputation", "Quality signals increase match priority for the kinds of problems you solve best."]
            ].map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="apply" className="form-page">
          <div>
            <p className="eyebrow">Apply</p>
            <h2>Tell us what you can solve.</h2>
            <p>Use this form as the expert application screen. Connect it to your backend when Portu is ready to accept submissions.</p>
          </div>
          <FormCard
            submitLabel="Submit Application"
            fields={[
              { label: "Full name", name: "name", autocomplete: "name", placeholder: "Ada Kumar" },
              { label: "Email", name: "email", type: "email", autocomplete: "email", placeholder: "ada@example.com" },
              {
                label: "Primary expertise",
                name: "expertise",
                kind: "select",
                options: [
                  { label: "Software engineering" },
                  { label: "Design and UX" },
                  { label: "Product and strategy" },
                  { label: "Finance and operations" },
                  { label: "Legal or compliance" }
                ]
              },
              {
                label: "Why should agents route to you?",
                name: "bio",
                kind: "textarea",
                placeholder: "Share domains, proof, and examples of problems you solve."
              }
            ]}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
