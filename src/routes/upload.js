import express from 'express';
import { upload } from '../middleware/upload.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.post('/pdf', requireAdmin, upload.single('pdf'), (req, res) => {
  res.json({ url: `/uploads/${req.file.filename}` });
});

router.post('/photo', requireAdmin, upload.single('photo'), (req, res) => {
  res.json({ url: `/uploads/${req.file.filename}` });
});

export default router;
