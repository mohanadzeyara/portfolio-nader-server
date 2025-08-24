import express from 'express';
import Section from '../models/Section.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  const sections = await Section.find().sort({ createdAt: 1 });
  res.json(sections);
});

router.post('/', requireAdmin, async (req, res) => {
  const section = await Section.create({ name: req.body.name, body: req.body.body || '' });
  res.status(201).json(section);
});

router.put('/:id', requireAdmin, async (req, res) => {
  const section = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(section);
});

router.delete('/:id', requireAdmin, async (req, res) => {
  await Section.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default router;
