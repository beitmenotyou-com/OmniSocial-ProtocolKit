
// DID Resolver (mock)
const express = require('express');
const router = express.Router();

router.get('/:did', (req, res) => {
  const did = req.params.did;
  res.json({ didDocument: { id: did, publicKey: [] } });
});

module.exports = router;
