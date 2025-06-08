import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import db from './config/connection.js';
import routes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the built React app
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use(routes);

// Fallback to index.html for SPA routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
