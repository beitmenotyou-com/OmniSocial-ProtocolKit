import express from 'express';
import dotenv from 'dotenv';
import activitypubRoutes from './routes/activitypub';
import atprotoRoutes from './routes/atproto';
import nostrRoutes from './routes/nostr';
import webfingerRoutes from './routes/webfinger';
import webmentionRoutes from './routes/webmention';
import micropubRoutes from './routes/micropub';
import didRoutes from './routes/did';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use('/.well-known/webfinger', webfingerRoutes);
app.use('/activitypub', activitypubRoutes);
app.use('/atproto', atprotoRoutes);
app.use('/nostr', nostrRoutes);
app.use('/webmention', webmentionRoutes);
app.use('/micropub', micropubRoutes);
app.use('/did', didRoutes);

app.listen(port, () => {
  console.log(`Protocol Hub API running at http://localhost:${port}`);
});
