// Generate bcrypt hash for admin password
const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.log('Usage: node scripts/hash-password.js <password>');
  console.log('Example: node scripts/hash-password.js mypassword');
  process.exit(1);
}

async function hashPassword(password) {
  try {
    const hash = await bcrypt.hash(password, 12);
    console.log('Password:', password);
    console.log('Hash:', hash);
    console.log('\nAdd this hash to src/lib/auth.ts:');
    console.log(`const ADMIN_PASSWORD_HASH = '${hash}';`);
  } catch (error) {
    console.error('Error hashing password:', error);
  }
}

hashPassword(password);