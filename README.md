# VistaStay

Simple vacation rental listing app built with Express, EJS, MongoDB, Passport, and Razorpay integration.

## Project structure

- `app.js` - main Express server and middleware setup
- `models/` - Mongoose models (`listing.js`, `review.js`, `user.js`)
- `routes/` - Express route modules
- `controllers/` - route handlers
- `views/` - EJS templates and layouts
- `public/` - static assets (CSS, JS)

## Requirements

- Node.js (v16+ recommended)
- npm
- MongoDB (Atlas URI or local instance)

## Environment variables

Create a `.env` file in the project root with the following variables (example):

```
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/vistastay?retryWrites=true&w=majority
SECRET=your_session_secret_here
# optional (if used in code instead of hard-coded values)
RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=8080
NODE_ENV=development
```

> Important: The app expects `process.env.SECRET` for the session `secret`. If you see the deprecation warning `express-session deprecated req.secret; provide secret option`, ensure `.env` contains `SECRET` and restart the server.

## Install

Open a terminal in the project root and run:

```cmd
npm install
```

## Run (development)

To start the server directly with Node (Windows `cmd.exe`):

```cmd
node app.js
```

Or, if you have an `npm start` script configured, use:

```cmd
npm start
```

The server listens on port `8080` by default (changeable via `PORT` env var).

## Common issues & troubleshooting

- ReferenceError in EJS templates (e.g. `currUser is not defined` or `success is not defined`):
  - Make sure middleware that sets `res.locals` runs before your routes. In `app.js` there is middleware which sets `res.locals.currUser = req.user` and flash locals. Ensure it appears before `app.use` for your routers.
  - Defensive template checks are helpful. For example: `<% if (typeof currUser !== 'undefined' && currUser) { %>` to avoid ReferenceError when the variable isn't present in the template scope.

- Session deprecation warning (`req.secret`):
  - Ensure the session middleware configuration includes a `secret` value from `process.env.SECRET` as shown in `app.js`.
  - If you don't have a `.env` or `SECRET`, create one and restart the server.

- MongoDB connection issues:
  - Verify `ATLASDB_URL` is correct and reachable from your environment.
  - Check IP whitelist / network access for Atlas.

- Static files or CSS not loading:
  - Confirm `app.use(express.static(path.join(__dirname, 'public')))` exists in `app.js` and you are using correct `/css/...` paths in templates.

## Development tips

- If you change `.env`, restart the server.
- Use `nodemon` for auto-restart during development: `npm i -D nodemon` and run `npx nodemon app.js`.
- Consider storing sensitive keys (Razorpay keys, DB credentials) in a secrets manager for production.

## Next steps you might want me to help with

- Scan views for other raw references to `currUser`, `success`, `error`, or `updated` and add safe guards.
- Add a `README` section explaining how to run database seeders in `init/`.
- Add an `npm start` script or `Procfile` for deployment.

---

If you'd like any content changed in this README (more details, examples, or commands), tell me what to add and I'll update it.