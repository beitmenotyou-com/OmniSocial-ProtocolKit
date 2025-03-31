const WebSocket = require('ws');

const relay = 'wss://relay.damus.io';
const ws = new WebSocket(relay);

ws.on('open', function open() {
  console.log('🤖 Connected to Nostr relay');
  const event = {
    kind: 1,
    content: `Hello from OmniSocial Bot! Timestamp: ${new Date().toISOString()}`,
    created_at: Math.floor(Date.now() / 1000),
    pubkey: 'PLACEHOLDER',
    id: 'PLACEHOLDER',
    sig: 'PLACEHOLDER',
    tags: []
  };
  ws.send(JSON.stringify(['EVENT', event]));
});

ws.on('message', function message(data) {
  console.log('📨 Received:', data.toString());
});
