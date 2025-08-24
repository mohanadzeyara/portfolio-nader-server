import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  adminEmail: process.env.ADMIN_EMAIL?.toLowerCase(),
  adminSalt: process.env.ADMIN_SALT,
  adminPasswordHash: process.env.ADMIN_PASSWORD_HASH,
  corsOrigin: process.env.CORS_ORIGIN || '*'
};

for (const key of ['mongoUri','jwtSecret','adminEmail','adminSalt','adminPasswordHash']) {
  if (!config[key]) {
    console.error(`Missing required env: ${key}`);
  }
}
