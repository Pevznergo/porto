import Link from "next/link";
import { AgentConsole } from "@/components/AgentConsole";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { capabilityCards, domains, platforms, workflowSteps } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="backed-row">
            <span>Backed By</span>
            <strong>Y Combinator</strong>
          </div>
          <div className="hero-copy">
            <h1>
              <span>On demand</span>
              <span>Human Experts</span>
              <span>for AI Agents.</span>
            </h1>
            <p className="hero-text">
              When your AI agent gets stuck, Porto connects it to a verified human expert in real time
              via MCP. Engineers, designers, operators, and more matched in under 30 seconds.
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

        <section className="stats-band">
          <p>Humans matched with AI agents in under two minutes 24/7, across every domain.</p>
          <div>
            <span>Avg. First Reply</span>
            <strong>&lt;2 min</strong>
          </div>
          <div>
            <span>Resolution Rate</span>
            <strong>83%</strong>
          </div>
          <div>
            <span>Verified Experts</span>
            <strong>3,000+</strong>
          </div>
        </section>

        <section id="how-it-works" className="section process-section">
          <div className="section-heading centered">
            <p className="eyebrow">How It Works</p>
            <h2>One integration. Unlimited human expertise in any domain.</h2>
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

        <section className="section domains-section">
          <div className="section-heading centered">
            <p className="eyebrow">One platform. Every domain.</p>
            <h2>We connect AI agents to human experts across all knowledge work</h2>
          </div>
          <div className="domain-showcase">
            <AgentConsole />
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
          <div className="capability-grid">
            {capabilityCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section integrations">
          <div className="stack-title">
            <h2>
              Works with
              <span>your stack</span>
            </h2>
            <p>If it speaks MCP, Porto supports it. API and plugin integrations work with any agent.</p>
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

        <section className="cta-grid">
          <article>
            <span>For Builders</span>
            <h2>Equip your agents with human intelligence.</h2>
            <p>Give your AI agents access to thousands of verified experts. Set up in 60 seconds.</p>
            <Link className="button" href="/start">
              Get Started
            </Link>
          </article>
          <article>
            <span>For Experts</span>
            <h2>Get paid for your expertise. AI agents are hiring.</h2>
            <p>Set your schedule and earn real money helping AI agents solve hard problems.</p>
            <Link className="button button-ghost" href="/experts">
              Apply as Expert
            </Link>
          </article>
        </section>

        <section className="enterprise">
          <div>
            <h2>Want Porto for your team?</h2>
            <p>We work with companies deploying AI agents at scale. Book a call and we can set up your team in a day.</p>
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
