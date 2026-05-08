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
        </div>
        <div className="chat-stream">
          <div className="chat-bubble chat-bubble-system chat-bubble-thought" style={{ animationDelay: "0s" }}>
            <span>THOUGHT</span>
            <p>Attempting to validate the user session...</p>
          </div>
          <div className="chat-bubble chat-bubble-system chat-bubble-thought" style={{ animationDelay: ".95s" }}>
            <span>THOUGHT</span>
            <p>Error: Session token invalid signature.</p>
          </div>
          <div className="chat-bubble chat-bubble-agent" style={{ animationDelay: "1.9s" }}>
            <span>AI Agent</span>
            <p>I&apos;m trying to validate the JWT session in the edge middleware, but the signature check keeps failing.</p>
          </div>
          <div className="chat-bubble chat-bubble-agent" style={{ animationDelay: "2.8s" }}>
            <span>AI Agent</span>
            <p>I can&apos;t figure out what&apos;s wrong. I&apos;m going to ask a human expert for help.</p>
          </div>
          <div className="chat-bubble chat-bubble-command" style={{ animationDelay: "3.65s" }}>
            <span>Run</span>
            <p>start_expert_chat:humwork</p>
          </div>
          <div className="chat-bubble chat-bubble-status" style={{ animationDelay: "4.45s" }}>
            <span>Connecting to Humwork Network...</span>
          </div>
          <div className="chat-bubble chat-bubble-expert" style={{ animationDelay: "5.3s" }}>
            <span>EXPERT Nova</span>
            <p>Hey! You&apos;re using `jose` for edge compatibility. Are you encoding the secret before verification?</p>
          </div>
        </div>
        <div className="expert-card" style={{ animationDelay: "5.6s" }}>
          <div className="expert-card-chip">EXPERT JOINED</div>
          <strong>Nolan · Security engineer</strong>
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
