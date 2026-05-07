export function AgentConsole() {
  return (
    <div className="agent-console" aria-label="Porto agent handoff preview">
      <div className="agent-chat-panel">
        <div className="agent-chat-head">
          <span>Agent</span>
          <strong>Chat</strong>
        </div>
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
        <div className="chat-input">
          <span>Ask anything, @ to mention...</span>
          <kbd>Return</kbd>
        </div>
      </div>

      <div className="model-card">
        <span>Claude Opus 4.6</span>
        <strong>Tokens: 4,231</strong>
      </div>

      <div className="terminal-card">
        <div className="terminal-title">
          <span>agent_work - Terminal</span>
        </div>
        <pre>
          <code>{`41 async def process_batch(self, items):
42   """Process incoming data batch"""
43   results = []
44   for item in items:
45     data = await self.fetch(item)
46     parsed = data.response.json["data"]

Traceback: KeyError "data"
[Agent] All retries failed. Requesting human help...`}</code>
        </pre>
        <div className="connecting-strip">
          <span />
          Connecting engineer
        </div>
      </div>
    </div>
  );
}
