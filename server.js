// C:/WorkHome/AlphaEdtech/WebSockets/chatOnline/server.js
const WebSocket = require("ws");
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");

const server = new WebSocket.Server({ port: 8080 });
const clients = new Set();

function broadcast(data) {
  const message = JSON.stringify(data);
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

server.on("connection", (socket) => {
  const userColor = uniqueNamesGenerator({ dictionaries: [colors], length: 1 });
  const userName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: "_",
    style: "capital",
  });
  
  socket.username = `${userColor}_${userName}`;
  socket.color = userColor;

  clients.add(socket);

  broadcast({
    type: "info",
    message: `${socket.username} entrou no chat.`,
  });

  socket.on("message", (message) => {
    broadcast({
      type: "chat",
      username: socket.username,
      color: socket.color,
      message: message.toString(), 
    });
  });

  socket.on("close", () => {
    clients.delete(socket);
    broadcast({
      type: "info",
      message: `${socket.username} saiu do chat.`,
    });
  });
});

console.log("Servidor WebSocket rodando na porta 8080...");