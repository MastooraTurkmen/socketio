# Socket IO

Short description
A small Socket.IO example demonstrating real‑time, bidirectional communication between a Node.js server and browser clients. Designed for learning and quick prototyping.

Prerequisites

- Node.js (v14+) and npm installed
- Basic knowledge of JavaScript and npm scripts

Installation

1. Open a terminal in the project root.
2. Install dependencies:

```bash
npm install
```

Running the app

- Start the server:

```bash
npm start
# or, if available
npm run dev
```

- Open a browser to http://localhost:3000 (or the port printed by the server).

Quick usage examples
Server-side (conceptual)

```js
io.on("connection", (socket) => {
  console.log("client connected:", socket.id);
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // broadcast to all clients
  });
});
```

Client-side (browser)

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
  socket.on("connect", () => console.log("connected"));
  socket.emit("chat message", "Hello from client");
  socket.on("chat message", (msg) => console.log("received:", msg));
</script>
```

Project layout (typical)

- package.json — scripts & deps
- src/ — server code
- public/ — client HTML/CSS/JS served by the server
- README.md — this file

Troubleshooting

- Port in use: change the port env var or kill the process using it.
- CORS issues: ensure server allows client origin or serve client from the same host.
- Connection keeps disconnecting: check browser console and server logs for errors.

Contributing

- Open issues for bugs or feature requests.
- Fork, create a branch, add tests/examples, and submit a pull request.
