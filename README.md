# Backend – Nader Portfolio

## Setup
1. Copy `.env.example` to `.env` and fill values.
2. Generate a salted hash for your admin password:
   ```bash
   cd backend
   npm install
   npm run hash -- "<your_salt>" "<your_password>"
   # Copy the printed hex into ADMIN_PASSWORD_HASH and set ADMIN_SALT to your salt
   ```
3. Seed the database (optional; production will auto-create on first GET/PUT):
   ```bash
   npm run seed
   ```
4. Start the server:
   ```bash
   npm run dev
   # or
   npm start
   ```

## API
- `POST /api/auth/login` { email, password }
- `GET /api/profile` / `PUT /api/profile` (admin)
- `GET /api/fields` / `PUT /api/fields` (admin)
- `GET /api/posts` / `POST` / `PUT/:id` / `DELETE/:id` (admin for write)
- `GET /api/sections` / `POST` / `PUT/:id` / `DELETE/:id` (admin for write)
- `POST /api/upload/pdf` (FormData: pdf)
- `POST /api/upload/photo` (FormData: photo)
- Static uploads served at `/uploads/<filename>`

## Deploying on Render
- Create a new Web Service from your Git repo pointing to `backend/`.
- **Build Command:** `npm install`  
  **Start Command:** `node src/app.js`
- Add environment variables from `.env.example` (fill with real values).
- Ensure a MongoDB Atlas cluster is reachable from Render.

## Notes
- JWT expiry is set to 12h.
- Admin email is fixed by env and enforced on login.    