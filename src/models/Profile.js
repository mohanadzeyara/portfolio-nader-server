import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
  degree: String,
  field: String,
  institution: String,
  year: String,
  note: String,
  fileUrl: String
}, { _id: false });

const ExperienceSchema = new mongoose.Schema({
  role: String,
  place: String,
  start: String,
  end: String,
  note: String
}, { _id: false });

const ProfileSchema = new mongoose.Schema({
  name: { type: String, default: 'Nader Zeyara' },
  title: { type: String, default: 'First/Senior Counselor at the Embassy of Palestine in Tunis' },
  photoUrl: { type: String, default: '' },
  workExperience: { type: [ExperienceSchema], default: [] },
  education: { type: [EducationSchema], default: [] }
}, { timestamps: true });

export default mongoose.model('Profile', ProfileSchema);
