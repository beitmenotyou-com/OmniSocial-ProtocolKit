import express from 'express';
const router = express.Router();

// TODO: Implement activitypub endpoint handling

router.get('/', (req, res) => {
  res.json({ message: 'activitypub endpoint stub' });
});

export default router;
