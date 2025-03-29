import express from 'express';
const router = express.Router();

// TODO: Implement micropub endpoint handling

router.get('/', (req, res) => {
  res.json({ message: 'micropub endpoint stub' });
});

export default router;
