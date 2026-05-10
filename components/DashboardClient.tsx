"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Session = {
  id: string;
  name: string;
  email: string;
  signedInAt: string;
};

const sessionKey = "portu.session";

const requests = [
  { title: "Codex migration stuck on auth callback", owner: "AI build agent", status: "Expert matched", eta: "04:12" },
  { title: "Pricing page copy needs founder review", owner: "Design agent", status: "In review", eta: "11:38" },
  { title: "Webhook retry policy decision", owner: "Backend agent", status: "Queued", eta: "18:05" }
];

const experts = [
  { name: "Maya", domain: "Product design", state: "Live" },
  { name: "Nikolai", domain: "Backend systems", state: "Live" },
  { name: "Sara", domain: "Growth strategy", state: "On call" }
];

export function DashboardClient() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(sessionKey);
    if (!stored) {
      router.replace("/login");
      return;
    }
    setSession(JSON.parse(stored) as Session);
  }, [router]);

  function logout() {
    localStorage.removeItem(sessionKey);
    router.replace("/login");
  }

  if (!session) {
    return (
      <main className="dashboard-shell">
        <section className="dashboard-loading">Opening workspace...</section>
      </main>
    );
  }

  return (
    <main className="dashboard-shell">
      <header className="dashboard-topbar">
        <Link className="brand dashboard-brand" href="/" aria-label="Portu home">
          <span className="brand-mark">P</span>
          <span>Portu</span>
        </Link>
        <div className="dashboard-user">
          <span>{session.name}</span>
          <button type="button" onClick={logout}>Log out</button>
        </div>
      </header>

      <section className="dashboard-hero">
        <div>
          <p className="eyebrow">Workspace</p>
          <h1>{session.name.split(" ")[0] || "Your"} agent desk is live.</h1>
          <p>
            Route blockers to vetted humans, watch the queue, and keep agent work moving from one place.
          </p>
        </div>
        <div className="dashboard-action-card">
          <span>Next handoff</span>
          <strong>Backend expert in 4 min</strong>
          <button type="button">Create request</button>
        </div>
      </section>

      <section className="dashboard-metrics" aria-label="Workspace metrics">
        <article>
          <span>Open requests</span>
          <strong>3</strong>
        </article>
        <article>
          <span>Experts online</span>
          <strong>18</strong>
        </article>
        <article>
          <span>Median match</span>
          <strong>28s</strong>
        </article>
        <article>
          <span>This week</span>
          <strong>42</strong>
        </article>
      </section>

      <section className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="dashboard-panel-head">
            <h2>Active agent requests</h2>
            <span>Live</span>
          </div>
          <div className="request-list">
            {requests.map((request) => (
              <article key={request.title} className="request-row">
                <div>
                  <h3>{request.title}</h3>
                  <p>{request.owner}</p>
                </div>
                <div>
                  <span>{request.status}</span>
                  <strong>{request.eta}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="dashboard-panel expert-panel">
          <div className="dashboard-panel-head">
            <h2>Expert coverage</h2>
            <span>Now</span>
          </div>
          {experts.map((expert) => (
            <div className="expert-row" key={expert.name}>
              <div>
                <strong>{expert.name}</strong>
                <p>{expert.domain}</p>
              </div>
              <span>{expert.state}</span>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}
