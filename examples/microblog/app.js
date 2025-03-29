const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/ap/actor/alice', (req, res) => {
  res.json({
    "@context": "https://www.w3.org/ns/activitystreams",
    "id": "http://localhost:3001/ap/actor/alice",
    "type": "Person",
    "preferredUsername": "alice",
    "inbox": "http://localhost:3001/ap/inbox"
  });
});

app.post('/ap/inbox', (req, res) => {
  console.log('Received ActivityPub inbox payload:', req.body);
  res.sendStatus(202);
});

app.listen(PORT, () => {
  console.log(`Microblog app listening on http://localhost:${PORT}`);
});
