// Usage: npm run hash -- <salt> <password>
import shajs from 'sha.js';
const [salt, password] = process.argv.slice(2);
if (!salt || !password) {
  console.log('Usage: npm run hash -- <salt> <password>');
  process.exit(1);
}
const digest = shajs('sha256').update(`${salt}${password}`).digest('hex');
console.log('SHA-256(salt+password):', digest);
