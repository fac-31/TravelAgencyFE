import { useState } from "react";
import type { KeyboardEvent, ChangeEvent } from "react";
import "./App.css";
import { askBackend } from "./api/requests.ts";

function App() {
  const [message, setMessage] = useState<string>("");

  const handleSend = async () => {
    if (!message.trim()) return;
    const response = await askBackend(message);
    setMessage("");
    console.log(response);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="app">
      <div className="chat-container">
        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
