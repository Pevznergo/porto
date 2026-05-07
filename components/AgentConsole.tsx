export function AgentConsole() {
  return (
    <div className="agent-console" aria-label="Porto agent handoff preview">
      <div className="agent-tabs" aria-label="Agent and chat tabs">
        <span>Agent</span>
        <span>Chat</span>
      </div>
      <div className="agent-stage" aria-hidden="true">
        <div className="expert-joined">
          <div className="expert-avatar">
            <span>N</span>
          </div>
          <div>
            <p>Expert joined</p>
            <strong>Nolan · Security engineer</strong>
            <span>Live on Porto</span>
          </div>
        </div>
      </div>
      <div className="agent-input">
        <span>Ask anything, @ to mention...</span>
        <kbd>Return</kbd>
      </div>
      <div className="agent-foot">
        <span className="status-dot" />
        <span>Claude Opus 4.6</span>
        <strong>Tokens: 4,231</strong>
      </div>
    </div>
  );
}
