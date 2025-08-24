import express from 'express';
import Contact from '../models/Contact.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public: get current contact info (single document)
router.get('/', async (req, res) => {
  const doc = await Contact.findOne().lean();
  res.json(doc || {});
});

// Admin: set/update contact info (upsert)
router.put('/', requireAdmin, async (req, res) => {
  const update = req.body || {};
  const doc = await Contact.findOneAndUpdate({}, update, { new: true, upsert: true, setDefaultsOnInsert: true });
  res.json(doc);
});

export default router;
