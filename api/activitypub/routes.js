
// ActivityPub inbox/outbox handler
const express = require('express');
const router = express.Router();

router.post('/inbox', (req, res) => {
  // Handle incoming ActivityPub messages
  res.sendStatus(202);
});

router.post('/outbox', (req, res) => {
  // Handle posting ActivityPub messages
  res.send({ status: "posted" });
});

module.exports = router;
