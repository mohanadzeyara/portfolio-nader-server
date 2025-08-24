import express from 'express';
import Fields from '../models/Fields.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

async function getSingleton() {
  let doc = await Fields.findOne();
  if (!doc) doc = await Fields.create({ skills: [], awards: [], languages: [] });
  return doc;
}

router.get('/', async (_req, res) => {
  const doc = await getSingleton();
  res.json(doc);
});

router.put('/', requireAdmin, async (req, res) => {
  const doc = await getSingleton();
  doc.set(req.body);
  await doc.save();
  res.json(doc);
});

export default router;
