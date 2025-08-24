import mongoose from 'mongoose';
const SectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  body: { type: String, default: '' }
}, { timestamps: true });
export default mongoose.model('Section', SectionSchema);
