
import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: Date.now(), author: 'bot', text: 'This is a simulated message.' }
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage) return;
    setMessages([
      ...messages,
      { id: Date.now(), author: 'user', text: newMessage }
    ]);
    setNewMessage('');
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginTop: '20px' }}>
      <h3>Real-time Chat</h3>
      <div
        ref={chatContainerRef}
        style={{ height: '200px', overflowY: 'scroll', border: '1px solid #eee', padding: '10px', marginBottom: '10px' }}
      >
        {messages.map(msg => (
          <div key={msg.id}><b>{msg.author}:</b> {msg.text}</div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ width: '80%', padding: '8px' }}
        />
        <button type="submit" style={{ width: '18%', padding: '8px', backgroundColor: '#1877f2', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
      </form>
    </div>
  );
};

export default Chat;
