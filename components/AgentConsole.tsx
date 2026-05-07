export function AgentConsole() {
  return (
    <div className="agent-console" aria-label="Porto agent handoff preview">
      <div className="signal-ring ring-one" />
      <div className="signal-ring ring-two" />
      <div className="console-top">
        <span className="dot teal" />
        <span className="dot amber" />
        <span className="dot coral" />
        <strong>Agent Session</strong>
        <span className="console-live">routing live</span>
      </div>
      <div className="conversation">
        <div className="agent-window">
          <div className="agent-window-head">
            <span>Agent</span>
            <strong>Claude Opus 4.6</strong>
          </div>
          <div className="agent-flow">
            <span>Tokens: 4,231</span>
            <span>Tool calls: 18</span>
            <span className="warning">Retries exhausted</span>
          </div>
        </div>
        <div className="agent-bubble bubble-one">Retries exhausted on payment reconciliation. Requesting Porto expert...</div>
        <div className="handoff-line">
          <span />
          <strong>Matching finance systems architect</strong>
          <span />
        </div>
        <div className="expert-card expert-card-live">
          <div className="avatar">AK</div>
          <div>
            <strong>Arin joined</strong>
            <span>Finance systems architect</span>
          </div>
          <span className="status-pill">live</span>
        </div>
        <pre className="code-window">
          <code>{`issue: settlement delta
context: 42 files, logs, db schema
action: expert reviewing edge case`}</code>
        </pre>
        <div className="agent-bubble accent bubble-two">Patch suggestion received. Agent resuming workflow.</div>
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
