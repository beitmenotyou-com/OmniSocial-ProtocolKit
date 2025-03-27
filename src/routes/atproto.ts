import express from 'express';
const router = express.Router();

// TODO: Implement atproto endpoint handling

router.get('/', (req, res) => {
  res.json({ message: 'atproto endpoint stub' });
});

export default router;
