import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  const resource = req.query.resource;
  if (!resource || typeof resource !== 'string') {
    return res.status(400).json({ error: 'Missing resource' });
  }

  const username = resource.replace('acct:', '').split('@')[0];

  res.json({
    subject: `acct:${username}@yourdomain.com`,
    links: [
      {
        rel: 'self',
        type: 'application/activity+json',
        href: `https://yourdomain.com/activitypub/${username}`
      },
      {
        rel: 'https://atproto.com',
        type: 'application/json',
        href: `https://yourdomain.com/atproto/${username}`
      },
      {
        rel: 'nostr',
        href: `nostr:${username}@relay.example`
      }
    ]
  });
});

export default router;
