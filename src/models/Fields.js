import mongoose from 'mongoose';
const FieldsSchema = new mongoose.Schema({
  skills: { type: [String], default: [] },
  awards: { type: [String], default: [] },
  languages: { type: [String], default: [] }
}, { timestamps: true });
export default mongoose.model('Fields', FieldsSchema);
