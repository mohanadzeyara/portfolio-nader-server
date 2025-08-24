// Helper to update ADMIN_EMAIL in .env (local dev convenience)
import fs from 'fs';
import path from 'path';

const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.error('No .env found next to backend/');
  process.exit(1);
}
const content = fs.readFileSync(envPath, 'utf8');
const newEmail = process.argv[2];
if (!newEmail) {
  console.error('Usage: npm run change-email -- <new-email>');
  process.exit(1);
}
const updated = content.match(/^ADMIN_EMAIL=/m)
  ? content.replace(/^ADMIN_EMAIL=.*$/m, `ADMIN_EMAIL=${newEmail}`)
  : content + `\nADMIN_EMAIL=${newEmail}\n`;
fs.writeFileSync(envPath, updated);
console.log('Updated ADMIN_EMAIL in .env');
