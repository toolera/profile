// Test authentication system
const bcrypt = require('bcryptjs');

console.log('Testing authentication system...');
console.log('Environment variables:');
console.log('ADMIN_USERNAME:', process.env.ADMIN_USERNAME);
console.log('ADMIN_PASSWORD_HASH:', process.env.ADMIN_PASSWORD_HASH);

const testPassword = 'admin123';
const hash = process.env.ADMIN_PASSWORD_HASH;

if (!hash) {
  console.log('❌ No password hash found in environment');
  process.exit(1);
}

bcrypt.compare(testPassword, hash).then(result => {
  console.log(`\nTesting password "${testPassword}" against hash:`);
  console.log('Hash:', hash);
  console.log('Match result:', result ? '✅ VALID' : '❌ INVALID');
}).catch(error => {
  console.error('Error comparing passwords:', error);
});