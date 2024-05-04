const WebSocket = require("ws");
const {Message} = require("../../models");

module.exports = {
  initializeWebSocketServer() {
    const wss = new WebSocket.Server({port: 3001});

    wss.on("connection", (ws) => {
      console.log("Client connected");

      ws.on("message", async (message) => {
        console.log(`Received message: ${message}`);
        // Save the message to the database
        await Message.create({content: message});
        // Echo the message back to the client
        ws.send(message);
      });

      ws.on("close", () => {
        console.log("Client disconnected");
      });
    });
  },
};
