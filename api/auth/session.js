
// Multi-protocol session handling
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { method, token } = req.body;
  res.json({ session: "mock-session", method });
});

module.exports = router;
