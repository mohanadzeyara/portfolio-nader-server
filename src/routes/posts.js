import express from 'express';
import Post from '../models/Post.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (_req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post('/', requireAdmin, async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
});

router.put('/:id', requireAdmin, async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
});

router.delete('/:id', requireAdmin, async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

export default router;
