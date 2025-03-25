import express from 'express';
const router = express.Router();

// TODO: Implement webmention endpoint handling

router.get('/', (req, res) => {
  res.json({ message: 'webmention endpoint stub' });
});

export default router;
