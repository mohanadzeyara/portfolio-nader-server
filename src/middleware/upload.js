import multer from 'multer';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

const ensureUploads = () => {
  const dir = path.join(process.cwd(), 'uploads');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, ensureUploads() ),
  filename: (req, file, cb) => {
    const ext = mime.extension(file.mimetype) || 'bin';
    const base = file.fieldname === 'photo' ? 'profile_photo' : 'doc';
    cb(null, `${base}_${Date.now()}.${ext}`);
  }
});

export const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'pdf' && file.mimetype !== 'application/pdf') {
      return cb(new Error('Only PDF files allowed for academic uploads'));
    }
    if (file.fieldname === 'photo' && !file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files allowed for profile photo'));
    }
    cb(null, true);
  },
  limits: { fileSize: 15 * 1024 * 1024 }
});
