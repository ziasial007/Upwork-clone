import React, { useState } from 'react';
// import './App.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sender, setSender] = useState('You'); // Toggle between 'You' and 'Other'

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender }]);
      setInput('');
      setSender(sender === 'You' ? 'Other' : 'You'); // Toggle sender
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-header">Chat Box</div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === 'You' ? 'user' : 'other'}`}
            >
              <span className="sender">{msg.sender}: </span>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
