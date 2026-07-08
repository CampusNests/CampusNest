# CampusNest — Local Run Instructions

Quick commands to run the app locally:

- Full app (frontend + backend):

```bash
npm start
```

- Frontend only:

```bash
cd Frontend
npm run dev
```

- Backend only:

```bash
cd Backend
npm start      # production-like
npm run dev    # use nodemon for auto-restart
```

Environment notes

- Backend uses `Backend/dbpasswords.env` for `MONGO_URI`, `PORT`, and `DNS_SERVERS`.
- If MongoDB connection fails with DNS/SRV errors, try switching networks (home/VPN) or set `DNS_SERVERS` to a reachable resolver.

Troubleshooting

- If frontend build/install fails, remove `node_modules` and run `npm install` inside `Frontend`.
- If backend cannot reach MongoDB, verify Atlas IP whitelist and that `MONGO_URI` is correct.

