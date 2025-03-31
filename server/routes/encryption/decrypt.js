const express = require("express");
const router = express.Router();
const { decryptMessage } = require("../../utils/encryption");

router.post("/", async (req, res) => {
  const { encrypted, privateKey, passphrase } = req.body;
  try {
    const decrypted = await decryptMessage(encrypted, privateKey, passphrase);
    res.json({ decrypted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
