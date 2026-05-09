export function AgentConsole() {
  return (
    <div className="agent-console" aria-label="Portu agent handoff preview">
      <div className="agent-tabs" aria-label="Agent and chat tabs">
        <span>Agent</span>
        <span>Chat</span>
      </div>
      <div className="agent-stage" aria-hidden="true">
        <div className="radar-panel">
          <div className="radar-orbit radar-orbit-1" />
          <div className="radar-orbit radar-orbit-2" />
          <div className="radar-sweep" />
        </div>
        <div className="chat-stream">
          <div className="chat-bubble chat-bubble-system chat-bubble-thought" style={{ animationDelay: "0s" }}>
            <span>THOUGHT</span>
            <p>Attempting to validate the user session...</p>
          </div>
          <div className="chat-bubble chat-bubble-agent" style={{ animationDelay: "1.1s" }}>
            <span>AI Agent</span>
            <p>I&apos;m trying to validate the JWT session, but the signature check keeps failing.</p>
          </div>
          <div className="chat-bubble chat-bubble-command" style={{ animationDelay: "2.05s" }}>
            <span>Run</span>
            <p>start_expert_chat:humwork</p>
          </div>
          <div className="chat-bubble chat-bubble-status" style={{ animationDelay: "2.9s" }}>
            <span>Connecting to Human Network...</span>
          </div>
          <div className="chat-bubble chat-bubble-expert" style={{ animationDelay: "3.8s" }}>
            <span>EXPERT</span>
            <p>Check whether the secret is encoded before verification.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
