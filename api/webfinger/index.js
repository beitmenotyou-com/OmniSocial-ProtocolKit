
// Webfinger resolution
const express = require('express');
const router = express.Router();

router.get('/.well-known/webfinger', (req, res) => {
  const resource = req.query.resource;
  res.json({
    subject: resource,
    links: [{ rel: "self", href: "https://example.com/user.json" }]
  });
});

module.exports = router;
