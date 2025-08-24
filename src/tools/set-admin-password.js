// Usage: node tools/set-admin-password.js 'your-new-password' 'optional-salt-hex'
import shajs from 'sha.js';
import crypto from 'crypto';

const password = process.argv[2];
if (!password) {
  console.error("Please provide a password. Example: node tools/set-admin-password.js 'MyStrongPass123'");
  process.exit(1);
}
let salt = process.argv[3];
if (!salt) {
  salt = crypto.randomBytes(8).toString('hex');
}
const hash = new shajs.sha256().update(`${salt}${password}`).digest('hex');
console.log("ADMIN_SALT=" + salt);
console.log("ADMIN_PASSWORD_HASH=" + hash);
