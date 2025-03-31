
// AT Protocol route handler (mock)
const express = require('express');
const router = express.Router();

router.get('/repo/:did', (req, res) => {
  // Return mock repo data for a DID
  res.json({ repo: "mock-repo-data" });
});

module.exports = router;
