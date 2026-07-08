# CampusNest

CampusNest is a student-hostel booking web app with a React frontend and an Express/MongoDB backend.

## What the website is

The website provides:
- student login and hostel discovery
- manager dashboard access
- admin access panel
- hostel listings, details, and booking flow

## Run locally

### Full app (frontend + backend)

From the project root:

```bash
npm start
```

This runs both:
- frontend on `http://localhost:5173`
- backend on `http://localhost:5000`

### Frontend only

```bash
cd Frontend
npm run dev
```

Open the website at:

```text
http://localhost:5173
```

### Backend only

```bash
cd Backend
npm install
npm start      # production-like
npm run dev    # nodemon auto-restart
```

The backend API is available at:

```text
http://localhost:5000
```

## Environment setup

Create `Backend/dbpasswords.env` with:

```env
PORT=5000
MONGO_URI=<your-mongodb-uri>
DNS_SERVERS=2001:43ff::146
```

The server loads this file and uses it for MongoDB connection and optional DNS resolver override.

## Notes

- The frontend uses a Vite proxy to forward `/api` requests to the backend.
- The site should open at `http://localhost:5173` when the frontend dev server is running.
- If the backend does not connect, check the MongoDB URI and Atlas network settings.

## Troubleshooting

- If the frontend fails during startup, delete `Frontend/node_modules` and run `npm install` again.
- If the backend fails to connect to MongoDB, verify `MONGO_URI` and whitelist your IP in Atlas.
- Ensure `Backend/dbpasswords.env` is not committed to Git.

