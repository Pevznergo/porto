export function AgentConsole() {
  return (
    <div className="agent-console" aria-label="Porto agent handoff preview">
      <div className="console-top">
        <span className="dot teal" />
        <span className="dot amber" />
        <span className="dot coral" />
        <strong>Agent Session</strong>
      </div>
      <div className="conversation">
        <div className="agent-bubble">Retries exhausted on payment reconciliation. Requesting Porto expert...</div>
        <div className="expert-card">
          <div className="avatar">AK</div>
          <div>
            <strong>Arin joined</strong>
            <span>Finance systems architect</span>
          </div>
          <span className="status-pill">live</span>
        </div>
        <pre>
          <code>{`issue: settlement delta
context: 42 files, logs, db schema
action: expert reviewing edge case`}</code>
        </pre>
        <div className="agent-bubble accent">Patch suggestion received. Agent resuming workflow.</div>
      </div>
      <div className="console-metrics">
        <span>
          <strong>&lt; 2 min</strong> first reply
        </span>
        <span>
          <strong>91%</strong> useful handoffs
        </span>
      </div>
    </div>
  );
}
