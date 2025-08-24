import { connectDB } from './db.js';
import Profile from './models/Profile.js';
import Fields from './models/Fields.js';

(async () => {
  await connectDB();

  if (!(await Profile.countDocuments())) {
    await Profile.create({
      name: 'Nader Zeyara',
      title: 'First/Senior Counselor at the Embassy of Palestine in Tunis',
      photoUrl: '',
      workExperience: [
        { role: 'Trainee', place: 'India', start: '', end: '', note: 'Training period in India' },
        { role: 'Staff', place: 'Ministry of Finance, Palestine', start: '', end: '', note: 'MOF in Palestine' },
        { role: 'Diplomat', place: 'Ethiopia', start: '2001', end: '2009', note: 'Diplomat in Ethiopia (2001–2009)' },
        { role: 'Senior Counselor', place: 'Tunisia', start: '2010', end: 'Present', note: 'Educational department, more than 25 years experience' }
      ],
      education: [
        { degree: "Master's", field: 'Arabic', institution: 'Palestine', year: '', note: '1st in Arabic (Palestine)' },
        { degree: "Master's", field: '(to be added by admin)', institution: '—', year: '', note: '2nd in English (topic to be added by admin)' },
        { degree: "Master's", field: 'Arabic', institution: 'Tunisia', year: '', note: '3rd in Arabic (Tunisia)' },
        { degree: 'PhD', field: '(to be added by admin)', institution: '—', year: '2023', note: 'PhD in 2023 (topic to be added by admin)' }
      ]
    });
    console.log('Seeded Profile');
  }

  if (!(await Fields.countDocuments())) {
    await Fields.create({
      skills: ['Add your skill here', 'Another skill'],
      awards: ['Add an award here'],
      languages: ['Arabic', 'English']
    });
    console.log('Seeded Fields');
  }

  console.log('Seeding complete.');
  process.exit(0);
})();
