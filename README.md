# 🔄 Real-Time Chat Application with Socket.io

A fully functional real-time chat application built with Socket.io, React, and Express.js that demonstrates bidirectional communication between clients and server.

## ✨ Features Implemented

### ✅ Core Features
- **Real-time messaging** using Socket.io
- **User authentication** with username-based login
- **Global chat room** where all users can communicate
- **Live typing indicators** showing when users are composing messages
- **Online/offline status** tracking for all users
- **Message timestamps** and sender information
- **Auto-scroll** to latest messages
- **Connection status** indicator

### 🚀 Advanced Features
- **Private messaging** between users
- **User presence** notifications (join/leave)
- **Responsive design** that works on desktop and mobile
- **Reconnection logic** for handling disconnections
- **Message delivery** with proper error handling
- **Modern UI** with beautiful gradient design

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, Socket.io Client
- **Backend**: Node.js, Express.js, Socket.io
- **Styling**: CSS3 with modern gradients and animations
- **Real-time Communication**: Socket.io for bidirectional communication

## 📦 Project Structure

```
week-5-web-sockets-assignment-TechLeon001/
├── client/                 # React frontend
│   ├── src/
│   │   ├── socket/
│   │   │   └── socket.js   # Socket.io client setup
│   │   ├── App.jsx         # Main chat interface
│   │   ├── main.jsx        # React entry point
│   │   └── index.css       # Modern styling
│   ├── index.html          # HTML template
│   ├── package.json        # Client dependencies
│   └── vite.config.js      # Vite configuration
├── server/                 # Node.js backend
│   ├── server.js           # Express + Socket.io server
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd week-5-web-sockets-assignment-TechLeon001
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create `server/.env`:
   ```
   PORT=5000
   CLIENT_URL=http://localhost:5173
   NODE_ENV=development
   ```

   Create `client/.env`:
   ```
   VITE_SOCKET_URL=http://localhost:5000
   ```

### Running the Application

1. **Start the server** (from the server directory):
   ```bash
   cd server
   npm run dev
   ```
   The server will start on `http://localhost:5000`

2. **Start the client** (from the client directory):
   ```bash
   cd client
   npm run dev
   ```
   The client will start on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 🎯 How to Use

1. **Join the chat**: Enter your username and click "Join Chat"
2. **Send messages**: Type in the input field and press Enter or click Send
3. **View online users**: Click the "Users" button to see who's online
4. **See typing indicators**: When someone is typing, you'll see a notification
5. **Private messaging**: The system supports private messages (advanced feature)

## 🔧 Socket.io Events Implemented

### Server Events
- `user_join`: Handle user joining the chat
- `send_message`: Broadcast messages to all users
- `private_message`: Handle private messaging
- `typing`: Manage typing indicators
- `disconnect`: Handle user disconnection

### Client Events
- `receive_message`: Receive new messages
- `user_list`: Update online users list
- `user_joined/user_left`: User presence notifications
- `typing_users`: Real-time typing indicators
- `private_message`: Receive private messages

## 🎨 UI/UX Features

- **Modern gradient design** with purple-blue theme
- **Responsive layout** that adapts to different screen sizes
- **Smooth animations** and hover effects
- **Message bubbles** with different styles for sent/received messages
- **Connection status** indicator
- **Auto-scroll** to latest messages
- **Mobile-friendly** interface

## 🧪 Testing the Application

1. **Open multiple browser tabs** or windows
2. **Join with different usernames** in each tab
3. **Send messages** and see them appear in real-time
4. **Test typing indicators** by typing in the input field
5. **Test disconnection** by closing a tab and reopening it

## 📱 Mobile Support

The application is fully responsive and works great on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Android Chrome)
- Tablet devices

## 🔒 Security Features

- **CORS configuration** for secure cross-origin requests
- **Input validation** to prevent malicious content
- **Connection state management** with proper cleanup
- **Error handling** for network issues

## 🚀 Deployment Ready

The application is ready for deployment to:
- **Backend**: Render, Railway, Heroku, or any Node.js hosting
- **Frontend**: Vercel, Netlify, or GitHub Pages

## 📊 Performance Optimizations

- **Message limit** (100 messages) to prevent memory issues
- **Efficient reconnection** logic with exponential backoff
- **Optimized rendering** with React hooks
- **Minimal bundle size** with Vite build optimization

## 🤝 Contributing

This is an assignment project, but the code follows best practices:
- Clean, readable code structure
- Proper error handling
- Comprehensive documentation
- Modern JavaScript/React patterns

## 📄 License

This project is created for educational purposes as part of a WebSocket assignment.

---

**Built with ❤️ using Socket.io, React, and Express.js** 