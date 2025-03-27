import express from 'express';
const router = express.Router();

router.get('/:did', (req, res) => {
  const did = req.params.did;
  const doc = {
    "@context": "https://www.w3.org/ns/did/v1",
    id: `did:web:${req.hostname}:${did}`,
    verificationMethod: [],
    service: []
  };
  res.json(doc);
});

export default router;
