import mongoose from 'mongoose';
const ContactSchema = new mongoose.Schema({
  phone: String,
  email: String,
  linkedin: String,
  github: String,
  website: String,
  location: String,
  whatsapp: String,
  telegram: String
}, { timestamps: true });
export default mongoose.model('Contact', ContactSchema);
