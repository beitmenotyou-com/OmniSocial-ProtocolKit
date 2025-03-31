const express = require("express");
const router = express.Router();
const { encryptMessage } = require("../../utils/encryption");

router.post("/", async (req, res) => {
  const { message, publicKey } = req.body;
  try {
    const encrypted = await encryptMessage(message, publicKey);
    res.json({ encrypted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
