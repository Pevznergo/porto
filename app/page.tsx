import Link from "next/link";
import { AgentConsole } from "@/components/AgentConsole";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { capabilityCards, domains, workflowSteps } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero hero-story">
          <div className="hero-copy hero-copy-story">
            <div className="backed-row">
              <span>Backed by</span>
              <strong>Y Combinator</strong>
            </div>
            <h1>
              <span>On demand</span>
              <span>Human Experts</span>
              <span>for AI Agents.</span>
            </h1>
            <p className="hero-text">
              When your AI agent gets stuck, we connect it to a verified human expert in real-time via MCP.
              Engineers, designers, and more, matched in &lt; 30s.
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
          <div className="hero-visual">
            <AgentConsole />
            <div className="hero-ribbon">
              <span>Live match</span>
              <strong>Security · Nolan · joined 18s ago</strong>
              <span>Agent keeps typing while expert takes over</span>
            </div>
          </div>
        </section>

        <section className="section signal-section">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">How It Works</p>
              <h2>One integration. Human expertise on demand.</h2>
            </div>
            <p className="section-note">
              The page should show the motion: stuck, search, match, continue.
            </p>
          </div>
          <div className="signal-grid">
            {workflowSteps.map((step, index) => (
              <article key={step.number} className={`signal-card signal-card-${index + 1}`}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="signal-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="section radar-story">
          <div className="radar-copy">
            <p className="eyebrow">Live matching</p>
            <h2>Search the pool like a radar, not a directory.</h2>
            <p>
              The moving search in the reference works because it signals active resolution. Porto should
              keep that feeling across the page.
            </p>
            <ul>
              <li>Live candidate ranking</li>
              <li>Expert presence state</li>
              <li>Search, then match, then handoff</li>
            </ul>
          </div>
          <div className="radar-scene">
            <AgentConsole />
          </div>
        </section>

        <section className="section domains-section">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Verified & Vetted Experts</p>
              <h2>Every domain, every timezone.</h2>
            </div>
            <p className="section-note">
              Identity-checked experts across engineering, design, strategy, finance, and ops.
            </p>
          </div>
          <div className="domain-showcase">
            <div className="domain-spotlight">
              <AgentConsole />
            </div>
            <div className="domain-grid">
              {domains.map((domain) => (
                <article key={domain.title}>
                  <h3>{domain.title}</h3>
                  <p>{domain.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section capability-section">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Plug & Play Integration</p>
              <h2>Seamless context handoff.</h2>
            </div>
            <p className="section-note">
              One MCP or API call keeps the whole thread intact when the agent needs a human.
            </p>
          </div>
          <div className="capability-grid">
            {capabilityCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-grid cta-grid-story">
          <article>
            <span>Plug & Play Integration</span>
            <h2>One MCP or API. No extra glue.</h2>
            <p>Connect once and route agent blockers to humans without rebuilding your workflow.</p>
            <Link className="button" href="/start">
              Get Started
            </Link>
          </article>
          <article>
            <span>Seamless Context Handoff</span>
            <h2>Files, logs, and errors move with the request.</h2>
            <p>No re-explaining, no copy-paste, no lost context between the agent and the expert.</p>
            <Link className="button button-ghost" href="/experts">
              Join as Expert
            </Link>
          </article>
        </section>
      </main>
    </>
  );
}
