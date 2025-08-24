import express from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config.js';
import shajs from 'sha.js';

const router = express.Router();

function sha256Hex(input) {
  return shajs('sha256').update(input).digest('hex');
}

router.post('/login', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
  if (email.toLowerCase() !== config.adminEmail) return res.status(403).json({ error: 'Not authorized' });
  const candidate = sha256Hex(`${config.adminSalt}${password}`);
  if (candidate !== config.adminPasswordHash) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ email }, config.jwtSecret, { expiresIn: '12h' });
  res.json({ token, email });
});

export default router;
