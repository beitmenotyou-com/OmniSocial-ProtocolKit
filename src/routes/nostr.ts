import express from 'express';
const router = express.Router();

// TODO: Implement nostr endpoint handling

router.get('/', (req, res) => {
  res.json({ message: 'nostr endpoint stub' });
});

export default router;
