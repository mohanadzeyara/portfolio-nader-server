import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from './config.js';
import { connectDB } from './db.js';

import authRoutes from './routes/auth.js';
import postsRoutes from './routes/posts.js';
import fieldsRoutes from './routes/fields.js';
import profileRoutes from './routes/profile.js';
import sectionsRoutes from './routes/sections.js';
import contactsRoutes from './routes/contacts.js';
import uploadRoutes from './routes/upload.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  await connectDB();

  const app = express();
  app.use(morgan('dev'));
  app.use(express.json({ limit: '2mb' }));
  app.use(cors({ origin: (origin, cb) => cb(null, true), credentials: true }));

  app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

  app.use('/api/auth', authRoutes);
  app.use('/api/posts', postsRoutes);
  app.use('/api/fields', fieldsRoutes);
  app.use('/api/profile', profileRoutes);
  app.use('/api/sections', sectionsRoutes);
app.use('/api/contacts', contactsRoutes);
  app.use('/api/upload', uploadRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

  app.listen(config.port, () => {
    console.log(`API running on http://localhost:${config.port}`);
  });
})();
