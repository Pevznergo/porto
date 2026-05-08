export function AgentConsole() {
  return (
    <div className="agent-console" aria-label="Porto agent handoff preview">
      <div className="agent-tabs" aria-label="Agent and chat tabs">
        <span>Agent</span>
        <span>Chat</span>
      </div>
      <div className="agent-stage" aria-hidden="true">
        <div className="radar-panel">
          <div className="radar-orbit radar-orbit-1" />
          <div className="radar-orbit radar-orbit-2" />
          <div className="radar-orbit radar-orbit-3" />
          <div className="radar-sweep" />
          <div className="radar-core">
            <span>Finding experts</span>
            <strong>Security · 7 live matches</strong>
          </div>
          <div className="candidate-card candidate-card-d">
            <span className="candidate-dot" />
            <div>
              <strong>Nolan</strong>
              <span>Security engineer</span>
            </div>
            <em>+12s</em>
          </div>
          <div className="candidate-card candidate-card-e">
            <span className="candidate-dot" />
            <div>
              <strong>Priya</strong>
              <span>Platform engineer</span>
            </div>
            <em>+19s</em>
          </div>
        </div>
        <div className="chat-stream">
          <div className="match-pill">
            <span className="pulse-mark" />
            Match found in 18s
          </div>
          <div className="chat-bubble chat-bubble-agent">
            <span>Need help now.</span>
            <p>Route me to the best security engineer and keep the chat open.</p>
          </div>
          <div className="chat-bubble chat-bubble-system">
            <span>Porto</span>
            <p>Searching your pool, ranking by expertise and response time.</p>
          </div>
          <div className="chat-bubble chat-bubble-expert">
            <span>Nolan joined</span>
            <p>I&apos;m in. I can review the incident and stay in the thread.</p>
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
