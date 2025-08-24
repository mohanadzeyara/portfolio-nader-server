import express from 'express';
import Profile from '../models/Profile.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

async function getProfile() {
  let doc = await Profile.findOne();
  if (!doc) doc = await Profile.create({});
  return doc;
}

router.get('/', async (_req, res) => {
  const doc = await getProfile();
  res.json(doc);
});

router.put('/', requireAdmin, async (req, res) => {
  const doc = await getProfile();
  doc.set(req.body);
  await doc.save();
  res.json(doc);
});

export default router;
