import Link from "next/link";
import { AgentConsole } from "@/components/AgentConsole";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { domains, platforms, workflowSteps } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Backed by operators building agent-native teams</p>
            <h1>On-demand human specialists for AI agents.</h1>
            <p className="hero-text">
              When an agent stalls, Porto routes the full context to a vetted expert in real time.
              Engineers, designers, analysts, compliance reviewers, and operators join in minutes so
              the agent can keep moving.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/start">
                Get Started
              </Link>
              <Link className="button button-ghost" href="/experts">
                Join as Expert
              </Link>
            </div>
          </div>
          <AgentConsole />
        </section>

        <section className="platforms">
          <p>Supported AI platforms</p>
          <div className="logo-row" aria-label="Supported platforms">
            {platforms.map((platform) => (
              <span key={platform}>{platform}</span>
            ))}
          </div>
        </section>

        <section className="stats-band">
          <div>
            <strong>30 sec</strong>
            <span>median match time</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>global expert coverage</span>
          </div>
          <div>
            <strong>3,000+</strong>
            <span>screened specialists</span>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="section-heading">
            <p className="eyebrow">How It Works</p>
            <h2>One integration. A human escalation path for every agent.</h2>
          </div>
          <div className="steps">
            {workflowSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <p className="eyebrow">Every Domain</p>
            <h2>Human judgment where agents need it most.</h2>
            <p>Porto covers knowledge-work problems that require taste, experience, accountability, or fresh context.</p>
          </div>
          <div className="domain-grid">
            {domains.map((domain) => (
              <article key={domain.title}>
                <h3>{domain.title}</h3>
                <p>{domain.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section feature-band">
          <div className="feature-copy">
            <p className="eyebrow">Built for Agent Workflows</p>
            <h2>Secure context handoff, fast routing, and clean answers.</h2>
          </div>
          <div className="feature-list">
            <article>
              <h3>Verified experts</h3>
              <p>Identity checks, skill reviews, domain tests, and ongoing quality ratings.</p>
            </article>
            <article>
              <h3>MCP and API access</h3>
              <p>Connect from coding agents, internal copilots, workflow engines, or custom tools.</p>
            </article>
            <article>
              <h3>PII-aware sharing</h3>
              <p>Redaction rules and scoped context packages keep sensitive information controlled.</p>
            </article>
          </div>
        </section>

        <section className="section integrations">
          <div className="section-heading compact">
            <p className="eyebrow">Works With</p>
            <h2>Your agent stack.</h2>
          </div>
          <div className="integration-groups">
            <div>
              <h3>AI Coding & Building</h3>
              <div className="chip-row">
                {["Claude Code", "Cursor", "Codex", "Lovable", "Replit"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Platforms & Orchestrators</h3>
              <div className="chip-row">
                {["ChatGPT", "Claude", "Gemini", "OpenAI API", "Any MCP"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-grid">
          <article>
            <span>For Builders</span>
            <h2>Give agents a human escalation layer.</h2>
            <p>Install Porto, define routing rules, and let blocked workflows ask for expert help automatically.</p>
            <Link className="button" href="/start">
              Get Started
            </Link>
          </article>
          <article>
            <span>For Experts</span>
            <h2>Earn by helping AI agents solve hard problems.</h2>
            <p>Set availability, accept relevant requests, and get paid for precise, high-leverage expertise.</p>
            <Link className="button button-ghost" href="/experts">
              Apply as Expert
            </Link>
          </article>
        </section>

        <section className="enterprise">
          <div>
            <p className="eyebrow">Teams</p>
            <h2>Deploy Porto for your company.</h2>
            <p>Priority matching, private expert pools, invoicing, admin controls, and implementation support.</p>
          </div>
          <Link className="button" href="/demo">
            Book Demo
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
