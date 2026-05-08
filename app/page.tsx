import Link from "next/link";
import { AgentConsole } from "@/components/AgentConsole";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { capabilityCards, domains, platforms, workflowSteps } from "@/data/site";

const liveSignals = [
  { value: "<60s", label: "to first match" },
  { value: "24/7", label: "live coverage" },
  { value: "1 MCP", label: "or API call" }
];

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
            <div className="hero-metrics">
              {liveSignals.map((signal) => (
                <div key={signal.label}>
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                </div>
              ))}
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

        <section className="platforms signal-strip">
          <p>Supported AI Platforms</p>
          <div className="platform-grid" aria-label="Supported platforms">
            {platforms.map((platform) => (
              <span key={platform}>
                <i>{platform.slice(0, 1)}</i>
                {platform}
              </span>
            ))}
          </div>
        </section>

        <section className="stats-band stats-band-story">
          <p>Human answers land fast, with the context already attached.</p>
          <div>
            <span>Avg. first reply</span>
            <strong>&lt;60s</strong>
          </div>
          <div>
            <span>Match rate</span>
            <strong>93%</strong>
          </div>
          <div>
            <span>Verified experts</span>
            <strong>3,000+</strong>
          </div>
        </section>

        <section className="section signal-section">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">What Porto does</p>
              <h2>Match a human, keep the context, return the answer.</h2>
            </div>
            <p className="section-note">
              A good landing page should feel like the product. Here, the product is a search, a match, a
              handoff, and a return to work.
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

        <section id="how-it-works" className="section process-section">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">How it works</p>
              <h2>One integration. Human expertise on demand.</h2>
            </div>
            <p className="section-note">
              The page should not make people think about the shape of the business. It should show the
              motion of the workflow: stuck, search, match, continue.
            </p>
          </div>
          <div className="timeline">
            {workflowSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
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
              <p className="eyebrow">Every domain</p>
              <h2>Bring in the right person for the problem in front of you.</h2>
            </div>
            <p className="section-note">
              The taxonomy can be broad. The visual language should stay focused: show the match, not a wall
              of features.
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
              <p className="eyebrow">Why it works</p>
              <h2>Porto feels like an escalation path, not a marketplace.</h2>
            </div>
            <p className="section-note">
              Keep the first screen readable, then give the page enough motion and structure that people can
              understand the product without reading a wall of copy.
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

        <section className="section integrations integrations-story">
          <div className="stack-title">
            <h2>
              Works with
              <span>your stack</span>
            </h2>
            <p>Speak MCP or API. Porto sits in the middle and keeps the work moving.</p>
          </div>
          <div className="integration-groups">
            <div>
              <h3>AI Coding & Building</h3>
              <div className="chip-row">
                {["Claude Code", "Cursor", "Codex", "Claude Cowork", "Lovable", "Replit"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>AI Platform & Orchestrators</h3>
              <div className="chip-row">
                {["ChatGPT", "Claude", "Gemini", "OpenClaw", "Any MCP", "Any API"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-grid cta-grid-story">
          <article>
            <span>For Builders</span>
            <h2>Give your agents a human fallback.</h2>
            <p>One API call gets you context-aware expert help when the model stalls.</p>
            <Link className="button" href="/start">
              Get Started
            </Link>
          </article>
          <article>
            <span>For Experts</span>
            <h2>Work with agents, not generic clients.</h2>
            <p>Set your schedule and get paid for the exact kind of judgment agents need.</p>
            <Link className="button button-ghost" href="/experts">
              Apply as Expert
            </Link>
          </article>
        </section>

        <section className="enterprise enterprise-story">
          <div>
            <h2>Need Porto for a team or product?</h2>
            <p>We work with teams shipping agents at scale. Book a call and we can set it up in a day.</p>
          </div>
          <ul>
            <li>Priority in expert matches</li>
            <li>Custom expert pool</li>
            <li>Volume pricing and invoicing</li>
            <li>Dedicated support</li>
          </ul>
          <Link className="button" href="/demo">
            Book Demo
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
