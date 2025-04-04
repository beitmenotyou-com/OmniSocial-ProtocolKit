
// Nostr relay client
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('Received:', message);
    ws.send(JSON.stringify({ msg: "echo", data: message }));
  });
});
