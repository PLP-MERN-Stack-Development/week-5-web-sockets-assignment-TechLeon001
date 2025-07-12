import React, { useState, useEffect, useRef } from 'react';
import { useSocket } from './socket/socket';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [showUsers, setShowUsers] = useState(false);
  const messagesEndRef = useRef(null);
  
  const {
    socket,
    isConnected,
    messages,
    users,
    typingUsers,
    connect,
    disconnect,
    sendMessage,
    setTyping
  } = useSocket();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      connect(username);
      setIsLoggedIn(true);
    }
  };

  // Handle logout
  const handleLogout = () => {
    disconnect();
    setIsLoggedIn(false);
    setUsername('');
  };

  // Handle sending message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
      setTyping(false);
    }
  };

  // Handle typing
  const handleTyping = (e) => {
    setMessage(e.target.value);
    setTyping(e.target.value.length > 0);
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  // Login screen
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h1>Socket.io Chat</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button type="submit">Join Chat</button>
        </form>
      </div>
    );
  }

  // Chat interface
  return (
    <div className="chat-container">
      {/* Connection status */}
      <div className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </div>

      {/* Header */}
      <div className="chat-header">
        <h2>Socket.io Chat</h2>
        <p>Welcome, {username}!</p>
        <button 
          onClick={handleLogout}
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: 'none',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Logout
        </button>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${
              msg.system 
                ? 'system' 
                : msg.senderId === socket.id 
                ? 'sent' 
                : 'received'
            }`}
          >
            <div className="message-content">
              {!msg.system && (
                <strong style={{ fontSize: '0.8rem', opacity: 0.8 }}>
                  {msg.sender}
                </strong>
              )}
              <div style={{ marginTop: msg.system ? 0 : '4px' }}>
                {msg.message}
              </div>
            </div>
            {!msg.system && (
              <div className="message-info">
                {formatTime(msg.timestamp)}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Typing indicator */}
      {typingUsers.length > 0 && (
        <div className="typing-indicator">
          {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSendMessage} className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleTyping}
          disabled={!isConnected}
        />
        <button type="submit" disabled={!isConnected || !message.trim()}>
          Send
        </button>
      </form>

      {/* Users list */}
      <div className="users-list" style={{ display: showUsers ? 'block' : 'none' }}>
        <h3>Online Users ({users.length})</h3>
        {users.map((user) => (
          <div key={user.id} className="user-item online">
            {user.username}
          </div>
        ))}
      </div>

      {/* Toggle users list button */}
      <button
        onClick={() => setShowUsers(!showUsers)}
        style={{
          position: 'absolute',
          right: '20px',
          top: '20px',
          background: 'rgba(255,255,255,0.9)',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '0.8rem'
        }}
      >
        Users ({users.length})
      </button>
    </div>
  );
}

export default App; 